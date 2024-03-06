import postcss from 'postcss';

const myPlugin = (root: postcss.Root) => {
	root.walkDecls((decl) => {
		console.log(`Propriété : ${decl.prop}`);
		console.log(`Valeur : ${decl.value}`);
		console.log(`Important : ${decl.important}`);
		console.log(
			`Source : ligne ${decl?.source?.start?.line}, colonne ${decl.source?.start?.column}`
		);

		// decl.prop = 'my-prefix-' + decl.prop;
		// decl?.parent.append({ prop: 'my-prefix-' + decl.prop, value: decl.value });
	});
};

const processor = postcss([myPlugin]);

processor.process('a { color: black; }').then((result) => {
	console.log(result.css);
});
