import fs from 'fs-extra';
import { CssGuide } from './cssfGuide.js';
import { cssfModelTypes, cssfModel } from './cssfModel.js';

/* const processor = postcss([myPlugin]);

processor.process('a { color: black; }').then((result) => {
	console.log(result.css);
}); */

const cssGuide = new CssGuide(cssfModelTypes);
const { meta, interfaces, classMethods } = cssGuide.generate(cssfModel);
console;

fs.writeFileSync('src/lib/cssf/cssfLib.ts', meta + interfaces + classMethods);
