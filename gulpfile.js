const gulp = require("gulp"),
  unescapeJs = require("unescape-js"),
  jsonTransform = require("gulp-json-transform"),
  cache = require("gulp-cached"),
  gulpSass = require("gulp-sass"),
  // sassExport = require("gulp-sass-export"),
  mergeJson = require("gulp-merge-json"),
  gulFileList = require("gulp-filelist"),
  minifyCss = require("gulp-minify-css"),
  fs = require("fs"),
  gulpRename = require("gulp-rename"),
  gulpDownload = require("gulp-download-stream"),
  gulpConcat = require("gulp-concat-util"),
  sassJson = require("gulp-sass-json"),
  sassExport = require("gulp-sass-export"),
  sassVarsToJs = require("gulp-sass-vars-to-js"),
  gulpIgnore = require("gulp-ignore");

gulpSass.compiler = require("sass");

var fabricConfig = require("./cssfabric.json");

/**
 *
 * @param {File} file
 * @returns File
 */
const json_comments = (file) => {
  let { file_content, file_info } = file;

  file_info.relative = unescapeJs(file_info.relative);
  const module_name = file_info.relative.split("\\")?.pop().split(".")?.[0];

  if (file_content?.[module_name]) {
    let module_conf = file_content[module_name];

    if (module_conf && !module_conf?.["_metadata"])
      module_conf["_metadata"] = {};
    if (module_conf && !module_conf?.["_data"]) module_conf["_data"] = {};
    if (module_conf && !module_conf?.["_docs"]) module_conf["_docs"] = {};

    const module_out = {};

    if (module_conf) {
      const module_metadata = (module_out["_metadata"] =
        module_conf?.["_metadata"] || {});
      const module_data = (module_out["_data"] = module_conf?.["_data"] || {});
      const module_docs = (module_out["_docs"] = module_conf?.["_docs"] || {});

      const out_docs = {};
      let out_docs_changed = false;

      /**
       * loop on _data keys, check if in _docs[]
       */
      Object.keys(module_data).forEach((v, i, a) => {
        if (!module_docs?.[v]) {
          module_out["_docs"][v] = "";
          out_docs_changed = true;
        }
      });

      Object.keys(module_docs).forEach((k, i, a) => {
        // :undefined because boolean values to test for
        if (module_data?.[k] === undefined) {
          if (
            !Boolean(module_docs[k].length) ||
            module_out["_docs"][k] !== "deleted"
          ) {
            module_out["_docs"][k] = "deleted" + module_docs[k];
          } else {
            (module_out["_docs"] = undefined), delete out_docs[k];
          }
          out_docs_changed = true;
        }
      });

      if (out_docs_changed)
        file_content[module_name] = Object.assign(
          file_content[module_name],
          module_out
        );
    } else {
      file_content[module_name] = {
        _metadata: {},
        _data: {},
        _docs: {},
      };
    }
  } else {
    file_content = {
      [module_name]: {
        _metadata: {},
        _data: {},
        _docs: {},
      },
    };
    console.log("module not registered or filename mismatch : " + module_name);
  }

  return { ...file_content };
};

function fabricVarExportFile(filePath) {
  // name of the module, from path
  let module_name = filePath
    .substring(filePath.lastIndexOf("modules/"))
    .replace("modules/", "");

  let module = filePath.substring(filePath.lastIndexOf("/") + 1);

  return " @use '../modules/" + module_name + "';" + "\r\n";
}

function fabricReadmeFile(filePath) {
  // name of the module, from path
  let module_name = filePath
    .substring(filePath.lastIndexOf("modules/"))
    .replace("modules/", "");

  let module = filePath.substring(filePath.lastIndexOf("/") + 1);

  let out = "### " + module_name + "" + "\r\n";

  return out;
}
/**
 *
 * @param {string} filePath
 * @returns
 */
function fabricScssImportFile(filePath) {
  // name of the module, from path
  let module_name = filePath
    .substring(filePath.lastIndexOf("modules/"))
    .replace("modules/", "");

  let module = filePath.substring(filePath.lastIndexOf("/") + 1);

  return " @use '../modules/" + module_name + "';" + "\r\n";
}

function readVars(filePath) {
  const out = fs.readFileSync(filePath + ".scss");

  fs.readFile(filePath + ".scss", "utf-8", (err, data) => {
    // console.log({ data });
  });

  return "// " + filePath + "\r\n";
}

/**
 *
 * @param {*} filePath
 * @returns
 */
function fabricScssExportVarsFile(filePath) {
  // console.log("fabricScssExportVarsFile", filePath);

  // name of the module, from path
  let module_name = filePath
    .substring(filePath.lastIndexOf("modules/"))
    .replace("modules/", "");

  let module = filePath.substring(filePath.lastIndexOf("/") + 1);

  // return " @use '../modules/" + module_name + "';" + "\r\n";

  return readVars(filePath);
}

const {
  fabricRootDir,
  fabricStylesDir,
  fabricConfDir,
  fabricModuleDir,
  generatedDir,
} = fabricConfig;

// from task_mergeInclude;
function task_varsExport(cb) {
  let sourceFiles = fabricModuleDir + "/**/*.scss";

  return cb();
}

function task_readme(cb) {
  gulp
    .src(fabricModuleDir + "/*/*[!_].scss")
    .pipe(
      gulFileList("readme.md", {
        destRowTemplate: fabricReadmeFile,
        removeExtensions: true,
      })
    )
    .pipe(cache(task_readme))
    .pipe(gulp.dest(generatedDir))
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
  const dir = fabricStylesDir + "/core";

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
          path.dirname = path.dirname;
          path.extname = path.extname;
          path.basename = path.basename.replace("-", ".");
        })
      )
      // to css and to /core
      .pipe(
        gulpSass({ outputStyle: "expanded" }).on("error", gulpSass.logError)
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
          path.dirname = path.dirname;
          path.extname = ".min.css";
          path.basename = path.basename.replace("-", ".");
        })
      )
      .pipe(gulp.dest(`${fabricStylesDir}/core`))
      .on("end", () => {
        return cb();
      })
  );
}

/**
 *
 * @param {function} cb
 * @returns function
 */
function task_addComments(cb) {
  return gulp
    .src(fabricConfDir + "/**/*.json")
    .pipe(cache(task_addComments))
    .pipe(
      jsonTransform(function (file_content, file_info) {
        return json_comments({ file_content: file_content, file_info });
      }, "\t")
    )
    .pipe(cache(task_addComments))
    .pipe(gulp.dest(fabricConfDir))
    .on("end", () => {
      return cb();
    });
}

/**
 *  merge json config files into one css.fabric.config.json
 *
 * @param {function} cb
 */
function task_mergeJsonConf(cb) {
  console.log("task_mergeJsonConf  __________________________________________");
  let sourceFiles = [`${fabricConfDir}/**/*.json`];

  gulp
    .src(sourceFiles)
    .pipe(
      mergeJson({
        fileName: "css.fabric.config.json",
        transform: (mergedJson) => {
          return {
            ["css-config"]: {
              modules: { ...mergedJson },
            },
          };
        },
      })
    )
    .pipe(gulp.dest(generatedDir))
    .on("end", () => {
      return cb();
    });
}

function watchJsonTask(cb) {
  gulp.watch(
    fabricConfDir + "/**/*.json",
    gulp.series(task_mergeJsonConf) // task_addComments,
  );

  cb();
}

function watchSassTask(cb) {
  gulp.watch(fabricRootDir, gulp.series(task_sass2css, task_mergeInclude, )); // task_varsExport

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
 
function taskDownload(cb) {
  gulpDownload(
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
  ).pipe(gulp.dest("resources/css/"));

  cb();
}

exports.watchJson = watchJsonTask;
exports.watchSass = watchSassTask;
exports.watchInclude = watchInclude;
exports.watchReadme = watchReadme;
exports.taskDownload = taskDownload;
