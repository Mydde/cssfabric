export type CssfModelTypes = typeof cssfModelTypes;
export type cssfModelRoot = Record<string, cssfModelDeclaration>;
export type cssfModelDeclaration = Record<string, any>;

export const cssfModelTypes = [
	'all',
	'top',
	'bottom',
	'left',
	'right',
	'cssProp=CSSPropertyRule',
	'overflow=string'
];
/**
 * Display property of the outer element
 */
export const cssfModel = {
	/* outer: {
		flow: ['absolute', 'fixed', 'static', 'relative']
	}, */
	gutter: {
		type: ['flex', 'grid'],
		gap: 'string',
		padding: ['all', ['top', 'bottom'], ['top', 'bottom', 'left', 'right']]
	},
	position: {
		left: 'string',
		top: 'string',
		right: 'string',
		bottom: 'string',
		margin: ['all', ['top', 'bottom'], ['top', 'bottom', 'left', 'right']]
	},
	box: {
		border: ['all', ['top', 'bottom'], ['top', 'bottom', 'left', 'right']],
		shadow: [[]],
		radius: ['string', 'string?', 'string?', 'string?'],
		overflow: [['visible | hidden', ['x', 'y']]]
	},
	size: {
		width: ['string', 'min?', 'max?'],
		height: ['string', 'min?', 'max?'],
		ratio: ['string , string?']
	},
	typography: {
		font: 'string',
		size: 'string',
		style: ['bold', 'italic', 'normal', 'string'],
		underline: ['none', 'dotted', 'dashed', 'solid', 'double', 'wavy', 'string'],
		shadow: ['string', 'string?', 'string?', 'string?']
	},
	color: {
		text: 'string',
		bg: 'string',
		opacity: ['string', 'number']
	},
	animate: {
		transition: [['duration', 'timing', 'delay']],
		all: ['all', 'none', 'cssProp'],
		duration: 'string',
		timing: 'string',
		delay: 'string'
	}
} as cssfModelRoot;
