import type { CssfModelTypes } from './cssfModel.js';

export class CssGuide {
	cssfModelTypes: CssfModelTypes;
	interfaceName = 'CssfInterface';
	className = 'CssfCkass';

	constructor(cssfModel: CssfModelTypes) {
		this.cssfModelTypes = cssfModel;
	}

	generate(objModel: Record<string, any>) {
		const unify = (arr: string[] | string): string => {
			const rr = Array.isArray(arr) ? arr : [arr];
			function isType(val: any) {
				return val === 'string' || val === 'number';
			}
			return rr.map((item) => (Array.isArray(item) ? `[${unify(item)}]` : `'${item}'`)).join(' | ');
		};

		let meta = `import postcss from 'postcss';\n`;
		let interfaces = `export interface ${this.interfaceName} {\n`;
		let classMethods = `export class ${this.className} {\n`;

		for (const type of this.cssfModelTypes) {
			const val = type.includes('=') ? type : type + ' = string | number';
			meta += `type ${val};\n`;
		}

		for (const [outerKey, value] of Object.entries(objModel)) {
			interfaces += `  ${outerKey}: {\n`;
			classMethods += `  ${outerKey}(decl: postcss.Declaration) {\n    return {\n`;

			for (const [key, val] of Object.entries(value)) {
				interfaces += `    ${key}: ${unify(val.types)};\n`;
				classMethods += `      ${key}: (value: ${this.interfaceName}['${outerKey}']['${key}']) => {},\n`;
			}

			interfaces += '  };\n';
			classMethods += '    };\n  }\n';
		}

		interfaces += '}\n';
		classMethods += '}\n';

		return { meta, interfaces, classMethods };
	}
}
