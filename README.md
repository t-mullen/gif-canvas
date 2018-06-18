# gif-canvas

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Easily draw GIFs to canvas!

## Install
```
npm install --save gif-canvas
```
or
```html
<script src="dist/gif-canvas.js"></script>
```

## Usage
```javascript
var gc = GifCanvas('/my.gif', {
  fps: 30
})
gc.canvas // Gif is automagically drawn here!
```

## Thanks
This module is a wrapper around [pixel-gif](https://github.com/59naga/pixel-gif-).