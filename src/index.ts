import jsonConfig from "../src/css-fabric/_generated/css.fabric.config.json";
/* import cssFile from "../src/styles/css-fabric/core/css-fabric.css"; */

export interface IFabricConfModulePart {
  [key: string]: any;
}

export interface IFabricConfModuleDataPart {
  [key: string]: any;
}

export interface IFabricConfModuleMetaDataPart {
  [key: string]: any;
}
export interface IFabricConfModuleDocsPart {
  [key: string]: any;
}

const getCssFile = () => { 
  return "cssFile";
};

const getModuleConfig = (module?: string):IFabricConfModulePart => {
  if (module) return jsonConfig["css-config"]?.["modules"]?.[module] || {};
  return jsonConfig;
};

const getModuleData = (module?: string):IFabricConfModuleDataPart => {
  if (module) return jsonConfig["css-config"]?.["modules"]?.[module]?.["_data"] || {};
  return jsonConfig;
};

const getModuleMetaData = (module?: string):IFabricConfModuleMetaDataPart => {
  if (module)
    return jsonConfig["css-config"]?.["modules"]?.[module]?.["_metadata"] || {};
  return jsonConfig;
};
/**
 * 
 * @param module does the job
 * @returns 
 */
const getModuleDocs = (module?: string):IFabricConfModuleDocsPart => {
  if (module)
    return jsonConfig["css-config"]?.["modules"]?.[module]?.["_metadata"] || {};
  return jsonConfig;
};

export default {
  getSassConfig: getCssFile,
  getModuleConfig,
  getModuleData, 
  getModuleMetaData,
  getModuleDocs
};
