export declare type IFabricConfModulePart = Record<string, any>;
export declare type IFabricConfModuleDataPart = Record<string, any>;
export declare type IFabricConfModuleMetaDataPart = Record<string, any>;
export declare type IFabricConfModuleDocsPart = Record<string, any>;
export declare type TFabricConfModuleDocsAttributesPart = Record<string, any>;
declare const _default: {
    getModuleList: () => any;
    getModuleConfig: (module?: string) => IFabricConfModulePart;
    getModuleData: (module?: string) => IFabricConfModuleDataPart;
    getModuleMetaData: (module?: string) => IFabricConfModuleMetaDataPart;
    getModuleDocs: (module?: string) => IFabricConfModuleDocsPart;
    getModuleDocsAttributes: (module?: string) => TFabricConfModuleDocsAttributesPart;
    getClassNames: {
        getModuleTagClassNames: (props: import("./cssfabricClassNames").IListCssfabricClassNamesProps) => any[];
        getOther: (props: import("./cssfabricClassNames").IListCssfabricClassNamesProps) => any[];
    };
};
export default _default;