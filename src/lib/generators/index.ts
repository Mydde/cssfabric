/* rules */

import { cssFabricBuilder } from './utils.js';

const steps = {
	steps: [0, 100, 10],
	ease: [2, 20]
};

// primary
// dark
// light
// opacity
/* ['primary', 'secondary', 'tertiary'].forEach((prop) => {
	cssFabricBuilder.createProgression({
		property: '--cfab-primary',
		iteratorMask: 'color-mix(in srgb, var(--cfab-primary) black ##%',
		steps: {
			steps: [0, 100, 10],
			ease: [2, 20]
		}
	});
}); */

/* const out = ['primary', 'secondary', 'tertiary'].map((themeColor) => {
	console.log(themeColor);

	return ['lighten', 'darken', 'opacity'].map((props2) => {
		return [
			themeColor,
			cssFabricBuilder.createProgression({
				property: `--cfab-${themeColor}`,
				iteratorMask: `color-mix(in srgb, var(--cfab-${themeColor}) black ##%`,
				steps: {
					steps: [0, 100, 10],
					ease: [2, 20]
				}
			})
		];
	});
}); */

// ok
/* console.log(
	cssFabricBuilder.enqueue(
		(key: string) => {
			return key;
		},
		['primary', 'secondary', 'tertiary'], // rootSequenceKey/ rootSequenceIndex
		['lighten', 'darken', 'opacity'], // tour 1
		['medium', 'large'], // tour 2
		['argument'] // tour 3
	)
); */

const array = ['primary', 'secondary', 'tertiary']; // keysArDistribution[index][distributionIndex]
// const obj = Object.fromEntries(out);
// console.log(obj);
