/* globals document */

var pixelGif = require("pixel-gif")

function GifCanvas (url, opts) {
  var self = this
  if (!(self instanceof GifCanvas)) return new GifCanvas(url, opts)

  opts = opts || {}
  opts.fps = opts.fps || 30

  self.canvas = document.createElement('canvas')
  var ctx = self.canvas.getContext('2d')
  
  pixelGif.parse(url).then(function(images){
    self.canvas.width = images[0].width
    self.canvas.height = images[0].height

    var i = 0
    setInterval(function () {
      ctx.putImageData(images[i], 0, 0)
      i = (i + 1) % images.length
    }, 1000 / opts.fps)
  })
}

module.exports = GifCanvas