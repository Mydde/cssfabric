"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabricConfig = require("./cssfabric.json");
const { fabricGeneratedDir, fabricJsonExportFile } = fabricConfig;
const module_1 = __importDefault(require());
const getCssFile = () => {
    return "cssFile";
};
//
const getModuleConfig = (module) => {
    if (module)
        return module_1.default["css-config"]?.["modules"]?.[module] || {};
    return module_1.default;
};
const getModuleData = (module) => {
    if (module)
        return module_1.default["css-config"]?.["modules"]?.[module]?.["_data"] || {};
    return module_1.default;
};
const getModuleMetaData = (module) => {
    if (module)
        return module_1.default["css-config"]?.["modules"]?.[module]?.["_metadata"] || {};
    return module_1.default;
};
/**
 *
 * @param module does the job
 * @returns
 */
const getModuleDocs = (module) => {
    if (module)
        return module_1.default["css-config"]?.["modules"]?.[module]?.["_metadata"] || {};
    return module_1.default;
};
exports.default = {
    getSassConfig: getCssFile,
    getModuleConfig,
    getModuleData,
    getModuleMetaData,
    getModuleDocs
};
