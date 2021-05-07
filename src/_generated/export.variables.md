# Welcome to cssfabric


Willing to bring my utility-first 2011 css framework to a more decent life !


This is also a learning point about gulp, webpack, packages and friends.

> yaocf !


<br/>

## Incoming features


<br/>

| modules |     |
| ------- | --- |
| cssfabric | cssfabric global config variables
animation | cssfabric simplest animation module
base | cssfabric base config variables
grid | cssfabric flex grid system module
box | cssfabric box module to set heights, paddings, margins and shadows on all html elements
menu | cssfabric menu module to set menu style
color | cssfabric color system: its about colors
overflow | cssfabric overflow module to set overflow styles on all html elements
table | cssfabric table module to set different table styles
scale | cssfabric scale module to set dimensions and ratios on all html elements
text | cssfabric text module to set text style on all html elements
theme | 
zindex | cssfabric zindex module to set z-index on all html elements |


<br/>




<br/>

### More details

---

#### <strong>module grid</strong>


<br/>

#### [grid]


- a so classic grid system, and, hey, it gets height !


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  grid
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: w&nbsp;&nbsp;h

#### [self]


- grid children specific classnames


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  self
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: auto&nbsp;&nbsp;start&nbsp;&nbsp;end&nbsp;&nbsp;center&nbsp;&nbsp;baseline&nbsp;&nbsp;stretch

---

#### <strong>module box</strong>


<br/>

#### [padding]


- padding properties for html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  pad
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: t&nbsp;&nbsp;b&nbsp;&nbsp;l&nbsp;&nbsp;r&nbsp;&nbsp;all&nbsp;&nbsp;u&nbsp;&nbsp;ii&nbsp;&nbsp;tb

#### [margin]


- margin properties for html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  marg
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: t&nbsp;&nbsp;b&nbsp;&nbsp;l&nbsp;&nbsp;r&nbsp;&nbsp;all&nbsp;&nbsp;u&nbsp;&nbsp;ii&nbsp;&nbsp;tb

#### [border]


- border properties for html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  border
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: t&nbsp;&nbsp;b&nbsp;&nbsp;l&nbsp;&nbsp;r&nbsp;&nbsp;all&nbsp;&nbsp;u&nbsp;&nbsp;ii&nbsp;&nbsp;tb

#### [shadow]


- applying shadows give depth and levels to your design


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  shad

---

#### <strong>module color</strong>


<br/>

#### [color]


- color for text level html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  color
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: theme&nbsp;&nbsp;scheme&nbsp;&nbsp;palette&nbsp;&nbsp;gray
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- theme</span>: primary&nbsp;&nbsp;&nbsp;&nbsp;foreground&nbsp;&nbsp;&nbsp;&nbsp;background<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- scheme</span>: info&nbsp;&nbsp;&nbsp;&nbsp;alert&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;warning&nbsp;&nbsp;&nbsp;&nbsp;discrete&nbsp;&nbsp;&nbsp;&nbsp;success<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- palette</span>: yellow&nbsp;&nbsp;&nbsp;&nbsp;orange&nbsp;&nbsp;&nbsp;&nbsp;red&nbsp;&nbsp;&nbsp;&nbsp;magenta&nbsp;&nbsp;&nbsp;&nbsp;purple&nbsp;&nbsp;&nbsp;&nbsp;green&nbsp;&nbsp;&nbsp;&nbsp;teal&nbsp;&nbsp;&nbsp;&nbsp;blue<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- gray</span>: 100&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;300&nbsp;&nbsp;&nbsp;&nbsp;400&nbsp;&nbsp;&nbsp;&nbsp;500&nbsp;&nbsp;&nbsp;&nbsp;600&nbsp;&nbsp;&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;&nbsp;800&nbsp;&nbsp;&nbsp;&nbsp;900

#### [background-color]


- background colors


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  bg
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: theme&nbsp;&nbsp;scheme&nbsp;&nbsp;palette&nbsp;&nbsp;gray
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- theme</span>: primary&nbsp;&nbsp;&nbsp;&nbsp;foreground&nbsp;&nbsp;&nbsp;&nbsp;background<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- scheme</span>: info&nbsp;&nbsp;&nbsp;&nbsp;alert&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;warning&nbsp;&nbsp;&nbsp;&nbsp;discrete&nbsp;&nbsp;&nbsp;&nbsp;success<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- palette</span>: yellow&nbsp;&nbsp;&nbsp;&nbsp;orange&nbsp;&nbsp;&nbsp;&nbsp;red&nbsp;&nbsp;&nbsp;&nbsp;magenta&nbsp;&nbsp;&nbsp;&nbsp;purple&nbsp;&nbsp;&nbsp;&nbsp;green&nbsp;&nbsp;&nbsp;&nbsp;teal&nbsp;&nbsp;&nbsp;&nbsp;blue<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- gray</span>: 100&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;300&nbsp;&nbsp;&nbsp;&nbsp;400&nbsp;&nbsp;&nbsp;&nbsp;500&nbsp;&nbsp;&nbsp;&nbsp;600&nbsp;&nbsp;&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;&nbsp;800&nbsp;&nbsp;&nbsp;&nbsp;900

#### [background-themed]


- same as background-color, but with added contrasted color to text


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  bg-themed
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: theme&nbsp;&nbsp;scheme&nbsp;&nbsp;palette&nbsp;&nbsp;gray
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- theme</span>: primary&nbsp;&nbsp;&nbsp;&nbsp;foreground&nbsp;&nbsp;&nbsp;&nbsp;background<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- scheme</span>: info&nbsp;&nbsp;&nbsp;&nbsp;alert&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;warning&nbsp;&nbsp;&nbsp;&nbsp;discrete&nbsp;&nbsp;&nbsp;&nbsp;success<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- palette</span>: yellow&nbsp;&nbsp;&nbsp;&nbsp;orange&nbsp;&nbsp;&nbsp;&nbsp;red&nbsp;&nbsp;&nbsp;&nbsp;magenta&nbsp;&nbsp;&nbsp;&nbsp;purple&nbsp;&nbsp;&nbsp;&nbsp;green&nbsp;&nbsp;&nbsp;&nbsp;teal&nbsp;&nbsp;&nbsp;&nbsp;blue<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- gray</span>: 100&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;300&nbsp;&nbsp;&nbsp;&nbsp;400&nbsp;&nbsp;&nbsp;&nbsp;500&nbsp;&nbsp;&nbsp;&nbsp;600&nbsp;&nbsp;&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;&nbsp;800&nbsp;&nbsp;&nbsp;&nbsp;900

---

#### <strong>module scale</strong>


<br/>

#### [width]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  w

#### [height]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  h
 - <span style='width:80px;display:inline-block;overflow:visible'><b>levels</b></span>:<br>&nbsp;&nbsp;-&nbsp;&nbsp;145 exist&nbsp;&nbsp;and 151<br>&nbsp;&nbsp;-&nbsp;&nbsp;999 exist&nbsp;&nbsp;and 666

---

#### <strong>module text</strong>


<br/>

#### [text-transform]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  text
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: cap&nbsp;&nbsp;up&nbsp;&nbsp;low&nbsp;&nbsp;none&nbsp;&nbsp;full

#### [font-weight]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  text

#### [text-align]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  text
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: l&nbsp;&nbsp;r&nbsp;&nbsp;center&nbsp;&nbsp;justify

#### [text-shadow]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  text-shad
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: 

#### [color]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  text
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>:<br>&nbsp;&nbsp;-&nbsp;&nbsp;info&nbsp;&nbsp;alert&nbsp;&nbsp;error&nbsp;&nbsp;warning&nbsp;&nbsp;discrete&nbsp;&nbsp;success<br>&nbsp;&nbsp;-&nbsp;&nbsp;yellow&nbsp;&nbsp;orange&nbsp;&nbsp;red&nbsp;&nbsp;magenta&nbsp;&nbsp;purple&nbsp;&nbsp;green&nbsp;&nbsp;teal&nbsp;&nbsp;blue<br>&nbsp;&nbsp;-&nbsp;&nbsp;100&nbsp;&nbsp;200&nbsp;&nbsp;300&nbsp;&nbsp;400&nbsp;&nbsp;500&nbsp;&nbsp;600&nbsp;&nbsp;700&nbsp;&nbsp;800&nbsp;&nbsp;900

---

#### <strong>module theme</strong>


<br/>

#### [theme]


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  theme
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: text&nbsp;&nbsp;bg&nbsp;&nbsp;border
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- primary</span>: *&nbsp;&nbsp;&nbsp;&nbsp;light&nbsp;&nbsp;&nbsp;&nbsp;lighter&nbsp;&nbsp;&nbsp;&nbsp;dark&nbsp;&nbsp;&nbsp;&nbsp;darker&nbsp;&nbsp;&nbsp;&nbsp;complement&nbsp;&nbsp;&nbsp;&nbsp;invert<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- secondary</span>: *&nbsp;&nbsp;&nbsp;&nbsp;light&nbsp;&nbsp;&nbsp;&nbsp;lighter&nbsp;&nbsp;&nbsp;&nbsp;dark&nbsp;&nbsp;&nbsp;&nbsp;darker&nbsp;&nbsp;&nbsp;&nbsp;complement&nbsp;&nbsp;&nbsp;&nbsp;invert<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- tertiary</span>: *&nbsp;&nbsp;&nbsp;&nbsp;light&nbsp;&nbsp;&nbsp;&nbsp;lighter&nbsp;&nbsp;&nbsp;&nbsp;dark&nbsp;&nbsp;&nbsp;&nbsp;darker&nbsp;&nbsp;&nbsp;&nbsp;complement&nbsp;&nbsp;&nbsp;&nbsp;invert
