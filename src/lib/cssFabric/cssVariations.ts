// Configuration initiale
const config = {
	outline: {
		fabric: {
			classNames: {
				color: 'outline-color',
				style: 'outline-style',
				width: 'outline-width'
			}
		},
		variations: {
			color: ['blue', 'red', 'green'],
			style: ['dotted', 'dashed', 'solid'],
			width: ['thin', 'medium', 'thick']
		}
	}
	// D'autres propriétés peuvent être ajoutées ici
};

class CssClassGenerator {
	constructor(config) {
		this.config = config;
	}

	generateCombinations(variations, prefix = '', index = 0) {
		if (index === variations.length) {
			return prefix ? [prefix] : [];
		}

		let combinations = this.generateCombinations(variations, prefix, index + 1);

		for (const variation of variations[index]) {
			const newPrefix = prefix + (prefix ? '-' : '') + variation;
			combinations = combinations.concat(
				this.generateCombinations(variations, newPrefix, index + 1)
			);
		}

		return combinations;
	}

	generateCssClasses() {
		let cssClasses = [];

		for (const property in this.config) {
			const variations = Object.values(this.config[property].variations);
			const combinations = this.generateCombinations(variations);
			cssClasses = cssClasses.concat(
				combinations.map((combination) => `.${property}-${combination}`)
			);
		}

		return cssClasses;
	}
}

const cssVariations = new CssClassGenerator(config);
const cssContent = cssVariations.generateCssClasses();

console.log(cssContent);
