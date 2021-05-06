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
box | cssfabric box module to set heights, paddings, margins and shadows on all html elements
color | cssfabric color system: its about colors
grid | cssfabric flex grid system module
menu | cssfabric menu module to set menu style
overflow | cssfabric overflow module to set overflow styles on all html elements
scale | cssfabric scale module to set dimensions and ratios on all html elements
table | cssfabric table module to set different table styles
text | cssfabric text module to set text style on all html elements
theme | 
zindex | cssfabric zindex module to set z-index on all html elements |


<br/>




<br/>

### More details

---

#### <strong>module box</strong>


<br/>

#### [padding]


- padding properties for html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  pad
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: t&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;&nbsp;l&nbsp;&nbsp;&nbsp;&nbsp;r&nbsp;&nbsp;&nbsp;&nbsp;all&nbsp;&nbsp;&nbsp;&nbsp;u&nbsp;&nbsp;&nbsp;&nbsp;ii&nbsp;&nbsp;&nbsp;&nbsp;tb
 - <span style='width:80px;display:inline-block;overflow:visible'><b>levels</b></span>: 1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8

#### [margin]


- margin properties for html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  marg
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: t&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;&nbsp;l&nbsp;&nbsp;&nbsp;&nbsp;r&nbsp;&nbsp;&nbsp;&nbsp;all&nbsp;&nbsp;&nbsp;&nbsp;u&nbsp;&nbsp;&nbsp;&nbsp;ii&nbsp;&nbsp;&nbsp;&nbsp;tb
 - <span style='width:80px;display:inline-block;overflow:visible'><b>levels</b></span>: 1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8

#### [border]


- border properties for html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  border
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: t&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;&nbsp;l&nbsp;&nbsp;&nbsp;&nbsp;r&nbsp;&nbsp;&nbsp;&nbsp;all&nbsp;&nbsp;&nbsp;&nbsp;u&nbsp;&nbsp;&nbsp;&nbsp;ii&nbsp;&nbsp;&nbsp;&nbsp;tb
 - <span style='width:80px;display:inline-block;overflow:visible'><b>levels</b></span>: 1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5

#### [shadow]


- applying shadows give depth and levels to your design


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  shad
 - <span style='width:80px;display:inline-block;overflow:visible'><b>levels</b></span>: 2&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;&nbsp;&nbsp;64&nbsp;&nbsp;&nbsp;&nbsp;128&nbsp;&nbsp;&nbsp;&nbsp;256

---

#### <strong>module color</strong>


<br/>

#### [color]


- color for text level html elements


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  color
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: theme&nbsp;&nbsp;&nbsp;&nbsp;scheme&nbsp;&nbsp;&nbsp;&nbsp;palette&nbsp;&nbsp;&nbsp;&nbsp;gray
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- theme</span>: primary&nbsp;&nbsp;&nbsp;&nbsp;foreground&nbsp;&nbsp;&nbsp;&nbsp;background<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- scheme</span>: info&nbsp;&nbsp;&nbsp;&nbsp;alert&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;warning&nbsp;&nbsp;&nbsp;&nbsp;discrete&nbsp;&nbsp;&nbsp;&nbsp;success<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- palette</span>: yellow&nbsp;&nbsp;&nbsp;&nbsp;orange&nbsp;&nbsp;&nbsp;&nbsp;red&nbsp;&nbsp;&nbsp;&nbsp;magenta&nbsp;&nbsp;&nbsp;&nbsp;purple&nbsp;&nbsp;&nbsp;&nbsp;green&nbsp;&nbsp;&nbsp;&nbsp;teal&nbsp;&nbsp;&nbsp;&nbsp;blue<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- gray</span>: 100&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;300&nbsp;&nbsp;&nbsp;&nbsp;400&nbsp;&nbsp;&nbsp;&nbsp;500&nbsp;&nbsp;&nbsp;&nbsp;600&nbsp;&nbsp;&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;&nbsp;800&nbsp;&nbsp;&nbsp;&nbsp;900

#### [background-color]


- background colors


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  bg
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: theme&nbsp;&nbsp;&nbsp;&nbsp;scheme&nbsp;&nbsp;&nbsp;&nbsp;palette&nbsp;&nbsp;&nbsp;&nbsp;gray
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- theme</span>: primary&nbsp;&nbsp;&nbsp;&nbsp;foreground&nbsp;&nbsp;&nbsp;&nbsp;background<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- scheme</span>: info&nbsp;&nbsp;&nbsp;&nbsp;alert&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;warning&nbsp;&nbsp;&nbsp;&nbsp;discrete&nbsp;&nbsp;&nbsp;&nbsp;success<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- palette</span>: yellow&nbsp;&nbsp;&nbsp;&nbsp;orange&nbsp;&nbsp;&nbsp;&nbsp;red&nbsp;&nbsp;&nbsp;&nbsp;magenta&nbsp;&nbsp;&nbsp;&nbsp;purple&nbsp;&nbsp;&nbsp;&nbsp;green&nbsp;&nbsp;&nbsp;&nbsp;teal&nbsp;&nbsp;&nbsp;&nbsp;blue<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- gray</span>: 100&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;300&nbsp;&nbsp;&nbsp;&nbsp;400&nbsp;&nbsp;&nbsp;&nbsp;500&nbsp;&nbsp;&nbsp;&nbsp;600&nbsp;&nbsp;&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;&nbsp;800&nbsp;&nbsp;&nbsp;&nbsp;900

#### [background-themed]


- same as background-color, but with added contrasted color to text


 - <span style='width:80px;display:inline-block;overflow:visible'><b>shorthand</b></span>:  bg-themed
 - <span style='width:80px;display:inline-block;overflow:visible'><b>keys</b></span>: theme&nbsp;&nbsp;&nbsp;&nbsp;scheme&nbsp;&nbsp;&nbsp;&nbsp;palette&nbsp;&nbsp;&nbsp;&nbsp;gray
 - <span style='width:80px;display:inline-block;overflow:visible'><b>level keys</b></span>:<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- theme</span>: primary&nbsp;&nbsp;&nbsp;&nbsp;foreground&nbsp;&nbsp;&nbsp;&nbsp;background<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- scheme</span>: info&nbsp;&nbsp;&nbsp;&nbsp;alert&nbsp;&nbsp;&nbsp;&nbsp;error&nbsp;&nbsp;&nbsp;&nbsp;warning&nbsp;&nbsp;&nbsp;&nbsp;discrete&nbsp;&nbsp;&nbsp;&nbsp;success<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- palette</span>: yellow&nbsp;&nbsp;&nbsp;&nbsp;orange&nbsp;&nbsp;&nbsp;&nbsp;red&nbsp;&nbsp;&nbsp;&nbsp;magenta&nbsp;&nbsp;&nbsp;&nbsp;purple&nbsp;&nbsp;&nbsp;&nbsp;green&nbsp;&nbsp;&nbsp;&nbsp;teal&nbsp;&nbsp;&nbsp;&nbsp;blue<br/><span style='margin-left:20px;width:80px;display:inline-block;overflow:visible'>- gray</span>: 100&nbsp;&nbsp;&nbsp;&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;300&nbsp;&nbsp;&nbsp;&nbsp;400&nbsp;&nbsp;&nbsp;&nbsp;500&nbsp;&nbsp;&nbsp;&nbsp;600&nbsp;&nbsp;&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;&nbsp;800&nbsp;&nbsp;&nbsp;&nbsp;900
