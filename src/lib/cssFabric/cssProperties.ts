import { cssFabric } from './index.js';

const cssProperties = {
	display: {
		description: 'Specifies how an element is displayed',
		syntax:
			'inline | block | contents | flex | grid | inline-block | inline-flex | inline-grid | inline-table | list-item | none | run-in | table | table-caption | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group',
		template: 'display: {display}',
		initial: 'inline',
		appliesTo: 'all box elements',
		fabric: {
			inline: 'display: inline',
			block: 'display: block',
			contents: 'display: contents',
			flex: 'display: flex',
			grid: 'display: grid',
			'inline-block': 'display: inline-block',
			'inline-flex': 'display: inline-flex',
			'inline-grid': 'display: inline-grid',
			'inline-table': 'display: inline-table',
			'list-item': 'display: list-item',
			none: 'display: none',
			'run-in': 'display: run-in',
			table: 'display: table',
			'table-caption': 'display: table-caption',
			'table-cell': 'display: table-cell',
			'table-column': 'display: table-column',
			'table-column-group': 'display: table-column-group',
			'table-footer-group': 'display: table-footer-group',
			'table-header-group': 'display: table-header-group',
			'table-row': 'display: table-row',
			'table-row-group': 'display: table-row-group'
		}
	},
	flex: {
		flex: {
			description: 'Specifies the properties for a flex container',
			syntax:
				'flex-direction | flex-wrap | flex-flow | justify-content | align-items | align-content',
			template:
				'flex: {flexDirection} {flexWrap} {flexFlow} {justifyContent} {alignItems} {alignContent}',
			initial: '0 1 auto',
			appliesTo: 'flex containers',
			fabric: {
				'flex-direction': 'flex-direction: {flexDirection}',
				'flex-wrap': 'flex-wrap: {flexWrap}',
				'flex-flow': 'flex-flow: {flexFlow}'
			}
		},
		'align-content': {
			description:
				'Specifies the alignment between the lines inside a flexible container when the items do not use all available space',
			syntax: 'normal | flex-start | flex-end | center | space-between | space-around | stretch',
			template: 'align-content: {alignContent}',
			initial: 'normal',
			appliesTo: 'flex containers',
			fabric: {
				'align-content': 'align-content: {alignContent}'
			}
		},
		'align-items': {
			description: 'Specifies the alignment for items inside a flexible container',
			syntax: 'normal | stretch | flex-start | flex-end | center | baseline',
			template: 'align-items: {alignItems}',
			initial: 'normal',
			appliesTo: 'flex containers',
			fabric: {
				'align-items': 'align-items: {alignItems}'
			}
		}
	},
	profundus: {
		position: {
			description: 'Specifies the type of positioning method used for an element',
			syntax: 'static | relative | absolute | fixed | sticky',
			template: 'position: {position}',
			initial: 'static',
			appliesTo: 'all box elements',
			fabric: {
				static: 'position: static',
				relative: 'position: relative',
				absolute: 'position: absolute',
				fixed: 'position: fixed',
				sticky: 'position: sticky'
			}
		},
		dimensions: {
			width: {
				description: 'Specifies the width of the content area of an element',
				syntax: 'auto | length | percentage',
				template: 'width: {width}',
				initial: 'auto',
				appliesTo: 'all box elements',
				fabric: {
					'width/min-width': 'width: {width}'
				}
			},
			height: {
				description: 'Specifies the height of the content area of an element',
				syntax: 'auto | length | percentage',
				template: 'height: {height}',
				initial: 'auto',
				appliesTo: 'all box elements',
				fabric: {
					'height/min-height': 'height: {height}'
				}
			}
		}
	},
	margin: {
		description: 'Specifies the margin around an element',
		syntax: 'length | percentage | auto',
		template: 'margin: {margin} {margin} {margin} {margin}',
		initial: '0 0 0 0',
		appliesTo: 'all box elements',
		fabric: {
			'margin-top': 'margin-top: {marginTop}',
			'margin-right': 'margin-right: {marginRight}',
			'margin-bottom': 'margin-bottom: {marginBottom}',
			'margin-left': 'margin-left: {marginLeft}'
		}
	},
	padding: {
		description: 'Specifies the padding inside an element',
		syntax: 'length | percentage',
		template: 'padding: {padding} {padding} {padding} {padding}',
		initial: '0 0 0 0',
		appliesTo: 'all box elements',
		fabric: {
			'padding-top': 'padding-top: {paddingTop}',
			'padding-right': 'padding-right: {paddingRight}',
			'padding-bottom': 'padding-bottom: {paddingBottom}',
			'padding-left': 'padding-left: {paddingLeft}'
		}
	},
	grid: {
		description: 'Specifies the properties for a grid container',
		syntax:
			'grid-template-rows | grid-template-columns | grid-template-areas | grid-auto-rows | grid-auto-columns | grid-auto-flow | grid | grid-area | grid-row | grid-column | grid-row-start | grid-row-end | grid-column-start | grid-column-end',
		template: 'grid: {grid}',
		initial: 'none',
		appliesTo: 'grid containers'
	},
	boxShadow: {
		description: 'Specifies the shadow effect around an element',
		syntax:
			'none | h-shadow v-shadow blur spread color | inset h-shadow v-shadow blur spread color',
		template: 'box-shadow: {boxShadow}',
		initial: 'none',
		appliesTo: 'all box elements'
	},
	background: {
		description: 'Specifies the background properties for an element',
		syntax:
			'background-color | background-image | background-repeat | background-attachment | background-position',
		template:
			'background: {backgroundColor} {backgroundImage} {backgroundRepeat} {backgroundAttachment} {backgroundPosition}',
		initial: 'transparent none repeat scroll 0% 0%',
		appliesTo: 'all elements',
		fabric: {
			'background-color': 'background-color: {backgroundColor}',
			'background-image': 'background-image: {backgroundImage}',
			'background-repeat': 'background-repeat: {backgroundRepeat}',
			'background-attachment': 'background-attachment: {backgroundAttachment}',
			'background-position': 'background-position: {backgroundPosition}'
		}
	},
	'unicode-bidi': {
		description: 'Specifies the level of embedding with respect to the bidirectional algorithm',
		syntax: 'normal | embed | bidi-override',
		template: 'unicode-bidi: {unicodeBidi}',
		initial: 'normal',
		appliesTo: 'all elements',
		fabric: {
			'unicode-bidi': 'unicode-bidi: {unicodeBidi}'
		}
	},
	'user-select': {
		description: 'Specifies the text selection behavior',
		syntax: 'auto | text | none | contain',
		template: 'user-select: {userSelect}',
		initial: 'auto',
		appliesTo: 'all elements',
		fabric: {
			'user-select': 'user-select: {userSelect}'
		}
	},
	widows: {
		description:
			'Specifies the minimum number of lines that must be left at the top of a page when a page break occurs inside an element',
		syntax: 'number',
		template: 'widows: {widows}',
		initial: '2',
		appliesTo: 'all elements',
		fabric: {
			widows: 'widows: {widows}'
		}
	},
	'touch-action': {
		description: 'Specifies the scrolling and zooming of the content',
		syntax:
			'auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | pinch-zoom | manipulation',
		template: 'touch-action: {touchAction}',
		initial: 'auto',
		appliesTo: 'all elements',
		fabric: {
			'touch-action': 'touch-action: {touchAction}'
		}
	},
	cursor: {
		description: 'Specifies the type of cursor to be displayed',
		syntax:
			'auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress',
		template: 'cursor: {cursor}',
		initial: 'auto',
		appliesTo: 'all elements',
		fabric: {
			cursor: 'cursor: {cursor}'
		}
	},
	animations: {
		translate: {
			description: 'Specifies the translation of an element',
			syntax: 'none | transform-functions',
			template: 'transform: translate({translateX}, {translateY}), {translateZ})',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				transform: 'transform: translate({translateX}, {translateY}), {translateZ})'
			}
		}
	},
	'vertical-align': {
		description: 'Specifies the vertical alignment of the content in an element',
		syntax:
			'baseline | sub | super | top | text-top | middle | bottom | text-bottom | length | percentage',
		template: 'vertical-align: {verticalAlign}',
		initial: 'baseline',
		appliesTo: 'all elements',
		fabric: {
			'vertical-align': 'vertical-align: {verticalAlign}'
		}
	},
	visibility: {
		description: 'Specifies whether or not an element is visible',
		syntax: 'visible | hidden | collapse | initial | inherit',
		template: 'visibility: {visibility}',
		initial: 'visible',
		appliesTo: 'all elements',
		fabric: {
			visibility: 'visibility: {visibility}'
		}
	},
	border: {
		description: 'Specifies the border properties for an element',
		syntax: 'border-width | border-style | border-color',
		template: 'border: {borderWidth} {borderStyle} {currentColor}',
		initial: 'medium none currentColor',
		appliesTo: 'all box elements',
		fabric: {
			'border-width': 'border-width: {borderWidth}',
			'border-style': 'border-style: {borderStyle}',
			'border-color': 'border-color: {borderColor}'
		}
	},
	radius: {
		description: 'Specifies the radius of the border corners',
		syntax: 'length | percentage',
		template: 'border-radius: {borderRadius}',
		initial: '0',
		appliesTo: 'all box elements',
		fabric: {
			'border-radius': 'border-radius: {borderRadius}',
			'border-radius-top-left': 'border-radius-top-left: {borderRadius}',
			'border-radius-top-right': 'border-radius-top-right: {borderRadius}',
			'border-radius-bottom-right': 'border-radius-bottom-right: {borderRadius}',
			'border-radius-bottom-left': 'border-radius-bottom-left: {borderRadius}'
		}
	},
	font: {
		description: 'Specifies the font properties for an element',
		syntax: 'font-style | font-variant | font-weight | font-size | line-height | font-family',
		template: 'font: {fontStyle} {fontVariant} {fontWeight} {fontSize}/{lineHeight} {fontFamily}',
		initial: 'normal normal normal medium/normal sans-serif',
		appliesTo: 'all elements',
		fabric: {
			'font-style': 'font-style: {fontStyle}',
			'font-variant': 'font-variant: {fontVariant}',
			'font-weight': 'font-weight: {fontWeight}',
			'font-size': 'font-size: {fontSize}',
			'line-height': 'line-height: {lineHeight}',
			'font-family': 'font-family: {fontFamily}'
		}
	},
	'scroll-snap': {
		'scroll-snap-type': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'none | x | y | block | inline | both',
			template: 'scroll-snap-type: {scrollSnapType}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'scroll-snap-type': 'scroll-snap-type: {scrollSnapType}'
			}
		},
		'scroll-snap-align': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'none | start | end | center',
			template: 'scroll-snap-align: {scrollSnapAlign}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'scroll-snap-align': 'scroll-snap-align: {scrollSnapAlign}'
			}
		},
		'scroll-margin': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'inherit | initial | unset | length | percentage',
			template: 'scroll-margin: {scrollMargin} {scrollMargin} {scrollMargin} {scrollMargin}',
			initial: '0 0 0 0',
			appliesTo: 'all elements',
			fabric: {
				'scroll-margin': 'scroll-margin: {scrollMargin}',
				'scroll-margin-top': 'scroll-margin-top: {scrollMarginTop}',
				'scroll-margin-right': 'scroll-margin-right: {scrollMarginRight}',
				'scroll-margin-bottom': 'scroll-margin-bottom: {scrollMarginBottom}',
				'scroll-margin-left': 'scroll-margin-left: {scrollMarginLeft}'
			}
		},
		'scroll-padding': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'inherit | initial | unset | length | percentage',
			template: 'scroll-padding: {scrollPadding} {scrollPadding} {scrollPadding} {scrollPadding}',
			initial: '0 0 0 0',
			appliesTo: 'all elements',
			fabric: {
				'scroll-padding': 'scroll-padding: {scrollPadding}',
				'scroll-padding-top': 'scroll-padding-top: {scrollPaddingTop}',
				'scroll-padding-right': 'scroll-padding-right: {scrollPaddingRight}',
				'scroll-padding-bottom': 'scroll-padding-bottom: {scrollPaddingBottom}',
				'scroll-padding-left': 'scroll-padding-left: {scrollPaddingLeft}'
			}
		},
		'scroll-snap-stop': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'normal | always',
			template: 'scroll-snap-stop: {scrollSnapStop}',
			initial: 'normal',
			appliesTo: 'all elements',
			fabric: {
				'scroll-snap-stop': 'scroll-snap-stop: {scrollSnapStop}'
			}
		}
	},
	text: {
		'text-shadow': {
			description: 'Specifies the shadow effect for text',
			syntax: 'offset-x | offset-y | blur-radius | color',
			template: 'text-shadow: {offsetX} {offsetY} {blurRadius} {color}',
			initial: 'none none none none',
			appliesTo: 'all text elements',
			fabric: {
				'text-shadow': 'text-shadow: {textShadow}',
				'offset-x': 'text-shadow: {textShadow}',
				'offset-y': 'text-shadow: {textShadow}',
				'blur-radius': 'text-shadow: {textShadow}',
				color: 'text-shadow: {textShadow}'
			}
		},
		'text-justify': {
			description: 'Specifies the justification method used when text-align is "justify"',
			syntax: 'auto | inter-word | inter-character | none',
			template: 'text-justify: {textJustify}',
			initial: 'auto',
			appliesTo: 'all elements',
			fabric: {
				'text-justify': 'text-justify: {textJustify}'
			}
		},
		'text-indent': {
			description: 'Specifies the indentation of the first line in a text-block',
			syntax: 'length | percentage',
			template: 'text-indent: {textIndent}',
			initial: '0',
			appliesTo: 'all elements',
			fabric: {
				'text-indent': 'text-indent: {textIndent}'
			}
		},
		'text-align': {
			description: 'Specifies the horizontal alignment of text',
			syntax: 'left | right | center | justify | initial | inherit',
			template: 'text-align: {textAlign}',
			initial: 'left',
			appliesTo: 'all elements',
			fabric: {
				'text-align': 'text-align: {textAlign}'
			}
		},
		'text-decoration': {
			description: 'Specifies the decoration added to text',
			syntax: 'none | [underline || overline || line-through || blink]',
			template: 'text-decoration: {textDecoration}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'text-decoration': 'text-decoration: {textDecoration}'
			}
		},
		'text-transform': {
			description: 'Specifies the capitalization of text',
			syntax: 'none | capitalize | uppercase | lowercase | initial | inherit',
			template: 'text-transform: {textTransform}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'text-transform': 'text-transform: {textTransform}'
			}
		},
		'text-overflow': {
			description:
				'Specifies how overflowed content that is not displayed should be signaled to the user',
			syntax: 'clip | ellipsis | string',
			template: 'text-overflow: {textOverflow}',
			initial: 'clip',
			appliesTo: 'all elements',
			fabric: {
				'text-overflow': 'text-overflow: {textOverflow}'
			}
		}
	},
	'tab-size': {
		description: 'Specifies the length of the tab-character',
		syntax: 'length | number',
		template: 'tab-size: {tabSize}',
		initial: '8',
		appliesTo: 'all elements',
		fabric: {
			'tab-size': 'tab-size: {tabSize}'
		}
	},
	table: {
		'table-layout': {
			description: 'Specifies the algorithm used to lay out table cells, rows, and columns',
			syntax: 'auto | fixed',
			template: 'table-layout: {tableLayout}',
			initial: 'auto',
			appliesTo: 'table elements',
			fabric: {
				'table-layout': 'table-layout: {tableLayout}'
			}
		},
		'border-collapse': {
			description:
				'Specifies whether table borders should be collapsed into a single border or separated',
			syntax: 'collapse | separate',
			template: 'border-collapse: {borderCollapse}',
			initial: 'separate',
			appliesTo: 'table elements',
			fabric: {
				'border-collapse': 'border-collapse: {borderCollapse}'
			}
		},
		'border-spacing': {
			description: 'Specifies the distance between the borders of adjacent cells',
			syntax: 'length | percentage',
			template: 'border-spacing: {borderSpacing}',
			initial: '0',
			appliesTo: 'table elements',
			fabric: {
				'border-spacing': 'border-spacing: {borderSpacing}'
			}
		},
		'empty-cells': {
			description:
				'Specifies whether or not to display borders and background on empty cells in a table',
			syntax: 'show | hide',
			template: 'empty-cells: {emptyCells}',
			initial: 'show',
			appliesTo: 'table elements',
			fabric: {
				'empty-cells': 'empty-cells: {emptyCells}'
			}
		},
		'caption-side': {
			description: 'Specifies the placement of a table caption',
			syntax: 'top | bottom | initial | inherit',
			template: 'caption-side: {captionSide}',
			initial: 'top',
			appliesTo: 'table elements',
			fabric: {
				'caption-side': 'caption-side: {captionSide}'
			}
		}
	}
};

/* text: {
		description: 'Specifies the text properties for an element',
		syntax:
			'text-indent letter-spacing | word-spacing | white-space  ',
		template:
			'text:   {letterSpacing} {wordSpacing} {whiteSpace}',
		initial: '0% start none none normal normal normal normal',
		appliesTo: 'all elements',
		fabric: {
			'text-indent': 'text-indent: {textIndent}',
			'text-align': 'text-align: {textAlign}',
			'text-decoration': 'text-decoration: {textDecoration}',
			'text-transform': 'text-transform: {textTransform}',
			'letter-spacing': 'letter-spacing: {letterSpacing}',
			'word-spacing': 'word-spacing: {wordSpacing}',
			'white-space': 'white-space: {whiteSpace}',
			'text-overflow': 'text-overflow: {textOverflow}'
		}
	}, */

function cssFabricGenerate(propDetails: any, scope: string) {
	let css = '';

	for (const fabricClass of Object.keys(propDetails.fabric)) {
		const value = propDetails.fabric[fabricClass];
		const propertyName = fabricClass.replace(/([A-Z])/g, '-$1').toLowerCase();

		const className = `${propertyName}`;
		css += `.${scope}-${className} { ${propertyName}: ${value}; }\r`;
	}
	return css;
}

function chkValidity(cssProperties: any) {
	if (cssProperties.fabric) return true;

	for (const key in cssProperties) {
		if (cssProperties.hasOwnProperty(key)) {
			const element = cssProperties[key];
			if (typeof element === 'object') {
				if (element.fabric) {
					return true;
				} else {
					return chkValidity(element);
				}
			}
			return false;
		}
	}
	return css;
}

function recursiveFabricSearch(cssProperties: any, parent: string = '') {
	let out = '';
	for (const key in cssProperties) {
		// if (chkValidity(cssProperties[key])) console.log(key);
		if (chkValidity(cssProperties[key]) && cssProperties.hasOwnProperty(key)) {
			const element = cssProperties[key];

			if (typeof element === 'object') {
				if (element.fabric) {
					parent += key;
					out += `\r/* ${parent} */\r`;
					out += cssFabricGenerate(element, parent);
					parent = '';
				} else {
					out += recursiveFabricSearch(element, parent);
					parent += '';
				}
			}
		}
		//parent = '';
	}
	return out;
}

const css = recursiveFabricSearch(cssProperties.flex);
console.log(css);
