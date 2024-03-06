import type { CssfModelTypes } from './cssfModel.js';

export class CssGuide {
	cssfModelTypes: CssfModelTypes;
	interfaceName = 'CssfInterface';
	className = 'CssfClass';

	constructor(cssfModel: CssfModelTypes) {
		this.cssfModelTypes = cssfModel;
	}

	generate(objModel: Record<string, Record<string, any>>) {
		const unify = (arr: string[] | string): string => {
			const rr = Array.isArray(arr) ? arr : [arr];
			function isType(val: any) {
				return val === 'string' || val === 'number';
			}
			return rr.map((item) => (Array.isArray(item) ? `[${unify(item)}]` : `'${item}'`)).join(' | ');
		};

		let meta = `/** generated ! */\nimport postcss from 'postcss';\n\n\n\n`;
		let interfaces = `export interface ${this.interfaceName} {\n{{interfaces}}\n}`;
		let transformerTypes = `export interface ${this.interfaceName}T {\n{{transformer}}\n}`;
		let classMethods = `export class ${this.className} {\n{{methods}}\n}`;
		let classTypes = `/** generated types */\n{{types}}\n`;

		let collectClassMethods: string = '';
		let collectInterfaces: string = '';
		let collectTypes: string = '';
		let collectTransformerTypes: string = '';

		for (const type of this.cssfModelTypes) {
			const val = type.includes('=') ? type : type + ' = string | number';
			collectTypes += `type ${val};\n`;
		}

		for (const [outerKey, value] of Object.entries(objModel)) {
			collectInterfaces += `  ${outerKey}: {\n`;
			collectTransformerTypes += `  ${outerKey}: {\n`;
			collectClassMethods += `  ${outerKey}(decl: postcss.Declaration) {\n    return {\n`;

			for (const [key, val] of Object.entries(value)) {
				collectInterfaces += `    ${key}: ${unify(val)};\n`;
				collectTransformerTypes += `    ${key}: ( decl: postcss.Declaration, ...value: ${this.interfaceName}['${outerKey}']['${key}'][])=> void ;\n`;
				collectClassMethods += `      ${key}: (...args: ${this.interfaceName}['${outerKey}']['${key}'][]) => {
					return args;
				},\n`;
			}

			collectInterfaces += '  };\n';
			collectTransformerTypes += '  };\n';
			collectClassMethods += '    };\n  }\n ';
		}

		classMethods = classMethods.replace('{{methods}}', collectClassMethods);
		interfaces = interfaces.replace('{{interfaces}}', collectInterfaces);
		transformerTypes = transformerTypes.replace('{{transformer}}', collectTransformerTypes);
		classTypes = classTypes.replace('{{types}}', collectTypes);

		return { meta, classTypes, transformerTypes, interfaces, classMethods };
	}
}
