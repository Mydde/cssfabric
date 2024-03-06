import { CssFabric } from '../CssFabric.js';

export const cssFabric = new CssFabric();
const styleSheet = cssFabric.cssFabricSheet();
styleSheet.export({
	css: './src/lib/fabric/css/css-fabric-sheet.css',
	json: './src/lib/fabric/css/cssFabric-sheet.json'
});
//

const model = cssFabric.createCssFabricVarsColors(
	'base',
	'palette',
	'presets',
	'status',
	'out',
	'gray',
	'out2'
);

model.export({
	css: './src/lib/fabric/css/css-fabric-vars-colors.css',
	json: './src/lib/fabric/css/cssFabric-vars-colors.json'
});
