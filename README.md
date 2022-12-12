# svg2pdf-cli

[![Build Status](https://github.com/vowstar/svg2pdf-cli/actions/workflows/test.yml/badge.svg)](https://github.com/vowstar/vowstar/svg2pdf-cli/actions)
[![Coverage Status](https://coveralls.io/repos/github/vowstar/svg2pdf-cli/badge.svg?branch=master)](https://coveralls.io/github/vowstar/svg2pdf-cli?branch=master)
[![NPM Version](https://img.shields.io/npm/v/svg2pdf-cli.svg?style=flat)](https://www.npmjs.org/package/svg2pdf-cli)
[![Dependencies Status](https://david-dm.org/vowstar/svg2pdf-cli/status.svg)](https://david-dm.org/vowstar/svg2pdf-cli/)
[![DevDependencies Status](https://david-dm.org/vowstar/svg2pdf-cli/dev-status.svg)](https://david-dm.org/vowstar/svg2pdf-cli/#info=devDependencies)
[![NPM Downloads](https://img.shields.io/npm/dm/svg2pdf-cli.svg?style=flat)](https://www.npmjs.org/package/svg2pdf-cli)

A command-line tool for convert SVG image to PDF file

## Installation

svg2pdf-cli can be installed from NPM using:

```bash
npm install -g svg2pdf-cli
```

NOTE: libgbm required

```bash
sudo apt-get update
sudo apt-get install -y libgbm-dev
```

## Features

* Support HTML, SVG file input
* Support set SVG size (width and height), NOTE: This option only can change the svg image size on the PDF page, but can't set PDF page size.
* Support PDF file output

Because svg2pdf using Chromium to render the svg, and it only support these format:

Format  |       size
------- | ----------------
Letter  | 8.5in x 11in
Legal   | 8.5in x 14in
Tabloid | 11in x 17in
Ledger  | 17in x 11in
A0      | 33.1in x 46.8in
A1      | 23.4in x 33.1in
A2      | 16.54in x 23.4in
A3      | 11.7in x 16.54in
A4      | 8.27in x 11.7in
A5      | 5.83in x 8.27in
A6      | 4.13in x 5.83in

## Useage

```bash
Usage: svg2pdf <source> <destination>
e.g.: svg2pdf source.svg destination.pdf
e.g.: svg2pdf -w 100% source.svg destination.pdf
e.g.: svg2pdf -w 100px -h 100px source.svg destination.pdf
e.g.: svg2pdf -w 100px -h 100px -f A4 source.svg destination.pdf
```
