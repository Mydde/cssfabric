

import jsonConfig from "./_generated/export.variables.json" ; 
// import from "../../cssfabric.json"
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

export interface IFabricConfModuleDocsAttributesPart {
  [key: string]: any;
}

const getCssFile = () => { 
  return "cssFile";
};
//
const getModuleList = ():any  => {
   return jsonConfig["cssfabric"]?.["modules"]  || {};
};

const getModuleConfig = (module?: string):IFabricConfModulePart => {
  if (module) return jsonConfig["cssfabric"]?.["modules"]?.[module] || {};
  return jsonConfig;
};

const getModuleData = (module?: string):IFabricConfModuleDataPart => {
  if (module) return jsonConfig["cssfabric"]?.["modules"]?.[module]?.["_data"] || {};
  return jsonConfig;
};

const getModuleMetaData = (module?: string):IFabricConfModuleMetaDataPart => {
  if (module)
    return jsonConfig["cssfabric"]?.["modules"]?.[module]?.["_metadata"] || {};
  return jsonConfig; 
};

const getModuleDocs = (module?: string):IFabricConfModuleDocsPart => {
  if (module)
    return jsonConfig["cssfabric"]?.["modules"]?.[module]?.["_docs"] || {};
  return jsonConfig;
};

const getModuleDocsAttributes = (module?: string):IFabricConfModuleDocsAttributesPart => {
  if (module)
    return jsonConfig["cssfabric"]?.["modules"]?.[module]?.["_docs"]?.["attributes"] || {};
  return jsonConfig;
};

export default {
  getModuleList,
  getSassConfig: getCssFile,
  getModuleConfig, 
  getModuleData, 
  getModuleMetaData,
  getModuleDocs,
  getModuleDocsAttributes
};
