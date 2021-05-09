interface IExamples {
    module: string;
    moduleAttribute: any;
}
declare type TModule = string | 'box' | 'shadow';
declare type TFabricTag = string | 'pad' | 'marg' | 'border';
export default function getClassNames(props: IExamples): {
    fromModule: (module: TModule, fabricTag: TFabricTag) => string[];
};
export {};
