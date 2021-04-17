const { src, dest, watch, series, parallel } = require("gulp");
const spawn = require("cross-spawn"); 

function sassify(cb) {
  
  // const child1 = spawn.sync("json-to-scss json/*.* scss");
  
  const child = spawn.sync("json-to-scss scss/_config/*.*  scss/_config.scss  --mo");

  cb();
}

exports.json2scss = function () {
 
  watch("scss/_config/*.json", sassify);
};
