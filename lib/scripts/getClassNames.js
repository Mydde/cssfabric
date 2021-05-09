"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cssfabric_1 = __importDefault(require("./cssfabric"));
const utils_1 = __importDefault(require("./utils"));
Object.keys(cssfabric_1.default.getModuleList());
function getClassNames(props) {
    const { module, moduleAttribute } = props;
    const moduleAttributes = cssfabric_1.default.getModuleDocsAttributes(module);
    const fabricAttributes = moduleAttributes[moduleAttribute];
    const moduleTag = fabricAttributes["tag"];
    const moduleKeys = fabricAttributes["keys"] || [];
    const moduleLevels = fabricAttributes["levels"] || [];
    const moduleLevelsDeclined = fabricAttributes["levelsDeclin"] || undefined;
    const moduleClassNames = fabricAttributes["classNames"] || {};
    let MAIN_COLLECT = [];
    function parseKeys() {
        // if keys
        if (moduleKeys.length) {
            console.log(" moduleKeys " + qualify(moduleKeys));
            switch (qualify(moduleKeys)) {
                case "arrayOfstrings":
                case "arrayOfnumbers":
                    const classNameList = moduleKeys.map((levelKey) => {
                        if (Boolean(moduleLevels[levelKey])) {
                            parseLinkedLevel(levelKey);
                        }
                        return moduleTag + "-" + levelKey;
                    });
                    parseLevelWithKeys(classNameList);
                    MAIN_COLLECT = MAIN_COLLECT.concat(classNameList);
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
                    break;
            }
            // console.log('parseKeys', classNameList)
        }
    }
    function parseLevelWithKeys(classNameList) {
        console.log({ classNameList });
        //return;
        if (!classNameList)
            return;
        if (Array.isArray(moduleLevels)) {
            let out = moduleLevels
                .map((x) => {
                return classNameList.map((y) => {
                    if (y.map)
                        return y.map((z) => z + "-" + x);
                    else
                        console.log(y);
                });
            })
                .flat(2) || [];
            MAIN_COLLECT = MAIN_COLLECT.concat(out);
        }
        else {
            console.log("SHOULD BE parseLevelWithKeys");
        }
    }
    function parseLinkedLevel(levelKey) {
        // object of arrays
        if (utils_1.default.isObjectOfTypes(moduleLevels) === "arrays") {
            let level = moduleLevels[levelKey];
            if (moduleKeys.includes(levelKey) || levelKey.charAt(0) === "_") {
                let laliste = level.map((x) => moduleTag + "-" + levelKey + "-" + x);
                MAIN_COLLECT = MAIN_COLLECT.concat(laliste);
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
            MAIN_COLLECT = MAIN_COLLECT.concat(out);
        }
    }
    function parseLevels(actionType = null) {
        // parse levels
        console.log(" moduleLevels " + qualify(moduleLevels));
        let out = [];
        switch (qualify(moduleKeys)) {
            case "arrayOfstrings":
            case "arrayOfnumbers":
                if (["numbers", "strings"].includes(utils_1.default.isArrayOfTypes(moduleLevels))) {
                    let te = moduleKeys.map((x) => {
                        return moduleLevels.map((y) => {
                            return x + "-" + y;
                        });
                    });
                    out = out.concat(te);
                }
                if (qualify(moduleLevels) === "objectOfarrays") {
                }
                break;
            case "arrayOfobjects":
                break;
            case "arrayOfarrays":
                break;
        }
        console.log("parseLevels", out);
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
                MAIN_COLLECT = MAIN_COLLECT.concat(test);
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
    function fromTag() {
        parseKeys();
        parseLevelsWithoutKeys();
        parseClassNames();
        return MAIN_COLLECT.flat().map((x) => x);
    }
    return {
        fromModule: (module, fabricTag) => {
            return fromTag();
        }
    };
}
exports.default = getClassNames;
