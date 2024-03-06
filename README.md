# @medyll/cssfabric

@medyll/cssfabric is a ready-to-use CSS utility className.  

## Installation

install @medyll/cssfabric with your preferred package manager
```bash
npm install @medyll/cssfabric
# or
yarn add @medyll/cssfabric
# or whatever
...        
```


## Configuration
### Add `data-theme` attribute to `body`

Add the `data-theme` attribute to the `body` in your main html file:

```html
<body data-theme="dark">
  <!-- Application content -->
</body>
```

The `data-theme` attribute can be set to "dark" or "light" depending on your needs.
### Add imports from @medyll/cssfabric in the main file

Add the following imports in the main file:

```js
# example
import "@medyll/cssfabric/cssfabric.min.css";
# example for svelte
import "@medyll/cssfabric/cssfabric.min.css?inline";
```

### Import your theme definition 

```html
# example for svelte
<style global lang="scss">
  @import "path-to/own-cssfabric-theme.scss";
</style>
```


Example of a scss theme definition:

```scss
// own-cssfabric-theme.scss
@charset "utf-8";

$theme-color-primary: #98B148;
$theme-color-secondary: #55492B;
$theme-color-tertiary: #9999CC;

$theme-dark-color-foreground: #f1f1f1;
$theme-dark-color-background: #27323a;
$theme-dark-color-paper: #3a3b3b;

// Overrides the default values of @medyll/cssfabric's configuration and deliver new `css properties`.
@import "../node_modules/@medyll/cssfabric/src/cssfabric/modules/vars.scss";
```
