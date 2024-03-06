import { CssFabric } from '../CssFabric.js';

export const cssFabric = new CssFabric();
const styleSheet = cssFabric.cssFabricSheet();
styleSheet.export({ css: './css-fabric-sheet.css', json: './cssFabric-sheet.json' });

/* const model = cssFabric.createCssFabricVarsColors(
	'base',
	'palette',
	'presets',
	'status',
	'out',
	'gray',
	'out2'
);
model.export({ css: './css-fabric.css', json: './cssFabric.json' }); */
