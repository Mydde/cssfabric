import conf from '../../css-fabric/_config/text.json';
import conf_fabric from '../../css-fabric/_config/_css-fabric-conf.json';

interface ICssPropertiesProps {
	module: string;
}

interface ICssProperties  {
	title: string;
	title_tag: string;
	description: string;
	meta: any;
	data: any;
	docs: any;
	tag: string;
	tag_shorthand: string;
}

export const cssProperties = {
	red:
		(props: ICssPropertiesProps): ICssProperties  => {
			const fabricModule = props.module;
			const conf_text = conf[fabricModule];
			const className = `${fabricModule}_class_name`;
			const meta = conf_text._metadata;
			return {
				meta: meta,
				data: conf_text._data,
				docs: conf_text._docs,
				tag: conf_fabric['_css-fabric-conf']._data.text_class_name,
				tag_shorthand: conf_fabric['_css-fabric-conf']._data[className],
				title: meta.title,
				title_tag: meta.title_tag,
				description: meta.description
			};
		}
};

module.exports.cssProperties = cssProperties;
