declare const _default: {
    cssfabric: {
        getModuleList: () => any;
        getSassConfig: () => string;
        getModuleConfig: (module?: string) => import("./scripts/cssfabric").IFabricConfModulePart;
        getModuleData: (module?: string) => import("./scripts/cssfabric").IFabricConfModuleDataPart;
        getModuleMetaData: (module?: string) => import("./scripts/cssfabric").IFabricConfModuleMetaDataPart;
        getModuleDocs: (module?: string) => import("./scripts/cssfabric").IFabricConfModuleDocsPart;
        getModuleDocsAttributes: (module?: string) => import("./scripts/cssfabric").IFabricConfModuleDocsAttributesPart;
    };
};
export default _default;
