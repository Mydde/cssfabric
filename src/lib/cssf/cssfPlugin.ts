import postcss from 'postcss';
import { CssfClass } from './cssfLib.js';

export const myPlugin = () => (root: postcss.Root) => {
	const cssfClass = new CssfClass();
	root.walkDecls((decl) => {
		const parent = decl?.parent?.selector as keyof CssfClass;
		const value = decl.value;
		const prop = decl.prop;

		const method = cssfClass?.[parent];
		if (method) {
			console.log(method(decl)?.[prop](value));
		}

		//decl.prop = 'my-fed-' + decl.prop;
		// if (decl?.parent) decl.parent.append({ prop: 'my-prefix-' + decl.prop, value: decl.value });
	});
};

export const cssfProcessor = postcss([myPlugin()]);

cssfProcessor
	.process(
		`{
			position  {
				top: 4px 18px; 
				margin: 0px 5px;
			}  
			box {
				border: 4px 5px;
				shadow: 4px 5px;
				radius: 4px 5px 4px 5px;
				overflow: hidden scroll;
			}
			gutter { 
				padding: 4px 6px ;
			}
			size {
				width: 100% 30px 20rem;
				height: 100% 30px 20rem;
				ratio : 16px 9px
			}
			position {
				let: 20rem;
				right: 20rem;
				bottom: 20rem;



			}
		`
	)
	.then((result) => {
		console.log(result.css);
	});
