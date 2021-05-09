import cssfabric from "./cssfabric"
import utils     from "./utils";

export interface IListCssfabricClassNamesProps {
    module: string;
    moduleAttribute: any;
}

type TFabricClassName = string;
type TClassNameFragment = string | number;

type TCollect = string[];
type TFabricClassNameList = TFabricClassName[];
type TFabricClassNameListFragments = TClassNameFragment[];

type TGuess = any;
type TLevelKey = string;

type level = string[];

type IModuleLevels = level | level[] | [] | any[] | Record<string, any[]>;

function listCssfabricClassNames(props: IListCssfabricClassNamesProps) {
    
    const {module, moduleAttribute} = props;
    const moduleAttributes          = cssfabric.getModuleDocsAttributes(module);
    
    const fabricAttributes            = moduleAttributes[moduleAttribute];
    const moduleTag                   = fabricAttributes["tag"];
    const moduleKeys                  = fabricAttributes["keys"] || [];
    const moduleLevels: IModuleLevels = fabricAttributes["levels"] || [];
    const moduleLevelsDeclined        = fabricAttributes["levelsDeclin"] || undefined;
    const moduleClassNames            = fabricAttributes["classNames"] || {};
    
    let MAIN_COLLECT: TCollect            = [];
    let SKEL_COLLECT: Record<string, any> = {};
    
    finalParse();
    
    function finalParse() {
        parseKeys();
        parseLevelsWithoutKeys();
        parseLevels();
        parseClassNames();
        
        console.log({SKEL_COLLECT});
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
                    
                    const classNameList = moduleKeys.map((levelKey: TLevelKey) => {
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
                    let out = moduleKeys.flat().map((levelKey: TLevelKey) => {
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
    
    function parseLevelWithFabricKeys(classNameList: TFabricClassNameListFragments): void {
        
        if (!classNameList) return;
        if (Array.isArray(moduleLevels)) {
            if (['strings', 'numbers'].includes(utils.isArrayOfTypes(moduleLevels))) {
                let out: any = moduleLevels.map((levelName: any) => {
                                               let pp = classNameList.map((className) => {
                                                   return (levelName === '_') ? className : [className, levelName].join('-');
                                               });
                    
                                               buildSkelConcat(pp, levelName);
                                               return pp;
                                           })
                                           .flat(2) || [];
                
                buildMainConcat(out);
            }
        } else {
            if (['arrays'].includes(utils.isObjectOfTypes(moduleLevels))) {
                
                let out: any = Object.keys(moduleLevels).map((levelKey: TLevelKey) => {
                    const level = moduleLevels[levelKey];
                    
                    return classNameList.map((className) => {
                        
                        return level.map((levelName: string) => {
                                             return levelName === '_' ? className + '-' + levelKey : className + '-' + levelKey + '-' + levelName
                                         }
                        )
                    });
                    
                    
                }).flat(2)
                
                buildMainConcat(out);
                
            } else {
                
                console.log("SHOULD BE parseLevelWithFabricKeys");
            }
        }
    }
    
    function parseLinkedLevel(levelKey: TLevelKey) {
        // object of arrays
        if (utils.isObjectOfTypes(moduleLevels) === "arrays") {
            let level = moduleLevels[levelKey];
            
            if (moduleKeys.includes(levelKey) || levelKey.charAt(0) === "_") {
                let laliste = level.map((x: TClassNameFragment) => moduleTag + "-" + levelKey + "-" + x);
                
                buildMainConcat(laliste);
                
                parseDeclinatedLevel(levelKey, laliste);
            }
        } else {
            console.log("SHOULD BE parseLinkedLevel");
        }
    }
    
    function parseDeclinatedLevel(levelKey: TLevelKey, laliste: any[]) {
        if (moduleLevels[levelKey] && moduleLevelsDeclined[levelKey]) {
            const out = laliste
                .map((x: string) => {
                    return moduleLevelsDeclined[levelKey].map((y: TClassNameFragment) => {
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
        if (moduleKeys && moduleKeys.length) return;
        
        // module levels string[]
        if (Array.isArray(moduleLevels) && ["numbers", "strings"].includes(utils.isArrayOfTypes(moduleLevels))) {
            
            let out = moduleLevels.map((y: TClassNameFragment) => {
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
            if (utils.isObjectOfTypes(moduleClassNames) === "arrays") {
                let test = Object.keys(moduleClassNames)
                                 .map((classNameKey: string) => {
                                     let classNameValues = moduleClassNames[classNameKey];
                                     //
                                     return classNameValues.map((x: TClassNameFragment) => classNameKey + "-" + x);
                                 })
                                 .flat(2);
                
                buildMainConcat(test);
            }
        }
    }
    
    function qualify(vars: TGuess) {
        if (Array.isArray(vars)) {
            return "arrayOf" + utils.isArrayOfTypes(vars);
        }
        
        if (typeof vars === "object") {
            return "objectOf" + utils.isObjectOfTypes(vars);
        }
    }
    
    
    return MAIN_COLLECT;
}

export default {
    getModuleTagClassNames: listCssfabricClassNames,
    getOther:               listCssfabricClassNames
}
