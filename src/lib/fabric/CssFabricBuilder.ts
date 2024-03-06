import { harmony } from 'simpler-color';
import { colorConfig } from './config.js';
import type { Ease, EaseTrigger, Mask, Steps, ToMask } from './types.js';

export class CssFabricBuilder {
	// defaultVariationSteps
	cssFabricBuilderParams: CssFabricBuilderParams;

	constructor() {
		this.cssFabricBuilderParams = new CssFabricBuilderParams();
	}

	parseModel(json: Record<string, any>, parentKey = '') {
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

	createProgression(
		options: {
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
		},
		format: 'css' | 'json' = 'css'
	) {
		const { property, iteratorMask, propertyValue } = options;
		const { presets } = options.steps ?? this.cssFabricBuilderParams.defaultVariationSteps;
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
	dispatchHandleElements<M extends string = string, E = Element, A = any>(
		inputMask: any[],
		creatorFunction: (maskKey: M, index: number) => E,
		apply: (element: E, value: A) => void
	) {
		inputMask.forEach((maskKey, index) => {
			const element = creatorFunction(inputMask[index], maskKey);
			apply(element, inputMask[index]);
		});
	}

	enqueue(callback: (callbackKey: string) => void, ...rest: string[][]) {
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

	flattenIt(arr1: string[], arr2: string[], scope: string = 'color-') {
		const legacy: Record<string, any> = {};
		arr1.forEach((themeColor) => {
			legacy[themeColor] = {};
			arr2.forEach((props2) => {
				if (!legacy[themeColor][props2]) legacy[themeColor][props2] = {};
				const tag = `${scope}${[themeColor, props2].join('-')}`;
				legacy[themeColor][props2] = {
					[tag]: this.makeVariation(themeColor, props2)
						.replace('##', themeColor)
						.replace('{#vendor}', this.cssFabricBuilderParams.vendorName)
				};
			});
		});
		return legacy;
	}

	makeVariation(themeColor: string, variation: string) {
		return this.cssFabricBuilderParams.variations?.[variation]
			? this.cssFabricBuilderParams.variations[variation]
			: themeColor;
	}

	makeDefaultVariations(
		arr1: string[],
		arr2: string[],
		prefix: string,
		vendor: string = '--cssfab-'
	) {
		const out: Record<string, any> = {};
		arr1.forEach((themeColor) => {
			out[themeColor] = {};
			arr2.forEach((props2) => {
				out[themeColor][props2] = this.createProgression(
					{
						property: `${vendor}${themeColor}-${props2}`,
						iteratorMask: `color-mix(in srgb, var(${prefix}${themeColor}) ${this.cssFabricBuilderParams.correspondances[props2]} ##%);`,
						steps: this.cssFabricBuilderParams.defaultVariationSteps
					},
					'json'
				);
			});
		});

		return out;
	}

	mainRule(vars: Record<string, any>, prefix: string) {
		const collect: Record<string, any> = {};
		if (vars)
			Object.keys(vars).forEach((key) => {
				const val = vars[key];
				collect[key] = { [`${prefix}${key}`]: `${val};` };
			});

		return collect;
	}
}

export class CssFabricBuilderParams {
	vendorName = '--cssfab-';

	variations = {
		none: 'var({#vendor}-color-##);',
		light: 'color-mix(in srgb, var({#vendor}-color-##) white ##%);',
		lighter: 'color-mix(in srgb, var({#vendor}-color-##) white ##%);',
		dark: 'color-mix(in srgb, var({#vendor}-color-##) black ##%);',
		darker: 'color-mix(in srgb, var({#vendor}-color-##) black ##%);',
		complement: 'color-mix(in srgb, var({#vendor}-color-##) black ##%);',
		invert: 'color-mix(in srgb, var({#vendor}-color-##) black ##%);',
		'alpha-low': 'color-mix(in srgb, var({#vendor}-color-##) transparent ##%);',
		alpha: 'color-mix(in srgb, var({#vendor}-color-##) transparent ##%);',
		'alpha-high': 'color-mix(in srgb, var({#vendor}-color-##) transparent ##%);'
	} as const;

	defaultVariationSteps = {
		steps: [0, 100, 10],
		ease: [2, 20]
	} as const;

	correspondances: Record<string, any> = {
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

	baseColors: {
		primary: string;
		secondary: string;
		accent: string;
		neutral: string;
		error: string;
	};

	presets = [
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

	config: typeof colorConfig = {} as typeof colorConfig;

	constructor() {
		// color , vendor
		this.baseColors = harmony('#9e3902');
		this.config = this.deepMerge<typeof colorConfig>(colorConfig, { theme: harmony('#9e3902') });

		return this;
	}

	setVariations(variations: typeof CssFabricBuilderParams.prototype.variations) {
		this.variations = { ...this.variations, ...variations };
	}

	setDefaultVariationSteps(
		variationSteps: typeof CssFabricBuilderParams.prototype.defaultVariationSteps
	) {
		this.defaultVariationSteps = { ...this.defaultVariationSteps, ...variationSteps };
	}

	private deepMerge<T>(...objects: T[]): T {
		function objectMerge(target: T, source: T) {
			for (const key of Object.keys(source)) {
				const currenttarget = target[key];
				const currentsource = source[key];

				if (currenttarget) {
					const objectsource = typeof currentsource === 'object';
					const objecttarget = typeof currenttarget === 'object';

					if (objectsource && objecttarget) {
						void (Array.isArray(currenttarget) && Array.isArray(currentsource)
							? void (target[key] = currenttarget.concat(currentsource))
							: void objectMerge(currenttarget, currentsource));

						continue;
					}
				}

				target[key] = currentsource;
			}

			return target;
		}
		return objects.reduce(function (prev, next) {
			return { ...prev, ...objectMerge(prev, next) };
		}, objects[0]);
	}
}
