import fsExtra from 'fs-extra';
import { harmony, triad, complement } from 'simpler-color';
import type { R } from 'vitest/dist/reporters-qc5Smpt5.js';

type Steps = [number, number, number];
type Maskdd = [Ease, EaseTrigger];
type Mask = string;
type ToMask = string;
type CssRule = string;
type EaseTrigger = number;
type Ease = number;

type ProgressionType = {
	property: string;
	steps: {
		steps: Steps;
		presets?: string[];
		ease: [Ease, EaseTrigger];
		reverseValue?: boolean;
	};
	iteratorMask: string;
	propertyValue?: {
		content: [Mask, ToMask];
		apply: string;
	};
};

export class cssFabricBuilder {
	static createCssFile(content: any) {
		fsExtra.writeFile('./file.css', content, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('File created successfully.');
		});
	}
	static createJsonModel(content: any) {
		fsExtra.writeFile('./file.json', content, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('File created successfully.');
		});
	}

	static parseModel(json: Record<string, any>, parentKey = '') {
		let css = parse(json, parentKey);
		return `:root{\n${css}}`;
		function parse(json: Record<string, any>, parentKey = '', titre = '') {
			let css = '';
			for (const key in json) {
				if (typeof json[key] === 'object') {
					css += `\n/* ${key} */ `;
					//titre += `/* ----${key}--- */ `;
					css += parse(json[key], '', titre);
				} else {
					css += titre;
					css += `\n${parentKey}${key}: ${json[key]}`;
					titre = '';
				}
			}
			return css;
		}
	}

	static createProgression(options: ProgressionType, format: 'css' | 'json' = 'css') {
		const { property, iteratorMask, propertyValue } = options;
		const { presets } = options.steps;
		let [from, to, increment] = options.steps.steps;
		const [ease, trigger] = options.steps.ease;

		if (presets) {
			//sizeof prests becomes steps.
			// cancels ease
			if (presets) {
				increment = to / presets.length;
				options.steps.steps = [from, to, to / presets.length];
			}
		}

		let css = '';
		let cssKey = {};

		for (
			let i = from;
			i <= to;
			i += i < trigger || i >= to - trigger ? increment / ease : increment
		) {
			const iteratorTo = options.steps.reverseValue ? to - i : i;
			const prop = `${property}-${i}`;
			const content = propertyValue?.content[0]
				? `${propertyValue?.content[0].replace(
						'##',
						propertyValue.content[1]
					)} ${propertyValue?.apply}`
				: '';
			const newVal = `${iteratorMask.replace('##', iteratorTo.toString())}`;

			css += `${prop}-${i}: ${content} ${newVal};\rn`;
			cssKey[`${prop}`] = `${content} ${newVal}`;
		}
		return format === 'css' ? css : cssKey;
	}

	/**
	 * Dispatches elements based on the input mask.
	 *
	 * @template M - The type of the mask key.
	 * @template E - The type of the element.
	 * @template A - The type of the value.
	 *
	 * @param inputMask - The input mask.
	 * @param creatorFunction - The function to create the element based on the mask key.
	 * @param apply - The function to apply the value to the element.
	 */
	static dispatchHandleElements<M extends string = string, E = Element, A = any>(
		inputMask: any[],
		creatorFunction: (maskKey: M, index: number) => E,
		apply: (element: E, value: A) => void
	) {
		inputMask.forEach((maskKey, index) => {
			const element = creatorFunction(inputMask[index], maskKey);
			apply(element, inputMask[index]);
		});
	}

	static enqueue(callback: (callbackKey: string) => void, ...rest: string[][]) {
		const buildObject = (rootKeys, distributionKeys, index = 0) => {
			if (index >= distributionKeys.length) {
				return rootKeys.reduce((acc, key) => ({ ...acc, [key]: callback(key) }), {});
			}

			const currentDistribution = distributionKeys[index];
			return rootKeys.reduce((acc, key) => {
				const nestedObject = buildObject(currentDistribution, distributionKeys, index + 1);
				return { ...acc, [key]: nestedObject };
			}, {});
		};

		return buildObject(rest[0], rest.slice(1));
	}
}

const legacyConfig = {
	theme: {
		gray: '#323130'
	},
	palette: {
		yellow: '#ffb900',
		orange: '#d83b01',
		red: '#d13438',
		magenta: '#b4009e',
		purple: '#5c2d91',
		green: '#107c10',
		teal: '#008272',
		blue: '#0078d4',
		dark: '#323232'
	},
	scheme: {
		discrete: '#ccc',
		success: 'green',
		info: '#FFDD57FF',
		warning: 'hsl(48, 96%, 46%)',
		alert: 'hsl(27, 100%, 50%)',
		error: 'red'
	}
};
const variations = {
	none: 'var(theme-color-##);',
	light: 'color-mix(in srgb, var(theme-color-##) white ##%);',
	lighter: 'color-mix(in srgb, var(##) white ##%);',
	dark: 'color-mix(in srgb, var(##) black ##%);',
	darker: 'color-mix(in srgb, var(##) black ##%);',
	complement: 'color-mix(in srgb, var(##) black ##%);',
	invert: 'color-mix(in srgb, var(##) black ##%);',
	'alpha-low': 'color-mix(in srgb, var(##) transparent ##%);',
	alpha: 'color-mix(in srgb, var(##) transparent ##%);',
	'alpha-high': 'color-mix(in srgb, var(##) transparent ##%);'
};

const defaultVariationSteps = {
	steps: [0, 100, 10],
	ease: [2, 20]
};

function getVariation(themeColor: string, variation: string) {
	return variations?.[variation] ? variations[variation].replace('##', themeColor) : themeColor;
}

function flattenIt(arr1: string[], arr2: string[], prefix: string = 'color-') {
	const legacy: Record<string, any> = {};
	arr1.forEach((themeColor) => {
		legacy[themeColor] = {};
		arr2.forEach((props2) => {
			if (!legacy[themeColor][props2]) legacy[themeColor][props2] = {};
			const tag = `${prefix}${[themeColor, props2].join('-')}`;
			legacy[themeColor][props2] = { [tag]: getVariation(themeColor, props2) };
		});
	});
	return legacy;
}

function mainRule(vars: Record<string, any>, prefix: string) {
	const collect: Record<string, any> = {};
	Object.keys(vars).forEach((key) => {
		const val = vars[key];
		collect[key] = { [`${prefix}${key}`]: `${val};` };
	});

	return collect;
}

function defaultVariation(
	arr1: string[],
	arr2: string[],
	prefix: string,
	vendor: string = '--cssfab-'
) {
	const out: Record<string, any> = {};
	arr1.forEach((themeColor) => {
		out[themeColor] = {};
		arr2.forEach((props2) => {
			out[themeColor][props2] = cssFabricBuilder.createProgression(
				{
					property: `${vendor}${themeColor}-${props2}`,
					iteratorMask: `color-mix(in srgb, var(${prefix}${themeColor}) ${correspondances[props2]} ##%);`,
					steps: defaultVariationSteps
				},
				'json'
			);
		});
	});

	return out;
}

const cssCollection: Record<string, any> = { base: '' };
/* base */
const baseColors = harmony('#9e3902');
const presets = [
	'light',
	'lighter',
	'dark',
	'darker',
	'complement',
	'invert',
	'alpha-low',
	'alpha',
	'alpha-high'
];
const correspondances: Record<string, any> = {
	lighten: 'white',
	light: 'white',
	lighter: 'white',
	darken: 'black',
	dark: 'black',
	darker: 'black',
	gray: '#333',
	opacity: 'transparent',
	'alpha-high': 'transparent',
	'alpha-low': 'transparent',
	alpha: 'transparent'
};

const vendorName = '--cssfab-';
const vendor = (fragment: string = '') => `${fragment}${vendorName}`;
/* base colors */
cssCollection.base = mainRule(baseColors, vendor());
cssCollection.palette = mainRule(legacyConfig.palette, vendor('palette-'));
cssCollection.presets = flattenIt(['primary', 'secondary', 'tertiary'], presets, vendor('status-'));
cssCollection.status = mainRule(legacyConfig.scheme, vendor('scheme-'));

// assombrir et rendre opaque  'primary', 'secondary', 'tertiary'
cssCollection.out = defaultVariation(
	['primary', 'secondary', 'tertiary'],
	['lighten', 'darken', 'opacity'],
	vendor()
);

cssCollection.gray = cssFabricBuilder.createProgression(
	{
		property: vendor(`color-gray`),
		iteratorMask: `color-mix(in srgb, ${vendor(`color-gray`)}  ${correspondances.gray} ##%);`,
		steps: defaultVariationSteps
	},
	'json'
);

// assombrir et rendre opaque  'primary', 'secondary', 'tertiary'
cssCollection.out2 = defaultVariation(
	['foreground', 'bg'],
	['lighten', 'darken', 'opacity'],
	vendor()
);

console.log(cssFabricBuilder.parseModel(cssCollection));
cssFabricBuilder.createJsonModel(JSON.stringify(cssCollection));
cssFabricBuilder.createCssFile(cssFabricBuilder.parseModel(cssCollection));
