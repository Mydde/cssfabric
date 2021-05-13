"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_variables_json_1 = __importDefault(require("../_generated/export.variables.json"));
const cssfabricClassNames_1 = __importDefault(require("./cssfabricClassNames"));
//
const getModuleList = () => {
    return export_variables_json_1.default["cssfabric"]?.["modules"] || {};
};
const getModuleConfig = (module) => {
    if (module)
        return export_variables_json_1.default["cssfabric"]?.["modules"]?.[module] || {};
    return export_variables_json_1.default;
};
const getModuleData = (module) => {
    if (module)
        return export_variables_json_1.default["cssfabric"]?.["modules"]?.[module]?.["_data"] || {};
    return export_variables_json_1.default;
};
const getModuleMetaData = (module) => {
    if (module)
        return export_variables_json_1.default["cssfabric"]?.["modules"]?.[module]?.["_metadata"] || {};
    return export_variables_json_1.default;
};
const getModuleDocs = (module) => {
    if (module)
        return export_variables_json_1.default["cssfabric"]?.["modules"]?.[module]?.["_docs"] || {};
    return export_variables_json_1.default;
};
const getModuleDocsAttributes = (module) => {
    if (module)
        return export_variables_json_1.default["cssfabric"]?.["modules"]?.[module]?.["_docs"]?.["attributes"] || {};
    return export_variables_json_1.default;
};
exports.default = {
    getModuleList,
    getModuleConfig,
    getModuleData,
    getModuleMetaData,
    getModuleDocs,
    getModuleDocsAttributes,
    getClassNames: cssfabricClassNames_1.default,
    getModuleClassNames: cssfabricClassNames_1.default,
    getModuleTagClassNames: cssfabricClassNames_1.default.getModuleTagClassNames,
    getModuleTagDebug: cssfabricClassNames_1.default.getModuleTagDebug,
};
