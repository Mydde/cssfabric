const gulp = require("gulp"),
  data = require("gulp-data"),
   unescapeJs = require('unescape-js'),
  jsonTransform = require("gulp-json-transform"),
  // fabricRef = require("fabric-ref"),
  fs = require("fs"),
  // gulpData = require("css-fabric-data"),
  through = require("through2");

const spawn = require("cross-spawn");
const jsonModify = require("gulp-json-modify");

gulp.task("jsonComplete", function (cb) {
  gulp
    .src("./css-fabric/_config/**/*.json")
    .pipe(
      jsonTransform(function (file_content, file_info) {
    
        return da_callback({ file_content: unescapeJs(file_content), file_info });
      }, "\n")
    )
    .pipe(gulp.dest("./css-fabric/_generated"));
});

function da_callback(ard) {
  const { file_content, file_info } = ard;
  const module_name = file_info.relative.split("\\")?.pop().split(".")?.[0];

  if (file_content?.[module_name]) {
    let module_conf = file_content[module_name];

    if (module_conf) {
      console.log({ module_conf });
      const module_data = module_conf?.["_data"] || {};

     // if (!module_conf?.["_docs"]) {
        file_content[module_name]._docs = {init:true,lo:Object.keys(module_data)};
     // }
    }
  } else {
    console.log(
      "module not registered or filename mismatch filename : " + module_name
    );
  }

  return { ...file_content };
}

function sassify(cb) {
  const child = spawn.sync(
    "json-to-scss css-fabric/_config/*.*  css-fabric/_config.scss  --mo"
  );

  cb();
}

exports.json2scss = function () {
  gulp.watch("css-fabric/_config/*.json", sassify);
};
