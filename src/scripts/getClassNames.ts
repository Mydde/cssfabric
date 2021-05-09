import cssfabric from "./cssfabric"
import utils     from "./utils";

interface IExamples {
    module: string;
    moduleAttribute: any;
}

Object.keys(cssfabric.getModuleList());

type TModule = string | 'box' | 'shadow';
type TFabricTag = string | 'pad' | 'marg' | 'border';
type TClassName = string;
type TClassNameFragment = string;

type TCollect = string[];
type TClassNameList = TClassName[][];

type TGuess = any;
type TLevelKey = string;

type level = string[];

type IModuleLevels = level | level[] | any;


export default function getClassNames(props: IExamples) {
    
    const {module, moduleAttribute} = props;
    const moduleAttributes          = cssfabric.getModuleDocsAttributes(module);
    
    const fabricAttributes            = moduleAttributes[moduleAttribute];
    const moduleTag                   = fabricAttributes["tag"];
    const moduleKeys                  = fabricAttributes["keys"] || [];
    const moduleLevels: IModuleLevels = fabricAttributes["levels"] || [];
    const moduleLevelsDeclined        = fabricAttributes["levelsDeclin"] || undefined;
    const moduleClassNames            = fabricAttributes["classNames"] || {};
    
    let MAIN_COLLECT: TCollect = [];
    
    
    function parseKeys() {
        // if keys
        if (moduleKeys.length) {
            console.log(" moduleKeys " + qualify(moduleKeys));
            
            switch (qualify(moduleKeys)) {
                case "arrayOfstrings":
                case "arrayOfnumbers":
                    
                    const classNameList = moduleKeys.map((levelKey: TLevelKey) => {
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
                    
                    let out = moduleKeys.flat().map((levelKey: TLevelKey) => {
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
    
    function parseLevelWithKeys(classNameList: TClassNameList): void {
        console.log({classNameList});
        //return;
        if (!classNameList) return;
        if (Array.isArray(moduleLevels)) {
            let out: any = moduleLevels
                               .map((x: TClassNameFragment) => {
                                   return classNameList.map((y) => {
                                       if (y.map) return y.map((z) => z + "-" + x);
                                       else console.log(y);
                                   });
                               })
                               .flat(2) || [];
            
            MAIN_COLLECT = MAIN_COLLECT.concat(out);
        } else {
            console.log("SHOULD BE parseLevelWithKeys");
        }
    }
    
    function parseLinkedLevel(levelKey: TLevelKey) {
        // object of arrays
        if (utils.isObjectOfTypes(moduleLevels) === "arrays") {
            let level = moduleLevels[levelKey];
            
            if (moduleKeys.includes(levelKey) || levelKey.charAt(0) === "_") {
                let laliste = level.map((x: TClassNameFragment) => moduleTag + "-" + levelKey + "-" + x);
                
                MAIN_COLLECT = MAIN_COLLECT.concat(laliste);
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
            
            MAIN_COLLECT = MAIN_COLLECT.concat(out);
        }
    }
    
    function parseLevels(actionType = null) {
        // parse levels
        console.log(" moduleLevels " + qualify(moduleLevels));
        
        let out: any[] = [];
        
        switch (qualify(moduleKeys)) {
            case "arrayOfstrings":
            case "arrayOfnumbers":
                if (
                    ["numbers", "strings"].includes(utils.isArrayOfTypes(moduleLevels))
                ) {
                    let te = moduleKeys.map((x: string) => {
                        return moduleLevels.map((y: TClassNameFragment) => {
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
            if (utils.isObjectOfTypes(moduleClassNames) === "arrays") {
                let test = Object.keys(moduleClassNames)
                                 .map((classNameKey: string) => {
                                     let classNameValues = moduleClassNames[classNameKey];
                                     //
                                     return classNameValues.map((x: TClassNameFragment) => classNameKey + "-" + x);
                                 })
                                 .flat(2);
                
                MAIN_COLLECT = MAIN_COLLECT.concat(test);
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
    
    function fromTag() {
        
        parseKeys();
        parseLevelsWithoutKeys();
        parseClassNames();
        
        return MAIN_COLLECT.flat().map((x) => x)
    }
    
    
    return {
        fromModule: (module: TModule, fabricTag: TFabricTag) => {
            return fromTag();
        }
    }
}