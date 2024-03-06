import postcss from 'postcss';
type all = string | number;
type top = string | number;
type bottom = string | number;
type left = string | number;
type right = string | number;
type cssProp=CSSPropertyRule;
export interface CssfInterface {
  outer: {
    display: 'flex' | 'grid' | 'string';
    flow: 'absolute' | 'fixed' | 'static' | 'relative' | 'string' | 'inherit' | 'initial' | 'unset';
    opacity: 'string' | 'number';
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
    shadow: 'string' | 'string?' | 'string?' | 'string?';
    radius: 'string' | 'string?' | 'string?' | 'string?';
  };
  size: {
    width: 'string' | ' min?' | 'max?';
    height: 'string' | 'string?' | 'string?';
    ratio: 'string' | 'string?';
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
  };
  gutter: {
    gap: 'string';
    padding: 'string';
  };
  animate: {
    transition: ['duration' | 'timing' | 'delay'];
    all: 'all' | 'none' | 'cssProp';
    duration: 'string';
    timing: 'string';
    delay: 'string';
  };
}
export class CssfCkass {
  outer(decl: postcss.Declaration) {
    return {
      display: (value: CssfInterface['outer']['display']) => {},
      flow: (value: CssfInterface['outer']['flow']) => {},
      opacity: (value: CssfInterface['outer']['opacity']) => {},
    };
  }
  position(decl: postcss.Declaration) {
    return {
      left: (value: CssfInterface['position']['left']) => {},
      top: (value: CssfInterface['position']['top']) => {},
      right: (value: CssfInterface['position']['right']) => {},
      bottom: (value: CssfInterface['position']['bottom']) => {},
      margin: (value: CssfInterface['position']['margin']) => {},
    };
  }
  box(decl: postcss.Declaration) {
    return {
      border: (value: CssfInterface['box']['border']) => {},
      shadow: (value: CssfInterface['box']['shadow']) => {},
      radius: (value: CssfInterface['box']['radius']) => {},
    };
  }
  size(decl: postcss.Declaration) {
    return {
      width: (value: CssfInterface['size']['width']) => {},
      height: (value: CssfInterface['size']['height']) => {},
      ratio: (value: CssfInterface['size']['ratio']) => {},
    };
  }
  typography(decl: postcss.Declaration) {
    return {
      font: (value: CssfInterface['typography']['font']) => {},
      size: (value: CssfInterface['typography']['size']) => {},
      style: (value: CssfInterface['typography']['style']) => {},
      underline: (value: CssfInterface['typography']['underline']) => {},
      shadow: (value: CssfInterface['typography']['shadow']) => {},
    };
  }
  color(decl: postcss.Declaration) {
    return {
      text: (value: CssfInterface['color']['text']) => {},
      bg: (value: CssfInterface['color']['bg']) => {},
    };
  }
  gutter(decl: postcss.Declaration) {
    return {
      gap: (value: CssfInterface['gutter']['gap']) => {},
      padding: (value: CssfInterface['gutter']['padding']) => {},
    };
  }
  animate(decl: postcss.Declaration) {
    return {
      transition: (value: CssfInterface['animate']['transition']) => {},
      all: (value: CssfInterface['animate']['all']) => {},
      duration: (value: CssfInterface['animate']['duration']) => {},
      timing: (value: CssfInterface['animate']['timing']) => {},
      delay: (value: CssfInterface['animate']['delay']) => {},
    };
  }
}
