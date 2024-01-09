class CssClassGenerator {
	generate(config: any): any {
		let classes = {};

		for (let property in config) {
			this.generateCombinations(property, config[property].variations, '', '', classes);
		}

		return classes;
	}

	private generateCombinations(
		property: string,
		variations: any,
		prefix: string,
		cssProperty: string,
		classes: any
	) {
		for (let variation in variations) {
			let remainingVariations = { ...variations };
			delete remainingVariations[variation];

			for (let value of variations[variation]) {
				let newPrefix = prefix ? `${prefix}-${value}` : `${property}-${value}`;
				let newCssProperty = cssProperty ? `${cssProperty} ${value}` : `${property}:${value}`;
				classes[newPrefix] = newCssProperty;
				this.generateCombinations(
					property,
					remainingVariations,
					newPrefix,
					newCssProperty,
					classes
				);
			}
		}
	}
}

let generator = new CssClassGenerator();
let config = {
	border: {
		variations: {
			color: ['blue', 'red', 'green'],
			style: ['dotted', 'dashed', 'solid'],
			width: ['thin', 'medium', 'thick']
		}
	}
};
console.log(generator.generate(config));
