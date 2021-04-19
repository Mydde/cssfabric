const gulp = require("gulp"),
  unescapeJs = require("unescape-js"),
  jsonTransform = require("gulp-json-transform"),
  spawn = require("cross-spawn");

gulp.task("jsonComplete", function (cb) {
  gulp
    .src("./css-fabric/_config/**/*.json")
    .pipe(
      jsonTransform(function (file_content, file_info) {
        return da_callback({ file_content: file_content, file_info });
      }, "\t")
    )
    .pipe(gulp.dest("./css-fabric/_generated"));

  cb();
});

function da_callback(ard) {
  const { file_content, file_info } = ard;
  file_info.relative = unescapeJs(file_info.relative);
  const module_name = file_info.relative.split("\\")?.pop().split(".")?.[0];

  if (file_content?.[module_name]) {
    let module_conf = file_content[module_name];

    if (module_conf) {
      const module_data = module_conf?.["_data"] || {};

      console.log({ module_data });

      if (!module_conf?.["_docs"]) module_conf["_docs"] = {};
      const out_docs = {};
      Object.keys(module_data).forEach((v, i, a) => {
        if (!module_conf?.["_docs"]?.[v]) out_docs[v] = "";
      });
      file_content[module_name]._docs = out_docs;
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
