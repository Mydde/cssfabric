import { cssFabricSheet } from './cssFabricSheet.js';

type CssFabricProperty = {
	description: string;
	syntax: string; // contains | as separator
	template: string;
	initial: string;
	appliesTo: string;
	fabric: Record<string, string>;
};

function camelToUnderscore(str: string) {
	return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

type RenderMode = 'length' | 'percentage' | 'range' | 'number' | 'raw';
type NoRaw = 'length' | 'percentage' | 'number' | 'width' | 'height' | 'color';

const syntaxDecodeTypeConfig: Record<
	string,
	[number, number, number, (string | [number, number])?, [number, number]?] | string[]
> = {
	length: [0, 48, 8, 'rem', [2, 16]],
	width: [0, 256, 32, 'rem', [2, 16]],
	'border-width': [0, 2, 0.5, 'rem', [2, 16]],
	height: [0, 256, 32, 'rem', [2, 16]],
	percentage: [0, 100, 10, '%', [2, 16]],
	number: [0, 10, 1, 'px', [2, 16]],
	opacity: [0.1, 1.0, 0.2, [2, 16]],
	color: ['blue', 'red', 'yellow', 'orange', 'green', 'violet']
};

function cleanSyntaxKey(toClean: string): string {
	let cleaned = toClean.replace(/(em|px|%|rem)$/, '');
	cleaned = cleaned.endsWith('-') ? cleaned.slice(0, -1) : cleaned;
	return cleaned;
}

interface DecodedGroup {
	optional: boolean;
	repeatable: boolean;
	quantifier: { min: number; max: number } | null;
	optionalPart: string | null;
}

class SyntaxDecode {
	static hasProgression(...rest: string[]): boolean {
		return rest.some((value) => Boolean(syntaxDecodeTypeConfig[value]));
	}
	static generateValues(...title: string[]) {
		console.log(title);
		let result: Record<string, any> = {};
		let progression = syntaxDecodeTypeConfig[title[1]] ?? syntaxDecodeTypeConfig[title[0]];
		// type progression :
		// si tout les elements sont des string, alors progression avec presets
		// sinon :
		// si le dernier element est un tableau, alors progression avec ease
		// l'unité est : le dernier ou l'avant dernier element du tableau, qui soit une string

		if (progression?.every((value: unknown) => typeof value === 'string')) {
			// presets iteration
			progression.forEach((value: string) => {
				let newKey = `${fabricTitle}-${value}`;
				result[cleanSyntaxKey(newKey)] = value;
			});
		} else {
			const unity = SyntaxDecode.getUnity(progression);
			if (Array.isArray(progression?.[progression.length - 1])) {
				// ease progression
				progression.forEach((value: string) => {
					let newKey = `${title[0]}-${value}`;
					result[cleanSyntaxKey(newKey)] = value + unity;
				});
			} else {
				// linear progression
				console.log(title, progression);
				progression.forEach((value: string) => {
					let newKey = `${fabricTitle}-${value}`;
					result[cleanSyntaxKey(newKey)] = value;
				});
			}
		}

		return result;
	}
	private static getUnity(arr: any[]): string | null {
		for (let i = arr?.length - 1; i >= 0; i--) {
			if (typeof arr[i] === 'string') {
				return arr[i];
			}
		}
		return null;
	}
}

class DistributionType {
	static detectDistributionType(fragment: any): string {
		let fabricKeys = Object.keys(fragment.fabric);
		let syntaxKeys = fragment.syntax.split('|').map((s: string) => s.trim());

		if (!fabricKeys.some((key) => syntaxKeys.includes(key))) {
			return 'detectionProgressive';
		}

		if (fabricKeys.every((key, index) => syntaxKeys[index] === key)) {
			return 'detectionFollowLine';
		}

		return 'unknown';
	}
}

class CSSFormalSyntaxDecoder {
	private syntax: string;
	private decodedSyntax: Record<string, DecodedGroup>;

	constructor() {
		this.syntax = '';
		this.decodedSyntax = {};
	}

	private decodeQuantifier(group: string) {
		const quantifierMatch = group.match(/\{(\d+),(\d+)\}/);
		if (quantifierMatch) {
			return { min: parseInt(quantifierMatch[1]), max: parseInt(quantifierMatch[2]) };
		}
		return null;
	}

	private getRenderMode(syntax: string): RenderMode {
		if (syntax.includes('length')) {
			return 'length';
		} else if (syntax.includes('percentage')) {
			return 'percentage';
		} else if (syntax.includes('range')) {
			return 'range';
		} else if (syntax.includes('number')) {
			return 'number';
		} else {
			return 'raw';
		}
	}

	private decodeFormalSyntax(syntax: string) {
		let decodedSyntax: any = {};

		// Split the syntax into groups
		let groups = syntax.split('|').map((g) => g.trim());

		groups.forEach((group) => {
			let optional = false;
			let repeatable = false;
			let quantifier = null;
			let optionalPart = null;

			// Check if the group is optional or repeatable
			if (group.endsWith('?')) {
				optional = true;
				group = group.slice(0, -1); // Remove the question mark
			}

			if (group.endsWith('+')) {
				repeatable = true;
				group = group.slice(0, -1); // Remove the plus sign
			}

			// Check for quantifiers like {1,4}
			quantifier = this.decodeQuantifier(group);
			if (quantifier) {
				group = group.replace(/\{\d+,\d+\}/, '').trim(); // Remove the quantifier part
			}

			// Check for optional parts
			const optionalPartMatch = group.match(/\[(.*?)\]/);
			if (optionalPartMatch) {
				optionalPart = optionalPartMatch[1];
				group = group.replace(optionalPartMatch[0], '').trim(); // Remove the optional part
			}

			// Remove brackets from the group
			group = group.replace(/\[|\]/g, '');

			decodedSyntax[group] = { optional, repeatable, quantifier, optionalPart };
		});

		return decodedSyntax;
	}

	decodeAndGenerateValue(fragmentPiece: { [key: string]: CssFabricProperty }) {
		let result: Record<string, any> = {};
		const fragmentTitle = Object.keys(fragmentPiece)[0];
		const fragment = fragmentPiece[fragmentTitle];
		const distributionType = DistributionType.detectDistributionType(fragment);
		Object.keys(fragment.fabric).forEach((fabricKey) => {
			let fabricTitle =
				fragmentTitle == fabricKey ? fragmentTitle : `${fragmentTitle}-${fabricKey}`;
			let syntax = fragment.syntax;
			let title = fragmentTitle ?? fabricKey;

			let decodedSyntax = this.decodeFormalSyntax(syntax);

			Object.keys(decodedSyntax).forEach((syntaxKey) => {
				let syntaxValue = decodedSyntax[syntaxKey];
				if (
					syntaxValue.optional ||
					syntaxValue.repeatable ||
					syntaxValue.quantifier ||
					syntaxValue.optionalPart
				) {
					// This is a complex syntax, we need to decode it further
					// ...
				} else {
					switch (distributionType) {
						case 'detectionProgressive':
							// Handle progressive distribution
							let progression =
								syntaxDecodeTypeConfig[syntaxKey] ?? syntaxDecodeTypeConfig[fabricTitle];

							let generatedValues: Record<string, any> = {};

							if (!progression) {
								let className = `.${fabricTitle}-${syntaxKey}`;
								generatedValues = {
									[className]: {
										[`--${fabricTitle}`]: `var(--${fabricTitle}-${syntaxKey});`,
										[`${fabricTitle}`]: `var(--${fabricTitle},${syntaxKey});`
									}
								};
							}
							if (SyntaxDecode.hasProgression(fabricTitle, syntaxKey)) {
								console.log(SyntaxDecode.generateValues(fabricTitle, syntaxKey));

								generatedValues = {};

								for (const [key, value] of Object.entries(
									SyntaxDecode.generateValues(fabricTitle, syntaxKey)
								)) {
									generatedValues[`.${key}`] = value;
								}
							}

							Object.assign(result, generatedValues);
							break;
						case 'detectionFollowLine':
							// Handle follow line distribution
							// ...
							break;
						default:
							// Handle unknown distribution
							// ...
							break;
					}
				}
			});
		});

		return result;
	}
}

type CssFabricPropertyFragment = Record<string, CssFabricProperty>;
type CssFabricPropertyCatalog = Record<string, CssFabricPropertyFragment | CssFabricProperty>;

class CSSProperties {
	private cssProperties: any;
	private fragment: any;
	private onlyKeys: string[];

	constructor(cssProperties: any, onlyKeys: string[] = []) {
		this.cssProperties = cssProperties;
		this.onlyKeys = onlyKeys;
	}

	private chkValidity(cssProperties: any): boolean {
		if (cssProperties.fabric) return true;

		for (const key in cssProperties) {
			if (cssProperties.hasOwnProperty(key)) {
				const element = cssProperties[key];
				if (typeof element === 'object') {
					if (element.fabric) {
						return true;
					} else {
						return this.chkValidity(element);
					}
				}
				return false;
			}
		}
		return false;
	}

	private recursiveFabricSearch(
		cssProperties: CssFabricPropertyCatalog,
		parent: string = ''
	): Record<string, any> {
		let out: Record<string, any> = {};
		for (let key in cssProperties) {
			if (this.chkValidity(cssProperties[key]) && cssProperties.hasOwnProperty(key)) {
				key = camelToUnderscore(key);
				const element = cssProperties[key];
				if (typeof element === 'object') {
					if (element.fabric && this.onlyKeys.includes(key)) {
						let decoder = new CSSFormalSyntaxDecoder();
						let result = decoder.decodeAndGenerateValue({ [key]: element });
						parent += key;
						//out += `\r/* ${parent} */\r`;
						out[parent] = result; //JSON.stringify(result); //cssFabricGenerate(element, parent);
					} else {
						out = { ...out, ...this.recursiveFabricSearch(element, parent) };
						parent = '';
					}
				}
			}
			parent = '';
		}
		return out;
	}

	public generateCSS(): string {
		return this.recursiveFabricSearch(this.cssProperties);
	}
}

const cssP = new CSSProperties(cssFabricSheet, [
	'overflow',
	'list',
	'flex',
	'grid',
	'margin',
	'padding',
	'container',
	'column',
	'text-shadow',
	'box-shadow',
	'scroll-snap-type',
	'display',
	'border',
	'appearance',
	'background'
]);
const cssF = cssP.generateCSS();
console.log(JSON.stringify(cssF, null, 4));
