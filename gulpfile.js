
const gulp          = require("gulp"),
      unescapeJs    = require("unescape-js"),
      jsonTransform = require("gulp-json-transform"),
      cache         = require('gulp-cached'),
      sassExport    = require('gulp-sass-export'),
      mergeJson = require('gulp-merge-json'),
      spawn         = require("cross-spawn");

/**
 * 
 * @param {File} file 
 * @returns File
 */
const json_comments = (file) =>{

  const { file_content, file_info } = file;

  file_info.relative = unescapeJs(file_info.relative);
  const module_name = file_info.relative.split("\\")?.pop().split(".")?.[0];

  if (file_content?.[module_name]) {
    let module_conf = file_content[module_name]; 

    if (module_conf) {
      const module_data = module_conf?.["_data"] || {};
      const module_docs = module_conf?.["_docs"] || {}; 

      if (!module_conf?.["_docs"]) module_conf["_docs"] = {};

      const out_docs = {};
      let out_docs_changed = false;
      
      Object.keys(module_data).forEach((v, i, a) => {
        if (!module_conf?.["_docs"]?.[v]) { 
          out_docs[v] = "";
          out_docs_changed = true;
        }
      });

      Object.keys(module_docs).forEach((k, i, a) => {
          // :undefined because boolean values to test for
         if(module_data?.[k] === undefined){ 
            if(!Boolean(module_docs[k].length) || module_docs?.[k] !== "deleted:"){
              out_docs[k] = "deleted:" + module_docs[k];
            }else{
              out_docs[k] = undefined,
              delete( out_docs[k]);
            }
            out_docs_changed = true;
          }
      })

      if(out_docs_changed)   file_content[module_name]._docs = Object.assign(file_content[module_name]._docs,out_docs)  ;
    }else{
      file_content[module_name] = {
        "_metadata":{},
        "_data":{},
        "_docs":{}
      }
    }

  } else {
    console.log("module not registered or filename mismatch : " + module_name);
  }

  return { ...file_content };
}

const fabricRootDir   = './css-fabric',
      fabricStylesDir = 'styles',
      fabricConfDir   = `${fabricRootDir}/_config`,
      fabricModuleDir = `${fabricRootDir}/modules`,
      generatedDir    = `${fabricRootDir}/_generated`;

/**
 * add default comment key for each property
 * @returns function
 */
function task_scss2json(cb){
 
  spawn.sync(
    `json-to-scss ${fabricConfDir}/*.*   ${generatedDir}/_config.scss  --mo`
  );

  return cb();
}

function task_sass2css(cb){
  
  spawn.sync(
    `sass   ${fabricModuleDir}/:${fabricStylesDir}/css-fabric/core`
  );
  spawn.sync(
    `sass   ${fabricModuleDir}/:${fabricStylesDir}/css-fabric/min/ --style=compressed`
  );

  return cb();
}

/**
 * 
 * @param {function} cb 
 * @returns function
 */
function task_addComments   (cb) {
   
  return gulp.src(fabricConfDir+"/**/*.json")
              .pipe(cache(task_addComments))
              .pipe(
                jsonTransform(function (file_content, file_info) {
                  return json_comments({ file_content: file_content, file_info });
                }, "\t")
              )
              .pipe(cache(task_addComments))
              .pipe(gulp.dest(fabricConfDir))
              .on('end',()=>{return cb()});     
} 
 
function task_try(cb){
  let sourceFiles = [`${fabricConfDir}/**/*.json`]; 

  gulp.src(sourceFiles)
  .pipe(mergeJson({ 
    fileName: '_config.json',
    transform: (mergedJson) => {
      return {
          ['css-config']: {
              modules:   {...mergedJson}
          }
      };
  }}))
  .pipe(gulp.dest(generatedDir))
  .on('end',()=>{return cb()});    
}

function watchJsonTask(cb) { 
  
  gulp.watch(fabricConfDir+"/**/*.json", gulp.series(task_addComments,task_scss2json,task_try));

  cb();
}

function watchSassTask(cb) {   

  gulp.watch(fabricRootDir, task_sass2css);

  cb();
}

exports.watchJson = watchJsonTask;
exports.watchSass = watchSassTask;