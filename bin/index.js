#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var pdf = require('html-pdf')
var argv = require('optimist')
  .usage(
    'Usage: svg2pdf <source> <destination>\n' +
    'e.g.: svg2pdf source.svg destination.pdf\n' +
    'e.g.: svg2pdf -w 100% source.svg destination.pdf\n' +
    'e.g.: svg2pdf -w 100px -h 100px source.svg destination.pdf')
  .demand(2)
  .alias('w', 'width')
  .describe('w', 'Set width of PDF, allowed units: %, px')
  .alias('h', 'height')
  .describe('h', 'Set height of PDF, allowed units: %, px')
  .argv

if (argv._.length >= 2) {
  svgFile = argv._[0]
  pdfFile = argv._[1]
  htmlFile = path.resolve(path.join(path.dirname(svgFile), '.' + path.basename(svgFile)+'.html'))
  try {
    var content;
    var widthStr;
    var heightStr;
    if (argv.w) {
      widthStr = 'width="' + argv.w + '"'
    } else {
      widthStr = 'width=100%"' + argv.w + '"'
    }
    if (argv.h) {
      heightStr = 'height="' + argv.h + '"'
    } else {
      heightStr = ''
    }
    content = '<img ' + widthStr + ' ' + heightStr + ' src="kpu_01.svg"></img>';
    fs.writeFileSync(htmlFile, content, { encoding: 'utf8' });
    svg2pdf(htmlFile, pdfFile)
    fs.unlinkSync(htmlFile)
  } catch (e) {
      console.log(e);
  }
}

function svg2pdf(source, destination) {
  var html = fs.readFileSync(source, 'utf8')
  var options = {
    base: 'file://' + path.resolve(source)
  }
  pdf.create(html, options).toFile(destination, function (err, res) {
    if (err) throw err
  })
}