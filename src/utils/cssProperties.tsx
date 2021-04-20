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

export const cssProperties = {
  red: (props: ICssPropertiesProps): ICssProperties => {
    const fabricModule = props.module;

    const moduleConf = conf_fabric["css-config"].modules[fabricModule];

    const meta = moduleConf._metadata;
    const data = moduleConf._data;
    const docs = moduleConf._docs;

    return { 
      meta,
      data,
      docs,
      title: meta.title,
      tag: meta.tag,
      description: meta.description,
    };
  },
};

module.exports.cssProperties = cssProperties;
