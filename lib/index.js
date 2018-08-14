var pdf = require('html-pdf')

module.exports = {
  create: function createSVG (svg, options, callback) {
    if (arguments.length === 1) {
      return pdf.create(svg)
    } else if (arguments.length === 2) {
      return pdf.create(svg, options)
    } else if (arguments.length === 3) {
        return pdf.create(svg, options, callback)
    }
  }
}