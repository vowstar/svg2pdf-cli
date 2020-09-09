#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const argv = require('yargs')
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
  .argv;

if (argv._.length >= 2) {
  svgFile = argv._[0];
  pdfFile = argv._[1];
  htmlFile = path.resolve(path.join(path.dirname(svgFile), '.' + path.basename(svgFile) + '.html'));
  try {
    var content;
    var widthStr;
    var heightStr;

    if (argv.w) {
      widthStr = 'width="' + argv.w + '"';
    } else {
      widthStr = 'width=100%"';
    }
    if (argv.h) {
      heightStr = 'height="' + argv.h + '"';
    } else {
      heightStr = '';
    }

    var svgCode = fs.readFileSync(svgFile, 'utf8');
    var svgBase64 = new Buffer.from(svgCode).toString('base64');

    content = '<img ' + widthStr + ' ' + heightStr + ' src="data:image/svg+xml;base64,' + svgBase64 + '" />';
    svg2pdf(content, pdfFile);
  } catch (e) {
    console.log(e);
  }
}

function svg2pdf(source, destination) {
  var html = source;

  (async () => {
    const browser = await puppeteer.launch({
      args: ['--disable-dev-shm-usage', '--no-sandbox', '--allow-file-access-from-files', '--enable-local-file-accesses']
    });
    const page = await browser.newPage();

    try {
      if (fs.existsSync(source)) {
        const htmlFile = path.resolve(source);
        await page.goto("file://" + htmlFile, { waitUntil: 'networkidle2'});
      } else {
        await page.setContent(html, {waitUntil: 'networkidle0'});
      }
    } catch(err) {
      console.error(err)
    }

    await page.pdf({path: destination, format: 'Letter'});

    await browser.close();
  })();
}