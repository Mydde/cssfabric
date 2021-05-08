export interface IFabricConfModulePart {
    [key: string]: any;
}
export interface IFabricConfModuleDataPart {
    [key: string]: any;
}
export interface IFabricConfModuleMetaDataPart {
    [key: string]: any;
}
export interface IFabricConfModuleDocsPart {
    [key: string]: any;
}
export interface IFabricConfModuleDocsAttributesPart {
    [key: string]: any;
}
declare const _default: {
    getModuleList: () => any;
    getSassConfig: () => string;
    getModuleConfig: (module?: string) => IFabricConfModulePart;
    getModuleData: (module?: string) => IFabricConfModuleDataPart;
    getModuleMetaData: (module?: string) => IFabricConfModuleMetaDataPart;
    getModuleDocs: (module?: string) => IFabricConfModuleDocsPart;
    getModuleDocsAttributes: (module?: string) => IFabricConfModuleDocsAttributesPart;
};
export default _default;
