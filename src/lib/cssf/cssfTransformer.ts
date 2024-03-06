import type postcss from 'postcss';
import type { CssfInterfaceT } from './cssfLib.js';

export const cssfTransformer: CssfInterfaceT = {
	gutter: {
		type: function (decl: postcss.Declaration, ...value: ('flex' | 'grid')[]): void {
			throw new Error('Function not implemented.');
		},
		gap: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		padding: function (
			decl: postcss.Declaration,
			...value: ('all' | ['top' | 'bottom'] | ['top' | 'bottom' | 'left' | 'right'])[]
		): void {
			throw new Error('Function not implemented.');
		}
	},
	position: {
		left: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		top: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		right: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		bottom: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		margin: function (
			decl: postcss.Declaration,
			...value: ('all' | ['top' | 'bottom'] | ['top' | 'bottom' | 'left' | 'right'])[]
		): void {
			throw new Error('Function not implemented.');
		}
	},
	box: {
		border: function (
			decl: postcss.Declaration,
			...value: ('all' | ['top' | 'bottom'] | ['top' | 'bottom' | 'left' | 'right'])[]
		): void {
			throw new Error('Function not implemented.');
		},
		shadow: function (decl: postcss.Declaration, ...value: [][]): void {
			throw new Error('Function not implemented.');
		},
		radius: function (decl: postcss.Declaration, ...value: ('string' | 'string?')[]): void {
			throw new Error('Function not implemented.');
		},
		overflow: function (
			decl: postcss.Declaration,
			...value: ['visible | hidden' | ['x' | 'y']][]
		): void {
			throw new Error('Function not implemented.');
		}
	},
	size: {
		width: function (decl: postcss.Declaration, ...value: ('string' | 'min?' | 'max?')[]): void {
			throw new Error('Function not implemented.');
		},
		height: function (decl: postcss.Declaration, ...value: ('string' | 'min?' | 'max?')[]): void {
			throw new Error('Function not implemented.');
		},
		ratio: function (decl: postcss.Declaration, ...value: 'string , string?'[]): void {
			throw new Error('Function not implemented.');
		}
	},
	typography: {
		font: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		size: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		style: function (
			decl: postcss.Declaration,
			...value: ('string' | 'bold' | 'italic' | 'normal')[]
		): void {
			throw new Error('Function not implemented.');
		},
		underline: function (
			decl: postcss.Declaration,
			...value: ('string' | 'none' | 'dotted' | 'dashed' | 'solid' | 'double' | 'wavy')[]
		): void {
			throw new Error('Function not implemented.');
		},
		shadow: function (decl: postcss.Declaration, ...value: ('string' | 'string?')[]): void {
			throw new Error('Function not implemented.');
		}
	},
	color: {
		text: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		bg: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		opacity: function (decl: postcss.Declaration, ...value: ('string' | 'number')[]): void {
			throw new Error('Function not implemented.');
		}
	},
	animate: {
		transition: function (
			decl: postcss.Declaration,
			...value: ['duration' | 'timing' | 'delay'][]
		): void {
			throw new Error('Function not implemented.');
		},
		all: function (decl: postcss.Declaration, ...value: ('all' | 'none' | 'cssProp')[]): void {
			throw new Error('Function not implemented.');
		},
		duration: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		timing: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		},
		delay: function (decl: postcss.Declaration, ...value: 'string'[]): void {
			throw new Error('Function not implemented.');
		}
	}
};
