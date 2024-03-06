import { CssFabricBuilder, CssFabricBuilderParams } from './CssFabricBuilder.js';
import { CssFabricExport } from './CssFabricExport.js';
import { cssFabricSheet } from './cssFabricSheet.js';
import { CSSProperties } from './cssProperties.js';
import type { cssFabricModelType, cssFabricModelKey } from './types.js';

export class CssFabric {
	vendor = (fragment: string = '') => `${this.cssFabricBuilderParams.vendorName}${fragment}`;

	cssFabricModel: cssFabricModelType = {} as cssFabricModelType;
	cssFabricBuilderParams: CssFabricBuilderParams;
	cssFabricBuilder: CssFabricBuilder;

	constructor() {
		this.cssFabricBuilder = new CssFabricBuilder();
		this.cssFabricBuilderParams = new CssFabricBuilderParams();
	}

	private cleanModelKey(modelKey: string): string {
		return modelKey.replace(/'/g, '');
	}

	setParams(params: Partial<CssFabricBuilderParams>) {
		this.cssFabricBuilderParams = {
			...this.cssFabricBuilderParams,
			...params
		} as CssFabricBuilderParams;
	}

	createCssFabricVarsColors(...args: cssFabricModelKey[]): {
		export: CssFabricExport['export'];
		css: string;
	} {
		args.forEach((modelKey) => {
			switch (this.cleanModelKey(modelKey)) {
				case 'base':
					this.cssFabricModel.base = this.cssFabricBuilder.mainRule(
						this.cssFabricBuilderParams.config.theme,
						this.vendor()
					);
					break;
				case 'palette':
					this.cssFabricModel.palette = this.cssFabricBuilder.mainRule(
						this.cssFabricBuilderParams.config.palette,
						this.vendor('palette-')
					);
					break;
				case 'presets':
					this.cssFabricModel.presets = this.cssFabricBuilder.flattenIt(
						['primary', 'secondary', 'tertiary', 'accent'],
						this.cssFabricBuilderParams.presets,
						this.vendor('presets-')
					);
					break;
				case 'status':
					this.cssFabricModel.status = this.cssFabricBuilder.mainRule(
						this.cssFabricBuilderParams.config.status,
						this.vendor('status-')
					);
					break;
				case 'out':
					// assombrir et rendre opaque  'primary', 'secondary', 'tertiary'
					this.cssFabricModel.out = this.cssFabricBuilder.makeDefaultVariations(
						['primary', 'secondary', 'tertiary'],
						['lighten', 'darken', 'opacity'],
						this.vendor()
					);
					break;
				case 'gray':
					this.cssFabricModel.gray = this.cssFabricBuilder.createProgression(
						{
							property: this.vendor(`color-gray`),
							iteratorMask: `color-mix(in srgb, ${this.vendor(`color-gray`)}  ${
								this.cssFabricBuilderParams.correspondances.gray
							} ##%);`,
							steps: this.cssFabricBuilderParams.defaultVariationSteps
						},
						'json'
					);
					break;
				case 'out2':
					// assombrir et rendre opaque  'primary', 'secondary', 'tertiary'
					this.cssFabricModel.out2 = this.cssFabricBuilder.makeDefaultVariations(
						['foreground', 'bg'],
						['lighten', 'darken', 'opacity'],
						this.vendor()
					);
					break;
				default:
					console.log('default', modelKey);
					break;
			}
		});

		return {
			export: (options) => new CssFabricExport(this.cssFabricModel, options).export(options),
			css: JSON.stringify(this.cssFabricModel)
		};
	}
	cssFabricSheet() {
		const cssP = new CSSProperties(cssFabricSheet /* , ['overflow'] */);
		const cssF = cssP.generateCSS();

		return {
			export: (options) => new CssFabricExport(cssF, options).export(options),
			css: cssF
		};
	}
}
