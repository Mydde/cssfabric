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


export interface ILoopIt {
    module: string;
}

function loopIt(props: ILoopIt) {
    
    const {module}         = props;
    const moduleAttributes = cssfabric.getModuleDocsAttributes(module);
    
}

function listCssfabricClassNames(props: IListCssfabricClassNamesProps) {
    
    const {module, moduleAttribute} = props;
    const moduleAttributes          = cssfabric.getModuleDocsAttributes(module);
    
    const fabricAttributes                  = moduleAttributes[moduleAttribute];
    const moduleTag                         = fabricAttributes["tag"];
    const moduleKeys: any[]                 = fabricAttributes["keys"] || undefined;
    const moduleLevels: IModuleLevels       = fabricAttributes["levels"] || undefined;
    const moduleLevelsLinked: IModuleLevels = fabricAttributes["levelsLinked"] || undefined;
    const moduleLevelsExtended              = fabricAttributes["levelsDeclin"] || undefined;
    const moduleClassNames                  = fabricAttributes["classNames"] || undefined;
    
    let MAIN_COLLECT: TCollect = [];
    
    
    return doParse();
    
    function doParse() {
        
        let keyList,
            levelList,
            levelListLinked,
            levelListDeclin;
        
        const finalOut = [];
        const debugOut = {};
        
        if (moduleKeys && moduleKeys.length) {
            // beware of any [][]
            keyList = concatenateWithKey(moduleTag, moduleKeys);
        }
        
        if (moduleLevels && Object.keys(moduleLevels).length) { // object !!!
            levelList = Object.keys(moduleLevels).map((level) => {
                let val = moduleLevels[level]
                return concatenateWithKey(level, val);
            }).flat();
        }
        
        if (moduleLevelsLinked && Object.keys(moduleLevelsLinked).length) {
            levelListLinked = Object.keys(moduleLevelsLinked).map((level) => {
                let val = moduleLevelsLinked[level]
                return concatenateWithKey(level, val);
            }).flat();
        }
        
        
        if (moduleLevelsExtended && Object.keys(moduleLevelsExtended).length) {
            levelListDeclin = Object.keys(moduleLevelsExtended).map((level) => {
                let val = moduleLevelsLinked[level]
                return concatenateWithKey(level, val);
            }).flat();
        }
        
        // prefix all now , and link
        // colors :
        if (keyList && !moduleLevels && !moduleLevelsLinked) {
            // export
            finalOut.push(keyList);
            debugOut['_default'] = keyList;
        }
        
        if (moduleKeys && (moduleLevels || moduleLevelsLinked)) {
            // base
            if (moduleLevels) {
                let tg = keyList.map(x => {
                    
                    let tre = Object.keys(moduleLevels).map((level) => {
                        let val = moduleLevels[level]
                        
                        return concatenateWithKey(level, val);
                    }).flat(4)
                    
                    debugOut['_base-' + x] =  concatenateWithKey(x, tre);
                    
                    return concatenateWithKey(x, tre);
                    
                });
                // is it declinated ? only colors, so nope
                // export
                finalOut.push(tg.flat());
            }
            // if moduleLevelsLinked // only color ?
            if (moduleLevelsLinked) {
                //
                let yt = Object.values(moduleKeys).map(moduleKey => {
                    
                    if (moduleKeys.includes(moduleKey)) {
                        let out = [];
                        
                        debugOut['_linked-' + moduleKey] = {}
                        
                        out.push(concatenateWithKey(moduleKey, moduleLevelsLinked[moduleKey]));
                        // is it declinated ?
                        if (moduleLevelsExtended && moduleLevelsExtended[moduleKey]) {
                            //
                            out.push(moduleLevelsLinked[moduleKey].map((z) => {
                                
                                debugOut['_linked-' + moduleKey][z] = concatenateWithKey(z, moduleLevelsExtended[moduleKey]);
                                return concatenateWithKey(z, moduleLevelsExtended[moduleKey]);
                            }).flat(2))
                        }
                        
                        // flatten for group here
                        return out.flat(2);
                    }
                }).flat();
                
                // export
                finalOut.push(concatenateWithKey(moduleTag, yt));
                
            }
            if (levelListDeclin) {
            } // only colors ? don't go there
            
        }
        if (!keyList && levelList) {
            // export
            let kkk = concatenateWithKey(moduleTag, levelList);
            finalOut.push(kkk);
            debugOut['_naked'] = kkk;
        }
        
        if (moduleClassNames) {
            let kk  = parseClassNames();
            let kkk = concatenateWithKey(moduleTag, kk);
            
            // export
            finalOut.push(kkk);
            debugOut['_classNames'] = kkk;
        }
        
        console.log(debugOut)
        return finalOut.flat(2);
    }
    
    function parseClassNames() {
        return Object.keys(moduleClassNames).map((klass) => {
            return concatenateWithKey(klass, moduleClassNames[klass]);
        }).flat();
    }
    
    
    function concatenateWithKey(key, levelLine: string[]) {
        return levelLine.map((levelTag: string) => {
            return [key, levelTag].filter((val) => {
                return (val !== '_' && val.toString().charAt(0) !== '_')
            }).filter(x => Boolean(x)).join('-');
        })
    }
    
    
}

export default {
    getModuleTagClassNames: listCssfabricClassNames,
    getOther:               listCssfabricClassNames
}
