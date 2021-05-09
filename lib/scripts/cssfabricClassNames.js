"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cssfabric_1 = __importDefault(require("./cssfabric"));
const utils_1 = __importDefault(require("./utils"));
function listCssfabricClassNames(props) {
    const { module, moduleAttribute } = props;
    const moduleAttributes = cssfabric_1.default.getModuleDocsAttributes(module);
    const fabricAttributes = moduleAttributes[moduleAttribute];
    const moduleTag = fabricAttributes["tag"];
    const moduleKeys = fabricAttributes["keys"] || [];
    const moduleLevels = fabricAttributes["levels"] || [];
    const moduleLevelsDeclined = fabricAttributes["levelsDeclin"] || undefined;
    const moduleClassNames = fabricAttributes["classNames"] || {};
    let MAIN_COLLECT = [];
    let SKEL_COLLECT = {};
    finalParse();
    function finalParse() {
        parseKeys();
        parseLevelsWithoutKeys();
        parseLevels();
        parseClassNames();
        console.log({ SKEL_COLLECT });
    }
    function buildMainConcat(classNameList) {
        MAIN_COLLECT = MAIN_COLLECT.concat(classNameList);
    }
    function buildSkelConcat(classNameList, key = "_default") {
        SKEL_COLLECT[key] = classNameList;
    }
    function parseKeys() {
        // if keys
        if (moduleKeys.length) {
            switch (qualify(moduleKeys)) {
                case "arrayOfstrings":
                case "arrayOfnumbers":
                    const classNameList = moduleKeys.map((levelKey) => {
                        if (Boolean(moduleLevels[levelKey])) {
                            parseLinkedLevel(levelKey);
                        }
                        return (levelKey === '_') ? moduleTag : moduleTag + "-" + levelKey;
                    });
                    parseLevelWithFabricKeys(classNameList);
                    buildMainConcat(classNameList);
                    buildSkelConcat(classNameList);
                    break;
                case "arrayOfobjects":
                    break;
                case "arrayOfarrays":
                    // flatten ?
                    let out = moduleKeys.flat().map((levelKey) => {
                        if (moduleLevels[levelKey]) {
                            parseLinkedLevel(levelKey);
                        }
                        return moduleTag + "-" + levelKey;
                    });
                    MAIN_COLLECT = MAIN_COLLECT.concat(out);
                    buildMainConcat(out);
                    buildSkelConcat(out);
                    break;
            }
            if (!moduleKeys || !moduleKeys.length) {
                parseLevels();
            }
            // console.log('parseKeys', classNameList)
        }
    }
    function parseLevelWithFabricKeys(classNameList) {
        if (!classNameList)
            return;
        if (Array.isArray(moduleLevels)) {
            if (['strings', 'numbers'].includes(utils_1.default.isArrayOfTypes(moduleLevels))) {
                let out = moduleLevels.map((levelName) => {
                    let pp = classNameList.map((className) => {
                        return (levelName === '_') ? className : [className, levelName].join('-');
                    });
                    buildSkelConcat(pp, levelName);
                    return pp;
                })
                    .flat(2) || [];
                buildMainConcat(out);
            }
        }
        else {
            if (['arrays'].includes(utils_1.default.isObjectOfTypes(moduleLevels))) {
                let out = Object.keys(moduleLevels).map((levelKey) => {
                    const level = moduleLevels[levelKey];
                    return classNameList.map((className) => {
                        return level.map((levelName) => {
                            return levelName === '_' ? className + '-' + levelKey : className + '-' + levelKey + '-' + levelName;
                        });
                    });
                }).flat(2);
                buildMainConcat(out);
            }
            else {
                console.log("SHOULD BE parseLevelWithFabricKeys");
            }
        }
    }
    function parseLinkedLevel(levelKey) {
        // object of arrays
        if (utils_1.default.isObjectOfTypes(moduleLevels) === "arrays") {
            let level = moduleLevels[levelKey];
            if (moduleKeys.includes(levelKey) || levelKey.charAt(0) === "_") {
                let laliste = level.map((x) => moduleTag + "-" + levelKey + "-" + x);
                buildMainConcat(laliste);
                parseDeclinatedLevel(levelKey, laliste);
            }
        }
        else {
            console.log("SHOULD BE parseLinkedLevel");
        }
    }
    function parseDeclinatedLevel(levelKey, laliste) {
        if (moduleLevels[levelKey] && moduleLevelsDeclined[levelKey]) {
            const out = laliste
                .map((x) => {
                return moduleLevelsDeclined[levelKey].map((y) => {
                    return y === "_" ? x : [x, y].join("-");
                });
            })
                .flat(2);
            buildMainConcat(out);
        }
    }
    // only if no keys
    function parseLevels(actionType = null) {
        // parse levels
        if (moduleKeys && moduleKeys.length)
            return;
        // module levels string[]
        if (Array.isArray(moduleLevels) && ["numbers", "strings"].includes(utils_1.default.isArrayOfTypes(moduleLevels))) {
            let out = moduleLevels.map((y) => {
                return moduleTag + "-" + y;
            });
            //
            buildMainConcat(out);
        }
    }
    function parseLevelsWithoutKeys() {
    }
    function parseClassNames() {
        if (Object.keys(moduleClassNames).length) {
            if (utils_1.default.isObjectOfTypes(moduleClassNames) === "arrays") {
                let test = Object.keys(moduleClassNames)
                    .map((classNameKey) => {
                    let classNameValues = moduleClassNames[classNameKey];
                    //
                    return classNameValues.map((x) => classNameKey + "-" + x);
                })
                    .flat(2);
                buildMainConcat(test);
            }
        }
    }
    function qualify(vars) {
        if (Array.isArray(vars)) {
            return "arrayOf" + utils_1.default.isArrayOfTypes(vars);
        }
        if (typeof vars === "object") {
            return "objectOf" + utils_1.default.isObjectOfTypes(vars);
        }
    }
    return MAIN_COLLECT;
}
exports.default = {
    getModuleTagClassNames: listCssfabricClassNames,
    getOther: listCssfabricClassNames
};
