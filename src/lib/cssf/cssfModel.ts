export const cssfModelTypes = ['all', 'top', 'bottom', 'left', 'right', 'cssProp=CSSPropertyRule'];
export type CssfModelTypes = typeof cssfModelTypes;
export const cssfModel = {
	outer: {
		display: {
			types: ['flex', 'grid', 'string'],
			description: 'Display property of the outer element'
		},
		flow: {
			types: ['absolute', 'fixed', 'static', 'relative', 'string', 'inherit', 'initial', 'unset'],
			description: ''
		},
		opacity: { types: ['string', 'number'], description: 'Opacity of the element from 0.0 to 1.0' }
	},
	position: {
		left: { types: 'string', description: '' },
		top: { types: 'string', description: '' },
		right: { types: 'string', description: '' },
		bottom: { types: 'string', description: '' },
		margin: {
			types: ['all', ['top', 'bottom'], ['top', 'bottom', 'left', 'right']],
			description: ''
		}
	},
	box: {
		border: {
			types: ['all', ['top', 'bottom'], ['top', 'bottom', 'left', 'right']],
			description: ''
		},
		shadow: { types: ['string', 'string?', 'string?', 'string?'], description: '' },
		radius: {
			types: ['string', 'string?', 'string?', 'string?'],
			description: 'Radius of the element'
		}
	},
	size: {
		width: { types: ['string', ' min?', 'max?'], description: '' },
		height: { types: ['string', 'string?', 'string?'], description: '' },
		ratio: { types: ['string', 'string?'], description: '' }
	},
	typography: {
		font: { types: 'string', description: '' },
		size: { types: 'string', description: '' },
		style: { types: ['bold', 'italic', 'normal', 'string'], description: '' },
		underline: {
			types: ['none', 'dotted', 'dashed', 'solid', 'double', 'wavy', 'string'],
			description: ''
		},
		shadow: { types: ['string', 'string?', 'string?', 'string?'], description: '' }
	},

	color: {
		text: { types: 'string', description: '' },
		bg: { types: 'string', description: '' }
	},
	gutter: {
		gap: { types: 'string', description: '' },
		padding: { types: 'string', description: '' }
	},
	animate: {
		transition: { types: [['duration', 'timing', 'delay']], description: '' },
		all: { types: ['all', 'none', 'cssProp'], description: '' },
		duration: { types: 'string', description: '' },
		timing: { types: 'string', description: '' },
		delay: { types: 'string', description: '' }
	}
};

console;
