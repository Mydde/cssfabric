const { src, dest, watch, series, parallel } = require("gulp");
const spawn = require("cross-spawn"); 

function sassify(cb) {
  
  // const child1 = spawn.sync("json-to-scss json/*.* scss");
  
  const child = spawn.sync("json-to-scss css-fabric/_config/*.*  css-fabric/_config.scss  --mo");

  cb();
}

exports.json2scss = function () {
  // console.log(process.env)
  watch("css-fabric/_config/*.json", sassify);
};
