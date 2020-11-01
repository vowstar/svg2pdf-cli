# svg2pdf-cli

[![Build Status](https://img.shields.io/travis/vowstar/svg2pdf-cli/master.svg?style=flat)](https://travis-ci.org/vowstar/svg2pdf-cli)
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
* Support set SVG size (width and height)
* Support PDF file output

## Useage

```bash
Usage: svg2pdf <source> <destination>
e.g.: svg2pdf source.svg destination.pdf
e.g.: svg2pdf -w 100% source.svg destination.pdf
e.g.: svg2pdf -w 100px -h 100px source.svg destination.pdf
e.g.: svg2pdf -w 100px -h 100px -f A4 source.svg destination.pdf
```
