import type { CssFabricFragment } from './cssProperties.js';
import { colorConfig } from './index.js';

type ConfigPiece = Record<ConfPieceTitle, Record<string, any>>;
type ConfPieceTitle = string;
/**
 * Generates CSS classes based on a configuration object.
 */
/*

const conf = {
	border: {
		color: {
			root: ['primary', 'secondary', 'accent', 'neutral', 'error', 'gray'],
			palette: ['yellow', 'orange', 'red', 'magenta', 'purple', 'green', 'teal', 'blue', 'dark'],
			scheme: ['discrete', 'success', 'info', 'warning', 'alert', 'error']
		},
		style: ['dotted', 'dashed', 'solid'],
		width: ['thin', 'medium', 'thick']
	}
};


  */
export class CssClassGenerator {
	generate(model: Record<string, any>): any {
		let classes = {};
		let modelToParse: any = {};
		modelToParse.title = Object.keys(model)[0];
		modelToParse.variations = Object.values(model)[0];

		for (let property in modelToParse.variations) {
			this.generateCombinations(property, modelToParse.variations, modelToParse.title, {}, classes);
		}

		return classes;
	}

	/**
	 * Generates combinations of CSS variations based on the provided parameters.
	 *
	 * @param property - The base CSS property.
	 * @param variations - An object containing the variations for each property.
	 * @param prefix - The prefix to be added to the CSS class names.
	 * @param cssProperty - An object containing the CSS properties for each variation.
	 * @param classes - An object reference to store the generated CSS classes.
	 */
	generateCombinations(
		property: string,
		variations: any,
		prefix: string,
		cssProperty: Record<string, any>,
		classes: any
	) {
		console.log(variations);
		for (let variation in variations) {
			let remainingVariations = { ...variations };
			delete remainingVariations[variation];

			// If the variation is an object (and not an array), iterate over the sub-variations
			if (typeof variations[variation] === 'object' && !Array.isArray(variations[variation])) {
				for (let subVariation in variations[variation]) {
					for (let cssValue of variations[variation][subVariation]) {
						// create a new prefix for each sub-variation
						let newPrefix =
							subVariation === 'root'
								? `${prefix}-${property}`
								: `${prefix}-${property}-${subVariation}`;
						console.log(newPrefix);
						// create a new cssProperty for each sub-variation
						let newCssProperty = { ...cssProperty };
						// add the new cssProperty to the new prefix
						newCssProperty[`${property}-${newPrefix}`] = cssValue;
						// add the new prefix and cssProperty to the classes object
						classes[newPrefix] = newCssProperty;
						this.generateCombinations(
							property,
							remainingVariations,
							newPrefix,
							newCssProperty,
							classes
						);
					}
				}
			} else {
				// sub-parameters
				for (let value of variations[variation]) {
					let newPrefix = prefix ? `${prefix}-${value}` : `${property}-${value}`;
					/* let newCssProperty = {
						red: cssProperty ? `${cssProperty} ${value}` : `${property}:${value}`
					}; */
					let newCssProperty = { ...cssProperty };
					classes[newPrefix] = newCssProperty;
					/* this.generateCombinations(
						property,
						remainingVariations,
						newPrefix,
						newCssProperty,
						classes
					); */
				}
			}
		}
	}
}

class configConversion {
	/**
	 * Converts variationsBeforeConversion to variationsAfterConversion.
	 * @param variationsBeforeConversion - The object containing variations before conversion.
	 * @returns The object containing variations after conversion.
	 */
	static convertVariations(variationsBeforeConversion: {
		[key: string]: Partial<CssFabricFragment>;
	}) {
		let variationsAfterConversion: Record<string, any> = {};

		for (let property in variationsBeforeConversion) {
			variationsAfterConversion[property] = {};
			for (let variation in variationsBeforeConversion[property].variations) {
				let fabricVariations = variationsBeforeConversion[property].variations[variation]
					.replace(']', '')
					.replace('[', '')
					.split(',')
					.map((item: string) => item.trim()); // Apply trim here

				variationsAfterConversion[property][variation] = {};

				for (let fabricVariation of fabricVariations) {
					let isRoot = fabricVariation.startsWith('(') && fabricVariation.endsWith(')');
					let key = isRoot ? fabricVariation.slice(1, -1) : fabricVariation;

					switch (variation) {
						case 'color':
							if (colorConfig[key]) {
								variationsAfterConversion[property][variation][key] = Object.keys(colorConfig[key]);
								if (isRoot) {
									variationsAfterConversion[property][variation].root =
										variationsAfterConversion[property][variation][key];
									delete variationsAfterConversion[property][variation][key];
								}
							}
							break;
						default:
							variationsAfterConversion[property][variation] = fabricVariations;
							break;
					}
				}
			}
		}

		return variationsAfterConversion;
	}
}

let variationsBeforeConversion = {
	border: {
		variations: {
			color: `(theme), palette, scheme`,
			style: `dotted, dashed, solid`,
			width: `thin, medium, thick`
		}
	}
};
let generator = new CssClassGenerator();
const converted = configConversion.convertVariations(variationsBeforeConversion); // generator.convertVariations(variationsBeforeConversion);
console.log(converted);
console.log(generator.generate(converted));

/* class GenerateCssClasses {
	classesCSS: any = {};

	generateCombinations(prefix: string, remainingVariations: any, appliedProperties: any) {
		if (Object.keys(remainingVariations).length === 0) {
			this.classesCSS[prefix] = appliedProperties;
			return;
		}

		for (let property in remainingVariations) {
			let newVariations = { ...remainingVariations };
			delete newVariations[property];

			for (let value of remainingVariations[property]) {
				console.log(appliedProperties);
				if (property in appliedProperties) {
					continue;
				}

				let newPrefix = prefix;
				if (property === 'root') {
					newPrefix += '-' + value;
				} else {
					newPrefix += '-' + property + '-' + value;
				}

				let newAppliedProperties = { ...appliedProperties };
				newAppliedProperties[property] = value;
				this.generateCombinations(newPrefix, newVariations, newAppliedProperties);
			}
		}
	}

	iteration(model: any) {
		let modelToParse: any = {};
		modelToParse.title = Object.keys(model)[0];
		modelToParse.variations = Object.values(model)[0];

		for (let rootProperty in modelToParse.variations) {
			this.generateCombinations(modelToParse.title, modelToParse.variations[rootProperty], {});
		}

		return this.classesCSS;
	}
}

const red3 = new GenerateCssClasses();
console.log(red3.iteration(converted)); */

type Property = Record<string, string[]>;
function createProperty(property: Property) {
	const [propertyKey, propertyValues] = [Object.keys(property), Object.values(property)[0]];
	console.log(propertyValues);
}

createProperty({ root: ['primary', 'secondary', 'accent', 'neutral', 'error', 'gray'] });

['primary', 'secondary', 'accent', 'neutral', 'error', 'gray'].forEach((item1) => {
	console.log(item1);
	['primary', 'secondary', 'accent', 'neutral', 'error', 'gray'].forEach((itemLevel2) => {
		console.log(itemLevel2);
	});
});

const conf = {
	border: {
		color: {
			root: ['primary', 'secondary', 'accent', 'neutral', 'error', 'gray'],
			palette: ['yellow', 'orange', 'red', 'magenta', 'purple', 'green', 'teal', 'blue', 'dark'],
			scheme: ['discrete', 'success', 'info', 'warning', 'alert', 'error']
		},
		style: ['dotted', 'dashed', 'solid'],
		width: ['thin', 'medium', 'thick']
	}
};
