import jsonConfig from "../lib/css-fabric/_generated/css.fabric.config.json";
import cssFile from "../lib/styles/css-fabric/core/css-fabric.css";

const getCssFile = () => { 
  return cssFile;
};

const getJsonConfig = (module?: string) => {
  if (module) return jsonConfig["css-config"]["modules"][module] || {};
  return jsonConfig;
};

export default { getSassConfig: getCssFile, getJsonConfig }; 
