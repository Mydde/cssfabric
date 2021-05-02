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
declare const _default: {
    getSassConfig: () => string;
    getModuleConfig: (module?: string) => IFabricConfModulePart;
    getModuleData: (module?: string) => IFabricConfModuleDataPart;
    getModuleMetaData: (module?: string) => IFabricConfModuleMetaDataPart;
    getModuleDocs: (module?: string) => IFabricConfModuleDocsPart;
};
export default _default;
