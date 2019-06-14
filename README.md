# npm-package-template

[![NPM](https://nodei.co/npm/npm-package-template.png)](https://nodei.co/npm/npm-package-template/)

[![NPM version](https://img.shields.io/npm/v/npm-package-template.svg)](https://www.npmjs.com/package/npm-package-template)
[![Build Status](https://travis-ci.org/remarkablemark/npm-package-template.svg?branch=master)](https://travis-ci.org/remarkablemark/npm-package-template)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/npm-package-template/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/npm-package-template?branch=master)
[![Dependency status](https://david-dm.org/remarkablemark/npm-package-template.svg)](https://david-dm.org/remarkablemark/npm-package-template)

An npm package template.

## Installation

Git:

```sh
$ git clone https://github.com/remarkablemark/npm-package-template.git
```

Zip:

```sh
$ curl -LO https://github.com/remarkablemark/npm-package-template/archive/master.zip
$ unzip master.zip
$ rm master.zip
```

## Usage

```sh
$ cd npm-package-template
$ npm install
$ rm -rf .git
$ git init
```

## Testing

```sh
$ npm test
$ npm run lint
```

## Release

```sh
$ npm run release
$ git push --follow-tags
```

## License

[MIT](LICENSE)
