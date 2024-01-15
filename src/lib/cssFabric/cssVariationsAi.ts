import { cssFabricSheet } from './cssFabricSheet.js';
import type { CssFabricFragment } from './cssProperties.js';
import { colorConfig } from './index.js';

type Variation =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'yellow'
	| 'orange'
	| 'discrete'
	| 'error'
	| 'dotted'
	| 'dashed'
	| 'solid'
	| 'thin'
	| 'medium'
	| 'thick';

type Model = {
	[key: string]: ModelTags;
};
type CssProperty = ('root' | 'palette' | 'scheme') | ('color' | 'style' | 'width' | string);
type Variations = Variation[];
type CssBlock = Record<CssProperty, Variations>;
type ModelTags = Record<CssProperty, Variations | CssBlock>;

const model: Model = {
	border: {
		color: {
			root: ['primary', 'secondary', 'accent'],
			palette: ['yellow', 'orange'],
			scheme: ['discrete', 'error']
		},
		style: ['dotted', 'dashed', 'solid'],
		width: ['thin', 'medium', 'thick']
	}
};

/*

from this object :
title of this model is border
so we have const mainTag = Object.keys(model)[0] 

const model = {
	border: {
		color: {
			root: 'primary'|'secondary',
			palette: 'yellow'|'orange',
			scheme: 'discrete'
		},
		style: ['dotted', 'dashed', 'solid'],
		width: ['thin', 'medium', 'thick']
	}
}; 

const model = {
	border: {
		color: {
			root: ['primary', 'secondary'],
			palette: ['yellow', 'orange'],
			scheme: ['discrete'  ]
		},
		style: ['dotted', 'dashed', 'solid'],
		width: ['thin', 'medium', 'thick']
	}
}; 

make a javascript program to build this object:

*/

export type CssFabricBlock = {
	[key: string]: {
		initial: string;
		syntax: string;
		fabric: string;
		variations: Record<string, string[] | string[][]>;
	};
};

const delmoOut = {
	border: {
		color: ['blue', 'red', 'green', 'yellow', 'orange'],
		width: ['thin', 'medium', 'thick'],
		style: ['solid', 'dashed', 'dotted']
	}
};

const delmo = {
	border: {
		variations: {
			color: [['(cssFab.theme)'], ['cssFab.palette'], ['cssFab.status']],
			width: ['thin', 'medium', 'thick'],
			style: ['solid', 'dashed', 'dotted']
		}
	}
};

// console.log(out);

function loop(fragmentObj: CssFabricBlock) {
	const fragmentKey = Object.keys(fragmentObj)[0];
	const fragment = Object.values(fragmentObj)[0];

	let variations = fragment.variations;
	let variationValues = Object.values(variations);
	let firstVarKey = variationValues?.[0];
	let firstKey = Object.keys(variations)?.[0];

	let strap = firstVarKey?.[0];

	let remainingVariations = Object.fromEntries(Object.entries(variations).slice(1));
	// if first element key is an array of array
	// then we have to loop on each array
	if (Array.isArray(strap)) {
		// loop on each array
		for (const value of firstVarKey) {
			console.log(value);
			// create CssModel
			value.forEach((element: string) => {
				console.log(element);
				// if enclosed by ()
				const enclosedValue = element.match(/\((.*?)\)/)?.[1];
				if (enclosedValue) {
					console.log('will be root:', enclosedValue);
				}
				// if contains cssFab.
				let modelData: Record<string, any> = {
					[fragmentKey]: { [firstKey]: [], ...remainingVariations }
				};

				if (element.includes('cssFab.')) {
					// replace with cssFab.theme
					const fabTheme = element.split('cssFab.')[1].replace(')', '');
					// modelData[fabTheme] = {};
					console.log('fire: ', fragmentKey, fabTheme);
					modelData[fragmentKey][firstKey] = Object.keys(colorConfig[fabTheme] ?? {});
					const options = { [firstKey]: fabTheme };
					console.log(options);
				}

				// create CssModel
				console.log(modelData);
			});
		}
	} else {
		// create CssModel
	}
}
loop(delmo);

class CssModel {
	verticalModel: Record<string, any>;
	className: string;
	insert: string;

	constructor(model: Record<string, any>, insert: string = 'insert') {
		[this.className, this.verticalModel] = Object.entries(model)[0];
		this.insert = insert;
	}

	generateCss(prefix: string = '') {
		this.generateRoot(this.verticalModel, prefix);
		return this.generateCombinations(this.verticalModel, prefix);
	}

	private generateRoot(obj: Record<string, string[]>, prefix: string = '') {
		let result: Record<string, any> = {};
		result[`.${this.className}`] = 'thin solid blue';
		const ref = Object.entries(obj).reduce(
			(acc: Record<string, string[]>, [style, propertyValues]) => {
				acc[style] = propertyValues;
				return acc;
			},
			{}
		);
	}

	private generateCombinations(
		obj: Record<string, string[]>,
		prefix: string = '',
		remainingCombinations: Record<string, string> = {}
	): Record<string, any> {
		let result: Record<string, any> = {};

		// Ajouter la combinaison actuelle au résultat si elle n'est pas vide
		if (Object.keys(remainingCombinations).length > 0) {
			result[prefix] = remainingCombinations;
		}

		for (const key in obj) {
			for (const value of obj[key]) {
				const newPrefix = prefix + (prefix ? '-' : '.' + this.className + '-') + value;
				let cssVar = `--var(${this.className}-${key},${value})`;
				const newCombination = {
					...remainingCombinations,
					[`${this.className}-${key}`]: cssVar,
					[`--${this.className}-${key}`]: value
				};

				const { [key]: _, ...remainingObj } = obj;
				const subCombinations = this.generateCombinations(remainingObj, newPrefix, newCombination);
				result = { ...result, ...subCombinations };
			}
			// break; // S'arrêter après avoir traité la première clé
		}

		return result;
	}
}

const cssModel = new CssModel(delmoOut);
let results = cssModel.generateCss();
console.log(results);
