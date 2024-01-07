import { colorScheme } from 'simpler-color';

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
	appearance: {
		description: 'Specifies the appearance of an element',
		syntax: 'auto | none',
		template: 'appearance: {appearance}',
		initial: 'auto',
		appliesTo: 'all elements',
		fabric: {
			appearance: 'appearance: {appearance}'
		}
	},
	objectFit: {
		description:
			'Specifies how the contents of a replaced element should be fitted to the box established by its used height and width',
		syntax: 'fill | contain | cover | none | scale-down',
		template: 'object-fit: {object-fit}',
		initial: 'fill',
		appliesTo: 'all elements',
		fabric: {
			'object-fit': 'object-fit: {object-fit}'
		}
	},
	mixBlendMode: {
		description: 'Specifies how an element is blended with its background',
		syntax:
			'normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity',
		template: 'mix-blend-mode: {mix-blend-mode}',
		initial: 'normal',
		appliesTo: 'all elements',
		fabric: {
			'mix-blend-mode': 'mix-blend-mode: {mix-blend-mode}'
		}
	},
	list: {
		'list-style': {
			description: 'Specifies the type of list-item marker',
			syntax: 'list-style-type | list-style-position | list-style-image',
			template:
				'list-style: [{listStyleType}] | [{listStyleType} {listStylePosition} {listStyleImage}]',
			initial: 'disc outside none',
			appliesTo: 'all elements',
			fabric: {
				'list-style': 'list-style: {listStyleType} {listStylePosition} {listStyleImage}',
				'list-style-type': 'list-style-type: {listStyleType}',
				'list-style-position': 'list-style-position: {listStylePosition}',
				'list-style-image': 'list-style-image: {listStyleImage}'
			}
		}
	},
	container: {
		grid: {
			description: 'Specifies the properties for a grid container',
			syntax:
				'grid-template-rows | grid-template-columns | grid-template-areas | grid-auto-rows | grid-auto-columns | grid-auto-flow | grid | grid-area | grid-row | grid-column | grid-row-start | grid-row-end | grid-column-start | grid-column-end',
			template: 'grid: {grid}',
			initial: 'none',
			appliesTo: 'grid containers'
		},
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
			template: 'align-content: {align-content}',
			initial: 'normal',
			appliesTo: 'flex containers',
			fabric: {
				'align-content': 'align-content: {align-content}'
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
		},
		'align-self': {
			description: 'Specifies the alignment for selected items inside a flexible container',
			syntax: '[auto | normal | stretch | flex-start | flex-end | center | baseline]',
			template: 'align-self: {alignSelf}',
			initial: 'auto',
			appliesTo: 'flex items',
			fabric: {
				'align-self': 'align-self: {alignSelf}'
			}
		},
		placeContent: {
			description:
				'Specifies the alignment between the lines inside a flexible container when the items do not use all available space',
			syntax: '[normal | flex-start | flex-end | center | space-between | space-around | stretch]',
			template: 'place-content: {align-content} {justify-content}',
			initial: 'normal',
			appliesTo: 'flex containers',
			fabric: {
				'place-content': 'place-content: {align-content}} {justify-content}'
			}
		},
		placeItems: {
			description: 'Specifies the alignment for items inside a flexible container',
			syntax: '[normal | stretch | flex-start | flex-end | center | baseline]',
			template: 'place-items: {align-items} {justify-items}',
			initial: 'normal',
			appliesTo: 'flex containers',
			fabric: {
				'place-items': 'place-items: {align-items} {justify-items}'
			}
		},
		placeSelf: {
			description: 'Specifies the alignment for selected items inside a flexible container',
			syntax: '[auto | normal | stretch | flex-start | flex-end | center | baseline]',
			template: 'place-self: {align-self} {justify-self}',
			initial: 'auto',
			appliesTo: 'flex items',
			fabric: {
				'place-self': 'place-self: {align-self} {justify-self}'
			}
		},
		order: {
			description: 'Specifies the order of the flexible item',
			syntax: '[-1|0|1]',
			template: 'order: {order}',
			initial: '0',
			appliesTo: 'flex items',
			fabric: {
				order: 'order: {order}'
			}
		},
		masonryAutoFlow: {
			description: 'Specifies the flow of the masonry layout',
			syntax: '[ pack | next ] | [ definite-first | ordered ]',
			template: 'masonry-auto-flow: {masonryAutoFlow}',
			initial: 'none',
			appliesTo: 'masonry containers',
			fabric: {
				'masonry-auto-flow': 'masonry-auto-flow: {masonryAutoFlow}'
			}
		}
	},
	pointerEvents: {
		description: 'Specifies whether or not an element reacts to pointer events',
		syntax:
			'auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit | initial | unset | revert | revert-layer',
		template: 'pointer-events: {pointerEvents}',
		initial: 'auto',
		appliesTo: 'all elements',
		fabric: {
			'pointer-events': 'pointer-events: {pointerEvents}'
		}
	},
	placement: {
		top: {
			description: 'Specifies the top position of a positioned element',
			syntax: 'auto | length | percentage',
			template: 'top: {top}',
			initial: 'auto',
			appliesTo: 'all positioned elements',
			fabric: {
				top: 'top: {top}'
			}
		},
		right: {
			description: 'Specifies the right position of a positioned element',
			syntax: 'auto | length | percentage',
			template: 'right: {right}',
			initial: 'auto',
			appliesTo: 'all positioned elements',
			fabric: {
				right: 'right: {right}'
			}
		},
		bottom: {
			description: 'Specifies the bottom position of a positioned element',
			syntax: 'auto | length | percentage',
			template: 'bottom: {bottom}',
			initial: 'auto',
			appliesTo: 'all positioned elements',
			fabric: {
				bottom: 'bottom: {bottom}'
			}
		},
		left: {
			description: 'Specifies the left position of a positioned element',
			syntax: 'auto | length | percentage',
			template: 'left: {left}',
			initial: 'auto',
			appliesTo: 'all positioned elements',
			fabric: {
				left: 'left: {left}'
			}
		}
	},
	box: {
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
		},
		overflow: {
			description: 'Specifies whether or not to clip the content of an element',
			syntax: 'visible | hidden | scroll | auto',
			template: 'overflow: {overflow}',
			initial: 'visible',
			appliesTo: 'all box elements',
			fabric: {
				overflow: 'overflow: {overflow}'
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
			template: 'padding: {paddingTop} {paddingRight} {paddingBottom} {paddingLeft}',
			initial: '0 0 0 0',
			appliesTo: 'all box elements',
			fabric: {
				padding: 'padding: {padding}',
				'padding-top': 'padding-top: {paddingTop}',
				'padding-right': 'padding-right: {paddingRight}',
				'padding-bottom': 'padding-bottom: {paddingBottom}',
				'padding-left': 'padding-left: {paddingLeft}'
			}
		},
		outline: {
			description: 'Specifies the outline around an element',
			syntax: 'outline-color | outline-style | outline-width',
			template: '[outline: outline] | [{outlineColor} {outlineStyle} {outlineWidth}]',
			initial: 'invert none medium',
			appliesTo: 'all box elements',
			fabric: {
				outline: 'outline: {outline-width}',
				'outline-color': 'outline-color: {outline-color}',
				'outline-style': 'outline-style: {outline-style}',
				'outline-width': 'outline-width: {outline-width}'
			}
		},
		contain: {
			description: 'Specifies how the container should handle its content',
			syntax: '[none | strict | content | size | layout | style | paint]',
			template: 'contain: {contain}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				contain: 'contain: {contain}'
			}
		},
		container: {
			description: 'Specifies the type of container',
			syntax: 'none | container-name [/ container-type]?',
			template: 'container: {container}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				container: 'container: {container}'
			}
		},
		contentVisibility: {
			description: 'Specifies whether or not an element is visible',
			syntax: '[visible | hidden | auto]',
			template: 'content-visibility: {contentVisibility}',
			initial: 'visible',
			appliesTo: 'all elements',
			fabric: {
				'content-visibility': 'content-visibility: {contentVisibility}'
			}
		},
		resize: {
			description: 'Specifies whether or not an element is resizable',
			syntax: '[none | both | horizontal | vertical | block | inline]',
			template: 'resize: {resize}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				resize: 'resize: {resize}'
			}
		},
		boxSing: {
			description: 'Specifies whether or not an element is resizable',
			syntax: '[border-box | content-box | padding-box]',
			template: 'resize: {resize}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				resize: 'resize: {resize}'
			}
		},
		breakAfter: {
			description: 'Specifies the page-, column-, or region-break behavior after an element',
			syntax:
				'[auto | always | avoid | left | right | page | column | region | avoid-page | avoid-column | avoid-region]',
			template: 'break-after: {breakAfter}',
			initial: 'auto',
			appliesTo: 'all elements',
			fabric: {
				'break-after': 'break-after: {breakAfter}'
			}
		}
	},
	filter: {
		description: 'Specifies the filter effects for an element',
		syntax:
			'none | blur  | brightness  | contrast | drop-shadow  | grayscale  | hue-rotate  | invert  | opacity  | saturate  | sepia  | url | initial | inherit | revert | unset ',
		template: 'filter: {filter}',
		initial: 'none',
		appliesTo: 'all elements',
		fabric: {
			'filter-blur': 'filter-blur: blur({blur})',
			filterBrightness: 'filter-brightness: brightness({brightness})',
			filterContrast: 'filter-contrast: contrast({contrast})',
			filterDropShadow: 'filter-drop-shadow: drop-shadow({dropShadow})',
			filterGrayscale: 'filter-grayscale: grayscale({grayscale})',
			filterHueRotate: 'filter-hue-rotate: hue-rotate({hueRotate})',
			filterInvert: 'filter-invert: invert({invert})',
			filterOpacity: 'filter-opacity: opacity({opacity})',
			filterSaturate: 'filter-saturate: saturate({saturate})',
			filterSepia: 'filter-sepia: sepia({sepia})',
			filterUrl: 'filter-url: url({url})'
		}
	},
	opacity: {
		description: 'Specifies the opacity of an element',
		syntax: '{0.0,1.0}',
		template: 'opacity: {opacity}',
		initial: '1',
		appliesTo: 'all elements',
		fabric: {
			opacity: 'opacity: {opacity}'
		}
	},
	transition: {
		description: 'Specifies the transition effect for an element',
		syntax: '[transition] | [transition-duration | transition-timing-function |transition- delay]',
		template: 'transition: {transition} {duration} {timingFunction} {delay}',
		initial: 'none',
		appliesTo: 'all elements',
		fabric: {
			transition:
				'transition: {transition} {transition-duration} {transition-timingFunction} {transition-delay}',
			'transition-property': 'transition-property: {transition-property}',
			'transition-duration': 'transition-duration: {transition-duration}',
			'transition-timing-function': 'transition-timing-function: {transition-timingFunction}',
			'transition-delay': 'transition-delay: {transition-delay}'
		}
	},
	aspectRatio: {
		description: 'Specifies the aspect ratio of an element',
		syntax: 'range[0,1]',
		template: 'aspect-ratio: {aspectRatioX} / {aspectRatioY}',
		initial: '1',
		appliesTo: 'all elements',
		fabric: {
			'aspect-ratio': 'aspect-ratio: {aspectRatioX} / {aspectRatioY}'
		}
	},
	colorScheme: {
		description: 'Specifies the color scheme used by an element',
		syntax: '[normal | light | dark] | [only light | only dark]',
		template: 'color-scheme: {colorScheme}',
		initial: 'light',
		appliesTo: 'all elements',
		fabric: {
			'color-scheme': 'color-scheme: {colorScheme}'
		}
	},
	initialLetter: {
		description: 'Specifies the initial letter of an element',
		syntax: 'normal | drop | raised | sunken | inherit',
		template: 'initial-letter: {initialLetter}',
		initial: 'normal',
		appliesTo: 'all elements',
		fabric: {
			'initial-letter': 'initial-letter: {initialLetter}'
		}
	},
	gap: {
		description: 'Specifies the gap between the rows and columns',
		syntax: 'length | percentage',
		template: 'gap: {gap}',
		initial: '0',
		appliesTo: 'all elements',
		fabric: {
			gap: 'gap: {gap}',
			'row-gap': 'row-gap: {rowGap}',
			'column-gap': 'column-gap: {columnGap}'
		}
	},
	break: {
		'break-after': {
			description: 'Specifies the page-, column-, or region-break behavior after an element',
			syntax:
				'auto | always | avoid | left | right | page | column | region | avoid-page | avoid-column | avoid-region',
			template: 'break-after: {break-after}',
			initial: 'auto',
			appliesTo: 'all elements',
			fabric: {
				'break-after': 'break-after: {break-after}'
			}
		},
		'break-before': {
			description: 'Specifies the page-, column-, or region-break behavior before an element',
			syntax:
				'auto | always | avoid | left | right | page | column | region | avoid-page | avoid-column | avoid-region',
			template: 'break-before: {break-before}',
			initial: 'auto',
			appliesTo: 'all elements',
			fabric: {
				'break-before': 'break-before: {break-before}'
			}
		}
	},
	backDropFilter: {
		description: 'Specifies the backdrop-filter effects for an element',
		syntax:
			'none | blur | brightness | contrast | drop-shadow | grayscale | hue-rotate | invert | opacity | saturate | sepia | url | initial | inherit | revert | unset',
		template: 'backdrop-filter: {backdropFilter}',
		initial: 'none',
		appliesTo: 'all elements',
		fabric: {
			'backdrop-filter-blur': 'backdrop-filter-blur: blur({blur})',
			backdropFilterBrightness: 'backdrop-filter-brightness: brightness({brightness})',
			backdropFilterContrast: 'backdrop-filter-contrast: contrast({contrast})',
			backdropFilterDropShadow: 'backdrop-filter-drop-shadow: drop-shadow({dropShadow})',
			backdropFilterGrayscale: 'backdrop-filter-grayscale: grayscale({grayscale})',
			backdropFilterHueRotate: 'backdrop-filter-hue-rotate: hue-rotate({hueRotate})',
			backdropFilterInvert: 'backdrop-filter-invert: invert({invert})',
			backdropFilterOpacity: 'backdrop-filter-opacity: opacity({opacity})',
			backdropFilterSaturate: 'backdrop-filter-saturate: saturate({saturate})',
			backdropFilterSepia: 'backdrop-filter-sepia: sepia({sepia})',
			backdropFilterUrl: 'backdrop-filter-url: url({url})'
		}
	},
	boxShadow: {
		description: 'Specifies the shadow effect around an element',
		syntax:
			'none | [h-shadow v-shadow blur spread color] | [inset h-shadow v-shadow blur spread color]',
		template: 'box-shadow: {boxShadow}',
		initial: 'none',
		appliesTo: 'all box elements'
	},
	background: {
		description: 'Specifies the background properties for an element',
		syntax:
			'[background-color | background-image | background-repeat | background-attachment | background-position]',
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
		template: 'vertical-align: {vertical-align}',
		initial: 'baseline',
		appliesTo: 'all elements',
		fabric: {
			'vertical-align': 'vertical-align: {vertical-align}'
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
	borders: {
		border: {
			description: 'Specifies the border properties for an element',
			syntax: 'border-width | border-style | border-color',
			template: 'border: {border-width} {border-style} {border-color}',
			initial: 'medium none currentColor',
			appliesTo: 'all box elements',
			fabric: {
				'border-width': 'border-width: {border-width}',
				'border-style': 'border-style: {border-style}',
				'border-color': 'border-color: {border-color}'
			}
		},
		radius: {
			description: 'Specifies the radius of the border corners',
			syntax: 'border-radius: [ length | percentage ]{1,4} [ / [ length | percentage ]{1,4} ]?',
			template: 'border-radius: {borderRadius}',
			initial: '0',
			appliesTo: 'all box elements',
			fabric: {
				'border-radius': 'border-radius: {border-radius}',
				'border-top-left-radius': 'border-top-left-radius: {border-top-left-radius}',
				'border-top-right-radius': 'border-top-right-radius: {border-top-right-radius}',
				'border-bottom-left-radius': 'border-bottom-left-radius: {border-bottom-left-radius}',
				'border-bottom-right-radius': 'border-bottom-right-radius: {border-bottom-right-radius}'
			}
		},
		borderWidth: {
			description: 'Specifies the width of the border',
			syntax: 'length | thin | medium | thick',
			template: 'border-width: {borderWidth}',
			initial: 'medium',
			appliesTo: 'all box elements',
			fabric: {
				'border-width': 'border-width: {borderWidth}'
			}
		},
		borderStyle: {
			description: 'Specifies the style of the border',
			syntax: 'none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset',
			template: 'border-style: {borderStyle}',
			initial: 'none',
			appliesTo: 'all box elements',
			fabric: {
				'border-style': 'border-style: {borderStyle}'
			}
		},
		borderColor: {
			description: 'Specifies the color of the border',
			syntax: 'color',
			template: 'border-color: {border-color}',
			initial: 'currentColor',
			appliesTo: 'all box elements',
			fabric: {
				'border-color': 'border-color: {border-color}'
			}
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
			'font-family': 'font-family: {fontFamily}',
			'line-height': 'line-height: {lineHeight}'
		}
	},
	rotate: {
		description: 'Specifies the rotation of the element',
		syntax: 'angle',
		template: 'rotate: {rotate} {rotate} {rotate}',
		initial: '0',
		appliesTo: 'all elements',
		fabric: {
			rotate: 'rotate: {rotate} {rotate} {rotate}'
		}
	},
	scale: {
		description: 'Specifies the scale of the element',
		syntax: 'none | [number | percentage]',
		template: 'transform: scale({scale})',
		initial: '1',
		appliesTo: 'all elements',
		fabric: {
			transform: 'transform: scale({scale})'
		}
	},
	'scroll-snap': {
		'scroll-snap-type': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'none | x | y | block | inline | both',
			template: 'scroll-snap-type: {scroll-snap-type}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'scroll-snap-type': 'scroll-snap-type: {scroll-snap-type}'
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
			template:
				'scroll-margin: {scroll-margin} {scroll-margin-top} {scroll-margin-right} {scroll-margin-bottom} {scroll-margin-left}',
			initial: '0 0 0 0',
			appliesTo: 'all elements',
			fabric: {
				'scroll-margin': 'scroll-margin: {scroll-margin}',
				'scroll-margin-top': 'scroll-margin-top: {scroll-margin-top}',
				'scroll-margin-right': 'scroll-margin-right: {scroll-margin-right}',
				'scroll-margin-bottom': 'scroll-margin-bottom: {scroll-margin-bottom}',
				'scroll-margin-left': 'scroll-margin-left: {scroll-margin-left}'
			}
		},
		'scroll-padding': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'inherit | initial | unset | length | percentage',
			template: 'scroll-padding: {scrollPadding} {scrollPadding} {scrollPadding} {scrollPadding}',
			initial: '0 0 0 0',
			appliesTo: 'all elements',
			fabric: {
				'scroll-padding': 'scroll-padding: {scroll-padding}',
				'scroll-padding-top': 'scroll-padding-top: {scroll-padding-top}',
				'scroll-padding-right': 'scroll-padding-right: {scroll-padding-right}',
				'scroll-padding-bottom': 'scroll-padding-bottom: {scroll-padding-bottom}',
				'scroll-padding-left': 'scroll-padding-left: {scroll-padding-left}'
			}
		},
		'scroll-snap-stop': {
			description: 'Specifies the scroll snapping behavior for a container element',
			syntax: 'normal | always',
			template: 'scroll-snap-stop: {scroll-snap-stop}',
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
			template: 'text-shadow: {offset-x} {offset-y} {blur-radius} {color}',
			initial: 'none none none none',
			appliesTo: 'all text elements',
			fabric: {
				'text-shadow': 'text-shadow: {text-shadow}',
				'offset-x': 'text-shadow: {offset-x}',
				'offset-y': 'text-shadow: {offset-y}',
				'blur-radius': 'text-shadow: {blur-radius}',
				color: 'text-shadow: {color}'
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
			syntax: 'noe | length | percentage',
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
			syntax: 'none | underline | overline | line-through | blink]',
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
			template: 'text-transform: {text-transform}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'text-transform': 'text-transform: {text-transform}'
			}
		},
		'text-overflow': {
			description:
				'Specifies how overflowed content that is not displayed should be signaled to the user',
			syntax: 'clip | ellipsis | string',
			template: 'text-overflow: {text-overflow}',
			initial: 'clip',
			appliesTo: 'all elements',
			fabric: {
				'text-overflow': 'text-overflow: {text-overflow}'
			}
		},
		whiteSpace: {
			description: 'Specifies how white-space inside an element is handled',
			syntax: 'normal | nowrap | pre | pre-line | pre-wrap | break-spaces',
			template: 'white-space: {whiteSpace}',
			initial: 'normal',
			appliesTo: 'all elements',
			fabric: {
				'white-space': 'white-space: {white-space}'
			}
		},
		wordBreak: {
			description: 'Specifies line breaking rules for non-CJK scripts',
			syntax: 'normal | break-all | keep-all',
			template: 'word-break: {wordBreak}',
			initial: 'normal',
			appliesTo: 'all elements',
			fabric: {
				'word-break': 'word-break: {wordBreak}'
			}
		},
		wordSpacing: {
			description: 'Specifies the spacing between words',
			syntax: 'normal | length ',
			template: 'word-spacing: {wordSpacing}',
			initial: 'normal',
			appliesTo: 'all elements',
			fabric: {
				'word-spacing': 'word-spacing: {wordSpacing}'
			}
		},
		writingMode: {
			description: 'Specifies whether lines of text are laid out horizontally or vertically',
			syntax: 'horizontal-tb | vertical-rl | vertical-lr',
			template: 'writing-mode: {writingMode}',
			initial: 'horizontal-tb',
			appliesTo: 'all elements',
			fabric: {
				'writing-mode': 'writing-mode: {writingMode}'
			}
		},
		hangingPunctuation: {
			description: 'Specifies whether a punctuation character may be placed outside the line box',
			syntax: '[none | first | last] | [allow-end | force-end]',
			template: 'hanging-punctuation: {hangingPunctuation}',
			initial: 'none',
			appliesTo: 'all elements',
			fabric: {
				'hanging-punctuation': 'hanging-punctuation: {hangingPunctuation}'
			}
		},
		initialLetterAlign: {
			description: 'Specifies the alignment of the initial letter',
			syntax: 'auto | alphabetic | hanging | ideographic',
			template: 'initial-letter-align: {initialLetterAlign}',
			initial: 'auto',
			appliesTo: 'all elements',
			fabric: {
				'initial-letter-align': 'initial-letter-align: {initialLetterAlign}'
			}
		},
		column: {
			columnCount: {
				description: 'Specifies the number of columns an element should be divided into',
				syntax: 'number | auto',
				template: 'column-count: {columnCount}',
				initial: 'auto',
				appliesTo: 'all elements',
				fabric: {
					'column-count': 'column-count: {columnCount}'
				}
			},
			columnFill: {
				description: 'Specifies how to fill columns, balanced or not',
				syntax: 'balance | auto',
				template: 'column-fill: {columnFill}',
				initial: 'balance',
				appliesTo: 'all elements',
				fabric: {
					'column-fill': 'column-fill: {columnFill}'
				}
			},
			columnGap: {
				description: 'Specifies the gap between the columns',
				syntax: 'length | normal',
				template: 'column-gap: {columnGap}',
				initial: 'normal',
				appliesTo: 'all elements',
				fabric: {
					'column-gap': 'column-gap: {columnGap}'
				}
			},
			columnRule: {
				description: 'Specifies a straight line, or "rule", to be drawn between each column',
				syntax: 'column-rule-width | column-rule-style | column-rule-color',
				template: 'column-rule: {columnRuleWidth} {columnRuleStyle} {columnRuleColor}',
				initial: 'medium none currentColor',
				appliesTo: 'all elements',
				fabric: {
					'column-rule': 'column-rule: {columnRuleWidth} {columnRuleStyle} {columnRuleColor}'
				}
			},
			columnRuleColor: {
				description: 'Specifies the color of the rule between columns',
				syntax: 'color',
				template: 'column-rule-color: {columnRuleColor}',
				initial: 'currentColor',
				appliesTo: 'all elements',
				fabric: {
					'column-rule-color': 'column-rule-color: {columnRuleColor}'
				}
			},
			columnRuleStyle: {
				description: 'Specifies the style of the rule between columns',
				syntax:
					'none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset',
				template: 'column-rule-style: {columnRuleStyle}',
				initial: 'none',
				appliesTo: 'all elements',
				fabric: {
					'column-rule-style': 'column-rule-style: {columnRuleStyle}'
				}
			},
			columnRuleWidth: {
				description: 'Specifies the width of the rule between columns',
				syntax: 'medium | thin | thick | length',
				template: 'column-rule-width: {columnRuleWidth}',
				initial: 'medium',
				appliesTo: 'all elements',
				fabric: {
					'column-rule-width': 'column-rule-width: {columnRuleWidth}'
				}
			},
			columnSpan: {
				description: 'Specifies how many columns an element should span across',
				syntax: 'none | all',
				template: 'column-span: {columnSpan}',
				initial: 'none',
				appliesTo: 'all elements',
				fabric: {
					'column-span': 'column-span: {columnSpan}'
				}
			},
			columnWidth: {
				description: 'Specifies the width of the columns',
				syntax: 'auto | length',
				template: 'column-width: {columnWidth}',
				initial: 'auto',
				appliesTo: 'all elements',
				fabric: {
					'column-width': 'column-width: {columnWidth}'
				}
			}
		}
	},
	zIndex: {
		description: 'Specifies the stack order of an element',
		syntax: 'auto | number',
		template: 'z-index: {zIndex}',
		initial: 'auto',
		appliesTo: 'all elements',
		fabric: {
			'z-index': 'z-index: {z-index}'
		}
	},
	'tab-size': {
		description: 'Specifies the length of the tab-character',
		syntax: 'length | number',
		template: 'tab-size: {tabSize}',
		initial: '8',
		appliesTo: 'all elements',
		fabric: {
			'tab-size': 'tab-size: {tab-size}'
		}
	},
	table: {
		'table-layout': {
			description: 'Specifies the algorithm used to lay out table cells, rows, and columns',
			syntax: 'auto | fixed',
			template: 'table-layout: {table-layout}',
			initial: 'auto',
			appliesTo: 'table elements',
			fabric: {
				'table-layout': 'table-layout: {table-layout}'
			}
		},
		'border-collapse': {
			description:
				'Specifies whether table borders should be collapsed into a single border or separated',
			syntax: 'collapse | separate',
			template: 'border-collapse: {border-collapse}',
			initial: 'separate',
			appliesTo: 'table elements',
			fabric: {
				'border-collapse': 'border-collapse: {borderCollapse}'
			}
		},
		'border-spacing': {
			description: 'Specifies the distance between the borders of adjacent cells',
			syntax: 'length | percentage',
			template: 'border-spacing: {border-spacing}',
			initial: '0',
			appliesTo: 'table elements',
			fabric: {
				'border-spacing': 'border-spacing: {border-spacing}'
			}
		},
		'empty-cells': {
			description:
				'Specifies whether or not to display borders and background on empty cells in a table',
			syntax: 'show | hide',
			template: 'empty-cells: {empty-cells}',
			initial: 'show',
			appliesTo: 'table elements',
			fabric: {
				'empty-cells': 'empty-cells: {empty-cells}'
			}
		},
		'caption-side': {
			description: 'Specifies the placement of a table caption',
			syntax: 'top | bottom | block-start | block-end | inline-start | inline-end',
			template: 'caption-side: {caption-side}',
			initial: 'top',
			appliesTo: 'table elements',
			fabric: {
				'caption-side': 'caption-side: {caption-side}'
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

type CssFabricProperty = {
	description: string;
	syntax: string; // contains | as separator
	template: string;
	initial: string;
	appliesTo: string;
	fabric: Record<string, string>;
};

function camelToUnderscore(str: string) {
	return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

type RenderMode = 'length' | 'percentage' | 'range' | 'number' | 'raw';
interface DecodedGroup {
	optional: boolean;
	repeatable: boolean;
	quantifier: { min: number; max: number } | null;
	optionalPart: string | null;
}

class CSSFormalSyntaxDecoder {
	private syntax: string;
	private decodedSyntax: Record<string, DecodedGroup>;

	constructor() {
		this.syntax = '';
		this.decodedSyntax = {};
	}

	private decodeQuantifier(group: string) {
		const quantifierMatch = group.match(/\{(\d+),(\d+)\}/);
		if (quantifierMatch) {
			return { min: parseInt(quantifierMatch[1]), max: parseInt(quantifierMatch[2]) };
		}
		return null;
	}

	private generateRandomValue(renderMode: RenderMode, key: string): string {
		switch (renderMode) {
			case 'length':
				return `${Math.floor(Math.random() * 100)}px`;
			case 'percentage':
				return `${Math.floor(Math.random() * 100)}%`;
			case 'range':
			case 'number':
				return `${Math.floor(Math.random() * 100)}`;
			case 'raw':
			default:
				return `{${key}}`;
		}
	}

	private getRenderMode(syntax: string): RenderMode {
		if (syntax.includes('length')) {
			return 'length';
		} else if (syntax.includes('percentage')) {
			return 'percentage';
		} else if (syntax.includes('range')) {
			return 'range';
		} else if (syntax.includes('number')) {
			return 'number';
		} else {
			return 'raw';
		}
	}

	private decodeFormalSyntax(syntax: string) {
		let decodedSyntax: any = {};

		// Split the syntax into groups
		let groups = syntax.split('|').map((g) => g.trim());

		groups.forEach((group) => {
			let optional = false;
			let repeatable = false;
			let quantifier = null;
			let optionalPart = null;

			// Check if the group is optional or repeatable
			if (group.endsWith('?')) {
				optional = true;
				group = group.slice(0, -1); // Remove the question mark
			}

			if (group.endsWith('+')) {
				repeatable = true;
				group = group.slice(0, -1); // Remove the plus sign
			}

			// Check for quantifiers like {1,4}
			quantifier = this.decodeQuantifier(group);
			if (quantifier) {
				group = group.replace(/\{\d+,\d+\}/, '').trim(); // Remove the quantifier part
			}

			// Check for optional parts
			const optionalPartMatch = group.match(/\[(.*?)\]/);
			if (optionalPartMatch) {
				optionalPart = optionalPartMatch[1];
				group = group.replace(optionalPartMatch[0], '').trim(); // Remove the optional part
			}

			decodedSyntax[group] = { optional, repeatable, quantifier, optionalPart };
		});

		return decodedSyntax;
	}

	public decodeAndGenerateValue(syntax: string): string {
		if (typeof syntax !== 'string') {
			console.log(syntax);
			throw new Error('Invalid syntax. It should be a string.');
		}
		this.syntax = syntax;
		this.decodedSyntax = this.decodeFormalSyntax(syntax);

		let result = '';

		for (let group in this.decodedSyntax) {
			const renderMode = this.getRenderMode(group);
			const quantifier = this.decodedSyntax[group].quantifier;
			const count = quantifier
				? Math.floor(Math.random() * (quantifier.max - quantifier.min + 1)) + quantifier.min
				: 1;

			for (let i = 0; i < count; i++) {
				result += this.generateRandomValue(renderMode, group) + ' ';
			}
		}

		return result.trim();
	}
}

/* const decoder = new CSSFormalSyntaxDecoder();
decoder.decodeAndGenerateValue('[ pack | next ] | [ definite-first | ordered ]'); */
/* console.log(decoder.decodeAndGenerateValue('[ pack | next ] | [ definite-first | ordered ]'));
console.log(decoder.decodeAndGenerateValue('none | container-name [/ container-type]?'));
console.log(decoder.decodeAndGenerateValue('[length{1,4}]'));
console.log(decoder.decodeAndGenerateValue('[number | percentage]'));
console.log(
	decoder.decodeAndGenerateValue(
		'none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset'
	)
);
console.log(decoder.decodeAndGenerateValue('none | x | y | block | inline | both'));
console.log(decoder.decodeAndGenerateValue('angle')); */
// [ pack | next ] | [ definite-first | ordered ]
// none | container-name [/ container-type]?
// console.log(decodeFormalSyntax('[ pack | next ] | [ definite-first | ordered ]'));
// console.log(decodeAndGenerateValue('[length{1,4}]'));
// none | [number | percentage]
// none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
// none | x | y | block | inline | both
// [ length | percentage ]{1,4} [ / [ length | percentage ]{1,4} ]?
// angle
function generateIterations(fabricProperty: any) {
	let iterations: any = {};
	let syntax = fabricProperty.syntax;
	let fabric = fabricProperty.fabric;
	let renderMode = getRenderMode(syntax);

	if (renderMode === 'raw') {
		for (let key in fabric) {
			iterations[`${key}`] = fabric[key];
		}
	} else {
		// Handle other render modes here
		// iterations[`${key}`] = fabric[key];
	}

	return iterations;
}

function cssFabricGenerate(propDetails: CssFabricProperty, scope: string) {
	let css = '';
	scope = camelToUnderscore(scope);
	for (const fabricClass of Object.keys(propDetails.fabric)) {
		const value = propDetails.fabric[fabricClass];
		const propertyName = camelToUnderscore(fabricClass);

		const className = `${propertyName}`;
		//css += `.${scope}-${className} { ${propertyName}: ${value}; }\r`;
		const decoder = new CSSFormalSyntaxDecoder();
		console.log(decoder.decodeAndGenerateValue(propDetails.syntax));

		// console.log(generateIterations(propDetails));
		css += `.${scope}-${className} { ${value}; }\r`;
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
	for (let key in cssProperties) {
		// if (chkValidity(cssProperties[key])) console.log(key);
		if (chkValidity(cssProperties[key]) && cssProperties.hasOwnProperty(key)) {
			const element = cssProperties[key];

			if (typeof element === 'object') {
				if (element.fabric) {
					parent += key;
					out += `\r/* ${parent} */\r`;
					out += cssFabricGenerate(element, parent);
					// parent = '';
				} else {
					out += recursiveFabricSearch(element, parent);
					parent = '';
				}
			}
		}
		parent = '';
	}
	return out;
}

const css = recursiveFabricSearch(cssProperties);
// console.log(css);
