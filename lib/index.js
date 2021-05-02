"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_variables_json_1 = __importDefault(require("../src/css-fabric/_generated/export.variables.json"));
const getCssFile = () => {
    return "cssFile";
};
//
const getModuleConfig = (module) => {
    if (module)
        return export_variables_json_1.default["css-config"]?.["modules"]?.[module] || {};
    return export_variables_json_1.default;
};
const getModuleData = (module) => {
    if (module)
        return export_variables_json_1.default["css-config"]?.["modules"]?.[module]?.["_data"] || {};
    return export_variables_json_1.default;
};
const getModuleMetaData = (module) => {
    if (module)
        return export_variables_json_1.default["css-config"]?.["modules"]?.[module]?.["_metadata"] || {};
    return export_variables_json_1.default;
};
/**
 *
 * @param module does the job
 * @returns
 */
const getModuleDocs = (module) => {
    if (module)
        return export_variables_json_1.default["css-config"]?.["modules"]?.[module]?.["_metadata"] || {};
    return export_variables_json_1.default;
};
exports.default = {
    getSassConfig: getCssFile,
    getModuleConfig,
    getModuleData,
    getModuleMetaData,
    getModuleDocs
};
