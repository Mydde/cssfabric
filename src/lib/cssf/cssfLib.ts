/** generated ! */
import postcss from 'postcss';



/** generated types */
type all = string | number;
type top = string | number;
type bottom = string | number;
type left = string | number;
type right = string | number;
type cssProp=CSSPropertyRule;
type overflow=string;

export interface CssfInterfaceT {
  gutter: {
    type: ( decl: postcss.Declaration, ...value: CssfInterface['gutter']['type'][])=> void ;
    gap: ( decl: postcss.Declaration, ...value: CssfInterface['gutter']['gap'][])=> void ;
    padding: ( decl: postcss.Declaration, ...value: CssfInterface['gutter']['padding'][])=> void ;
  };
  position: {
    left: ( decl: postcss.Declaration, ...value: CssfInterface['position']['left'][])=> void ;
    top: ( decl: postcss.Declaration, ...value: CssfInterface['position']['top'][])=> void ;
    right: ( decl: postcss.Declaration, ...value: CssfInterface['position']['right'][])=> void ;
    bottom: ( decl: postcss.Declaration, ...value: CssfInterface['position']['bottom'][])=> void ;
    margin: ( decl: postcss.Declaration, ...value: CssfInterface['position']['margin'][])=> void ;
  };
  box: {
    border: ( decl: postcss.Declaration, ...value: CssfInterface['box']['border'][])=> void ;
    shadow: ( decl: postcss.Declaration, ...value: CssfInterface['box']['shadow'][])=> void ;
    radius: ( decl: postcss.Declaration, ...value: CssfInterface['box']['radius'][])=> void ;
    overflow: ( decl: postcss.Declaration, ...value: CssfInterface['box']['overflow'][])=> void ;
  };
  size: {
    width: ( decl: postcss.Declaration, ...value: CssfInterface['size']['width'][])=> void ;
    height: ( decl: postcss.Declaration, ...value: CssfInterface['size']['height'][])=> void ;
    ratio: ( decl: postcss.Declaration, ...value: CssfInterface['size']['ratio'][])=> void ;
  };
  typography: {
    font: ( decl: postcss.Declaration, ...value: CssfInterface['typography']['font'][])=> void ;
    size: ( decl: postcss.Declaration, ...value: CssfInterface['typography']['size'][])=> void ;
    style: ( decl: postcss.Declaration, ...value: CssfInterface['typography']['style'][])=> void ;
    underline: ( decl: postcss.Declaration, ...value: CssfInterface['typography']['underline'][])=> void ;
    shadow: ( decl: postcss.Declaration, ...value: CssfInterface['typography']['shadow'][])=> void ;
  };
  color: {
    text: ( decl: postcss.Declaration, ...value: CssfInterface['color']['text'][])=> void ;
    bg: ( decl: postcss.Declaration, ...value: CssfInterface['color']['bg'][])=> void ;
    opacity: ( decl: postcss.Declaration, ...value: CssfInterface['color']['opacity'][])=> void ;
  };
  animate: {
    transition: ( decl: postcss.Declaration, ...value: CssfInterface['animate']['transition'][])=> void ;
    all: ( decl: postcss.Declaration, ...value: CssfInterface['animate']['all'][])=> void ;
    duration: ( decl: postcss.Declaration, ...value: CssfInterface['animate']['duration'][])=> void ;
    timing: ( decl: postcss.Declaration, ...value: CssfInterface['animate']['timing'][])=> void ;
    delay: ( decl: postcss.Declaration, ...value: CssfInterface['animate']['delay'][])=> void ;
  };

}export interface CssfInterface {
  gutter: {
    type: 'flex' | 'grid';
    gap: 'string';
    padding: 'all' | ['top' | 'bottom'] | ['top' | 'bottom' | 'left' | 'right'];
  };
  position: {
    left: 'string';
    top: 'string';
    right: 'string';
    bottom: 'string';
    margin: 'all' | ['top' | 'bottom'] | ['top' | 'bottom' | 'left' | 'right'];
  };
  box: {
    border: 'all' | ['top' | 'bottom'] | ['top' | 'bottom' | 'left' | 'right'];
    shadow: [];
    radius: 'string' | 'string?' | 'string?' | 'string?';
    overflow: ['visible | hidden' | ['x' | 'y']];
  };
  size: {
    width: 'string' | 'min?' | 'max?';
    height: 'string' | 'min?' | 'max?';
    ratio: 'string , string?';
  };
  typography: {
    font: 'string';
    size: 'string';
    style: 'bold' | 'italic' | 'normal' | 'string';
    underline: 'none' | 'dotted' | 'dashed' | 'solid' | 'double' | 'wavy' | 'string';
    shadow: 'string' | 'string?' | 'string?' | 'string?';
  };
  color: {
    text: 'string';
    bg: 'string';
    opacity: 'string' | 'number';
  };
  animate: {
    transition: ['duration' | 'timing' | 'delay'];
    all: 'all' | 'none' | 'cssProp';
    duration: 'string';
    timing: 'string';
    delay: 'string';
  };

}export class CssfClass {
  gutter(decl: postcss.Declaration) {
    return {
      type: (...args: CssfInterface['gutter']['type'][]) => {
					return args;
				},
      gap: (...args: CssfInterface['gutter']['gap'][]) => {
					return args;
				},
      padding: (...args: CssfInterface['gutter']['padding'][]) => {
					return args;
				},
    };
  }
   position(decl: postcss.Declaration) {
    return {
      left: (...args: CssfInterface['position']['left'][]) => {
					return args;
				},
      top: (...args: CssfInterface['position']['top'][]) => {
					return args;
				},
      right: (...args: CssfInterface['position']['right'][]) => {
					return args;
				},
      bottom: (...args: CssfInterface['position']['bottom'][]) => {
					return args;
				},
      margin: (...args: CssfInterface['position']['margin'][]) => {
					return args;
				},
    };
  }
   box(decl: postcss.Declaration) {
    return {
      border: (...args: CssfInterface['box']['border'][]) => {
					return args;
				},
      shadow: (...args: CssfInterface['box']['shadow'][]) => {
					return args;
				},
      radius: (...args: CssfInterface['box']['radius'][]) => {
					return args;
				},
      overflow: (...args: CssfInterface['box']['overflow'][]) => {
					return args;
				},
    };
  }
   size(decl: postcss.Declaration) {
    return {
      width: (...args: CssfInterface['size']['width'][]) => {
					return args;
				},
      height: (...args: CssfInterface['size']['height'][]) => {
					return args;
				},
      ratio: (...args: CssfInterface['size']['ratio'][]) => {
					return args;
				},
    };
  }
   typography(decl: postcss.Declaration) {
    return {
      font: (...args: CssfInterface['typography']['font'][]) => {
					return args;
				},
      size: (...args: CssfInterface['typography']['size'][]) => {
					return args;
				},
      style: (...args: CssfInterface['typography']['style'][]) => {
					return args;
				},
      underline: (...args: CssfInterface['typography']['underline'][]) => {
					return args;
				},
      shadow: (...args: CssfInterface['typography']['shadow'][]) => {
					return args;
				},
    };
  }
   color(decl: postcss.Declaration) {
    return {
      text: (...args: CssfInterface['color']['text'][]) => {
					return args;
				},
      bg: (...args: CssfInterface['color']['bg'][]) => {
					return args;
				},
      opacity: (...args: CssfInterface['color']['opacity'][]) => {
					return args;
				},
    };
  }
   animate(decl: postcss.Declaration) {
    return {
      transition: (...args: CssfInterface['animate']['transition'][]) => {
					return args;
				},
      all: (...args: CssfInterface['animate']['all'][]) => {
					return args;
				},
      duration: (...args: CssfInterface['animate']['duration'][]) => {
					return args;
				},
      timing: (...args: CssfInterface['animate']['timing'][]) => {
					return args;
				},
      delay: (...args: CssfInterface['animate']['delay'][]) => {
					return args;
				},
    };
  }
 
}