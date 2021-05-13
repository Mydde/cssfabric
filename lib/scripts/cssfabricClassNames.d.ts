export interface IListCssfabricClassNamesProps {
    module: string;
    moduleAttribute: any;
    outputStyle?: 'default' | 'debug';
}
export interface ILoopIt {
    module: string;
}
declare function cssfabricClassNames(props: IListCssfabricClassNamesProps): Record<string, any>;
declare const _default: {
    getModuleTagClassNames: typeof cssfabricClassNames;
    getModuleTagDebug: (props: IListCssfabricClassNamesProps) => Record<string, any>;
};
export default _default;
