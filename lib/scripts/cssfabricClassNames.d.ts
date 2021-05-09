export interface IListCssfabricClassNamesProps {
    module: string;
    moduleAttribute: any;
}
declare type TCollect = string[];
declare function listCssfabricClassNames(props: IListCssfabricClassNamesProps): TCollect;
declare const _default: {
    getModuleTagClassNames: typeof listCssfabricClassNames;
    getOther: typeof listCssfabricClassNames;
};
export default _default;
