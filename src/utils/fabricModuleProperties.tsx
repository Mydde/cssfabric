import conf_fabric from "css-fabric/_generated/css.fabric.config.json";

interface ICssPropertiesProps {
  module: string;
}

interface ICssProperties {
  title: string;
  description: string;
  meta: any;
  data: any;
  docs: any;
  tag: string;
}

export const fabricModuleProperties = {
  getModuleConf: (props: ICssPropertiesProps): ICssProperties => {
    const fabricModule = props.module;

    const moduleConf = conf_fabric["css-config"]?.modules?.[fabricModule] || {};

    const meta = moduleConf._metadata;
    const data = moduleConf._data;
    const docs = moduleConf._docs;

    return { 
      meta,
      data,
      docs,
      title: meta?.title || fabricModule,
      tag: meta?.tag|| fabricModule,
      description: meta?.description|| fabricModule,
    };
  },
};

module.exports.fabricModuleProperties = fabricModuleProperties;
