import fs from 'fs-extra';
import { CssGuide } from './cssfGuide.js';
import { cssfModelTypes, cssfModel } from './cssfModel.js';

/* const processor = postcss([myPlugin]);

processor.process('a { color: black; }').then((result) => {
	console.log(result.css);
}); */

const cssGuide = new CssGuide(cssfModelTypes);
const { meta, interfaces, classMethods, classTypes, transformerTypes } =
	cssGuide.generate(cssfModel);
console.log(meta, interfaces, classMethods, classTypes, transformerTypes);
fs.writeFileSync(
	'src/lib/cssf/cssfLib.ts',
	meta + classTypes + transformerTypes + interfaces + classMethods
);
