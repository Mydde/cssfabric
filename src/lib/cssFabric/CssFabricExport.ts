import type { cssFabricModelType } from './types.js';
import fsExtra from 'fs-extra';

export class CssFabricExport {
	private cssFabricModel: cssFabricModelType;

	exportPaths: Record<'css' | 'json', string> = {
		css: './css-fabric.css',
		json: './cssFabric.json'
	};

	constructor(cssFabricModel: cssFabricModelType, exportPaths?: CssFabricExport['exportPaths']) {
		this.cssFabricModel = cssFabricModel;
		this.exportPaths = { ...exportPaths, ...this.exportPaths };

		return this;
	}

	public export(options: CssFabricExport['exportPaths']) {
		this.exportPaths = { ...this.exportPaths, ...options };

		this.createCssFile();
		this.createJsonModel();
	}

	private createCssFile() {
		// cssFabricBuilder.parseModel(cssCollection
		fsExtra.writeFile(this.exportPaths.css, this.cssFabricModel.toString(), (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('File created successfully.');
		});
	}
	private createJsonModel() {
		fsExtra.writeFile(this.exportPaths.json, JSON.stringify(this.cssFabricModel), (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('File created successfully.');
		});
	}
}
