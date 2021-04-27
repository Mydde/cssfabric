"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const css_fabric_config_json_1 = __importDefault(require("../src/css-fabric/_generated/css.fabric.config.json"));
const getSassConfig = () => {
    return css_fabric_config_json_1.default;
};
const getJsonConfig = (module) => {
    if (module)
        return css_fabric_config_json_1.default["css-config"]["modules"][module] || {};
    return css_fabric_config_json_1.default;
};
exports.default = { getSassConfig, getJsonConfig };
