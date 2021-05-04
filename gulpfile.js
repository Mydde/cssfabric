// ## WIP

const gulp             = require("gulp"),
      unescapeJs       = require("unescape-js"),
      jsonTransform    = require("gulp-json-transform"),
      cache            = require("gulp-cached"),
      gulpSass         = require("gulp-sass"),
      // sassExport = require("gulp-sass-export"),
      mergeJson        = require("gulp-merge-json"),
      gulFileList      = require("gulp-filelist"),
      minifyCss        = require("gulp-minify-css"),
      fs               = require("fs"),
      gulpRename       = require("gulp-rename"),
      gulpDownload     = require("gulp-download-stream"),
      gulpConcat       = require("gulp-concat-util"),
      sassJson         = require("gulp-sass-json"),
      sassExport       = require("gulp-sass-export"),
      sassVarsToJs     = require("gulp-sass-vars-to-js"),
      parse            = require("sass-parser")(),
      gulpJsBeautifier = require('gulp-jsbeautifier'),
      modifyFile       = require("gulp-modify-file");
gulpIgnore             = require("gulp-ignore");

var spawn = require("child_process").spawn;

gulpSass.compiler = require("sass");

var fabricConfig = require("./cssfabric.json");

const {
          fabricRootDir,
          fabricStylesDir,
          fabricConfDir,
          fabricModuleDir,
          fabricGeneratedDir,
      } = fabricConfig;

function fabricReadmeFile(filePath) {
    // name of the module, from path
    let module_name = filePath
        .substring(filePath.lastIndexOf("modules/"))
        .replace("modules/", "");
    
    let module = filePath.substring(filePath.lastIndexOf("/") + 1);
    
    let out = "### " + module_name + "" + "\r\n";
    
    return out;
}

const sassJsonExporter = (file) => {
    let {file_content, file_info} = file;
    
    let obj;
    obj = file_content.obj;
    obj = obj.substring(0, obj.length - 1).split("|");
    
    const redPath       = "";
    const redModulePath = fabricModuleDir + "/";
    
    let header       = (footer = "");
    let importExport = `@import  "./src/${redPath}vendor/sass-json-export/stylesheets/sass-json-export.scss";`;
    
    Object.values(obj).forEach((v, k, a) => {
        let module_path = redModulePath + v;
        let module_name = v
            .replace("_", "")
            .split("/")
            ?.pop()
            .split(".")?.[0]
            .replace("-vars", "");
        
        if (v) {
            header += makeHeader(module_path, module_name);
            footer += makeFooter(module_name);
        }
    });
    
    let out = header;
    out += "\r\n";
    out += importExport + "\r\n";
    out += "\r\n";
    out += footer;
    
    function makeHeader(path, module_name) {
        // form is module-vars.$module-config
        return '@use "' + path + '.scss" as  ' + module_name + "; \r\n";
    }
    
    function makeFooter(module_name) {
        // form is module.$module-(config|*)
        //  $export : ( data: base-vars.$base-config, docs :base-vars.$base-docs , metadata :base-vars.$base-metadata  );
        
        let out1 = ` ( _data: ${module_name}.$${module_name}-config, _docs :${module_name}.$${module_name}-docs , _metadata :${module_name}.$${module_name}-metadata  )`;
        
        return (
            "@include json-encode(" + out1 + ",comment," + module_name + ");\r\n"
        );
    }
    
    return out;
};

function fabricVarExportFile(filePath) {
    // name of the module, from path
    let module_name = filePath
        .substring(filePath.lastIndexOf("modules/"))
        .split("\\")
        ?.pop()
        .split(".")?.[0]
        .replace("modules/", "");
    
    return module_name + "|";
}

function fabricCssVarExportFile(filePath) {
    let module_path = filePath
        .split("modules/")[1]
        .replace("modules", "")
        .replace(".scss", "");
    
    let module_filename = filePath
        .substring(filePath.lastIndexOf("/"))
        .replace(".scss", "")
        .replace("/", "");
    
    let module_name = filePath
        .substring(filePath.lastIndexOf("/_"))
        .replace(".scss", "")
        .replace("-vars", "")
        .replace("_", "")
        .replace("/", "");
    
    return `|{"module_path" : "${module_path}","module_filename" : "${module_filename}","module_name" : "${module_name}"}`;
}

// exports sass maps to json
function task_cssVarsExport(cb) {
    let sourceFiles = fabricModuleDir + "/**/_*-vars.scss";
    gulp
        .src(sourceFiles)
        .pipe(
            gulFileList("cssfabric-vars.css", {
                destRowTemplate:  fabricCssVarExportFile,
                removeExtensions: false,
            })
        )
        .pipe(
            modifyFile((content, path, file) => {
                let exp    = content.split("|"); // JSON.parse()
                let header = (footer = "");
                
                let utils         = `@use '${fabricRootDir}/utils' as utils;` + "\r\n";
                const openVarTag  = ":root{";
                const closeVarTag = "}";
                
                Object.values(exp).forEach((v, k, a) => {
                    if (v) {
                        moduleConf = JSON.parse(v);
                        
                        if (moduleConf) {
                            header +=
                                `@use '${fabricModuleDir}/${moduleConf.module_path}' as ${moduleConf.module_name};` +
                                "\r\n";
                            footer +=
                                `@include utils.scssVarsToCssVars(${moduleConf.module_name},${moduleConf.module_name}.$${moduleConf.module_name}-config);` +
                                "\r\n";
                        }
                    }
                });
                
                const out = utils + header + openVarTag + footer + closeVarTag;
                
                return out;
            })
        )
        .pipe(gulpSass({outputStyle: "expanded", includePaths: [fabricModuleDir]}).on("error", gulpSass.logError))
        .pipe(gulp.dest(fabricStylesDir))
        .on("end", () => {
            return cb();
        });
}

// exports sass maps to json
function task_varsExport(cb) {
    let sourceFiles = fabricModuleDir + "/**/_*-vars.scss";
    
    gulp
        .src(sourceFiles)
        //.pipe(cache(task_varsExport))
        .pipe(
            gulFileList("ghost", {
                destRowTemplate:  fabricVarExportFile,
                removeExtensions: false,
            })
        )
        .pipe(gulpConcat("export-variables.try"))
        .pipe(gulpConcat.header('{"obj":"'))
        .pipe(gulpConcat.footer('"}'))
        .pipe(
            jsonTransform(function (file_content, file_info) {
                return sassJsonExporter({file_content: file_content, file_info});
            })
        )
        .pipe(cache(task_varsExport))
        // .pipe(sass().on('error', sass.logError))
        .pipe(gulpSass({outputStyle: "expanded"}).on("error", gulpSass.logError))
        .pipe(
            modifyFile((content, path, file) => {
                const start = '{"cssfabric":{"modules":{';
                const end   = " }}}";
                
                const regexIn  = /\/\*\! json-encode: {/gm;
                const regexOut = /} \*\//gm;
                
                let exp = content
                    .replace(regexIn, "")
                    .replace(regexOut, ",")
                    .replace(/,\s*$/, "");
                
                return `${start}${exp}${end}`;
            })
        )
        .pipe(gulpJsBeautifier())
        .pipe(
            gulpRename(function (path) {
                path.dirname  = path.dirname;
                path.extname  = ".json";
                path.basename = path.basename.replace("-", ".");
            })
        )
        .pipe(gulp.dest(fabricGeneratedDir))
        .on("end", () => {
            return cb();
        });
    
    return cb();
}

function task_readme(cb) {
    gulp
        .src(fabricModuleDir + "/*/*[!_].scss")
        .pipe(
            gulFileList("readme.md", {
                destRowTemplate:  fabricReadmeFile,
                removeExtensions: true,
            })
        )
        .pipe(cache(task_readme))
        .pipe(gulp.dest(fabricGeneratedDir))
        .on("end", () => {
            return cb();
        });
}

/**
 * concatenate css files
 * by min | responsive | ...
 *
 * @param {function} cb gulp callback
 */
function task_mergeInclude(cb) {
    //
    const dest = fabricStylesDir;
    const dir  = fabricStylesDir + "/core";
    
    const steps = [];
    // normal stylesheets
    steps.push(
        gulp
            .src([
                     `${dir}/**/*.css`,
                     `!${dir}/**/*responsive*.css`,
                     `!${dir}/**/*min*.css`,
                 ])
            .pipe(gulpConcat("cssfabric.css"))
            .pipe(gulpConcat.header("/** Merged by Mydde */"))
            .pipe(cache(task_mergeInclude))
            .pipe(gulp.dest(dest))
            .on("end", () => {
                return cb();
            })
    );
    
    // normal minified stylesheets
    steps.push(
        gulp
            .src([`${dir}/**/*min.css`, `!${dir}/**/*responsive*.css`])
            .pipe(gulpConcat("cssfabric.min.css"))
            .pipe(cache(task_mergeInclude))
            .pipe(gulp.dest(dest))
            .on("end", () => {
                return cb();
            })
    );
    
    // responsive stylesheets
    steps.push(
        gulp
            .src([`${dir}/**/*responsive.css`, `!${dir}/**/*min..css`])
            .pipe(gulpConcat("cssfabric.responsive.css"))
            .pipe(cache(task_mergeInclude))
            .pipe(gulp.dest(dest))
            .on("end", () => {
                return cb();
            })
    );
    
    // responsive minified stylesheets
    steps.push(
        gulp
            .src([`${dir}/**/*responsive.min.css`])
            .pipe(gulpConcat("cssfabric.responsive.min.css"))
            .pipe(cache(task_mergeInclude))
            .pipe(gulp.dest(dest))
            .on("end", () => {
                return cb();
            })
    );
    
    return [...steps];
}

/**
 * task_sass2css
 * transform scss to css
 * store files in /lib
 *
 * rename *-responsive to *.responsive, because not dot in sass file
 *
 * @param {function} cb
 * @returns function
 */
function task_sass2css(cb) {
    return (
        gulp
            .src(`${fabricModuleDir}/**/*.scss`)
            .pipe(gulpIgnore.exclude("**/*css-fabric*"))
            .pipe(
                gulpRename(function (path) {
                    path.dirname  = path.dirname;
                    path.extname  = path.extname;
                    path.basename = path.basename.replace("-", ".");
                })
            )
            // to css and to /core
            .pipe(
                gulpSass({outputStyle: "expanded"}).on("error", gulpSass.logError)
            )
            .pipe(gulp.dest(`${fabricStylesDir}/core`))
            // to css and minify and to /core
            .pipe(
                minifyCss({
                              keepSpecialComments: 0,
                          })
            )
            .pipe(
                gulpRename(function (path) {
                    path.dirname  = path.dirname;
                    path.extname  = ".min.css";
                    path.basename = path.basename.replace("-", ".");
                })
            )
            .pipe(gulp.dest(`${fabricStylesDir}/core`))
            .on("end", () => {
                return cb();
            })
    );
}

function taskDownload(cb) {
    return gulpDownload(
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    )
        .pipe(gulp.dest("./src/vendor/normalize/"))
        .on("end", () => {
            return cb();
        });
}

function watchSassTask(cb) {
    // scss , css , scss
    gulp.watch(
        fabricModuleDir + "/**/*.scss",
        gulp.series(task_sass2css, task_mergeInclude, watchCssExportVars, task_varsExport)
    ); // task_varsExport
    
    cb();
}

// todo change to styleDir
function watchInclude(cb) {
    // gulp.watch(fabricStylesDir, task_mergeInclude);
    //gulp.watch(fabricModuleDir, task_mergeInclude);
    
    cb();
}

function watchReadme(cb) {
    // console.log([fabricModuleDir,"!"+fabricModuleDir + "/**/_*.scss"])
    gulp.watch(
        [fabricModuleDir, "!" + fabricModuleDir + "/**/_*.scss"],
        task_readme
    );
    
    cb();
}

function watchExportVars(cb) {
    gulp.watch(fabricRootDir, gulp.series(task_varsExport)); // task_varsExport
    
    cb();
}

function watchCssExportVars(cb) {
    gulp.watch(fabricModuleDir, gulp.series(task_cssVarsExport)); // task_varsExport
    
    cb();
}

// oly one called by npm
exports.watchSass = watchSassTask;

exports.watchInclude    = watchInclude;
exports.watchReadme     = watchReadme;
exports.watchExportVars = watchExportVars;

exports.watchCssExport = watchCssExportVars;

exports.taskDownload = taskDownload;
