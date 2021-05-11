export interface IListCssfabricClassNamesProps {
    module: string;
    moduleAttribute: any;
}
export interface ILoopIt {
    module: string;
}
declare function listCssfabricClassNames(props: IListCssfabricClassNamesProps): any[];
declare const _default_1: {
    getModuleTagClassNames: typeof listCssfabricClassNames;
    getOther: typeof listCssfabricClassNames;
};
export default _default_1;
