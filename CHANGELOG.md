# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.4](https://github.com/remarkablemark/inline-style-parser/compare/v0.2.3...v0.2.4) (2024-08-29)


### Continuous Integration

* **github:** publish package to npm registry with provenance ([0b0e756](https://github.com/remarkablemark/inline-style-parser/commit/0b0e756324306750a01bfacfbb53d10a30b76749))

## [0.2.3](https://github.com/remarkablemark/inline-style-parser/compare/v0.2.2...v0.2.3) (2024-03-26)


### Documentation

* **license:** add MIT license ([eca2bed](https://github.com/remarkablemark/inline-style-parser/commit/eca2bed480f89fb6a2e1566b1ec504a8c2b0d9ff)), closes [#124](https://github.com/remarkablemark/inline-style-parser/issues/124)

## [0.2.2](https://github.com/remarkablemark/inline-style-parser/compare/v0.2.1...v0.2.2) (2023-10-15)


### Bug Fixes

* **index:** export types `Declaration` and `Comment` ([5500e24](https://github.com/remarkablemark/inline-style-parser/commit/5500e24ce617c86d661e6e256d44a57f5b5aadb0))

## [0.2.1](https://github.com/remarkablemark/inline-style-parser/compare/v0.2.0...v0.2.1) (2023-10-15)


### Bug Fixes

* **package:** add `index.d.ts` to "files" in package.json ([bac1b29](https://github.com/remarkablemark/inline-style-parser/commit/bac1b29ccb36818204936f7983bf4844094560fc))

## [0.2.0](https://github.com/remarkablemark/inline-style-parser/compare/v0.1.2...v0.2.0) (2023-10-15)


### Features

* **index:** create type declaration file `index.d.ts` ([fc0a669](https://github.com/remarkablemark/inline-style-parser/commit/fc0a669d5c03fddd1687f1d6ff6802da1b0e8852))

## [0.1.2](https://github.com/remarkablemark/inline-style-parser/compare/v0.1.1...v0.1.2) (2023-10-14)


### Build System

* **rollup:** upgrade rollup, replace plugins, and generate sourcemap ([090cfad](https://github.com/remarkablemark/inline-style-parser/commit/090cfad21d89b9da6bbf215301793a8efb182523))

### [0.1.1](https://github.com/remarkablemark/inline-style-parser/compare/v0.1.0...v0.1.1) (2019-06-20)


### Build System

* **package:** fix whitelisting of `/dist` in "files" field ([2c13b2f](https://github.com/remarkablemark/inline-style-parser/commit/2c13b2f))



## 0.1.0 (2019-06-19)


### Bug Fixes

* **index:** do not throw an error if a comment precedes the colon ([7f962ee](https://github.com/remarkablemark/inline-style-parser/commit/7f962ee))


### Build System

* **package:** add `build` and `clean` scripts ([d27a653](https://github.com/remarkablemark/inline-style-parser/commit/d27a653))
* **package:** add script `prepublishOnly` and "files" field ([5fad9ff](https://github.com/remarkablemark/inline-style-parser/commit/5fad9ff))
* **package:** save `css@2.2.4` to devDependencies ([93ad729](https://github.com/remarkablemark/inline-style-parser/commit/93ad729))
* **package:** save devDependencies for `rollup` and its plugins ([872b1fa](https://github.com/remarkablemark/inline-style-parser/commit/872b1fa))
* **package:** set `NODE_ENV=development` in script `build:unmin` ([5a7877b](https://github.com/remarkablemark/inline-style-parser/commit/5a7877b))
* **package:** update `build:min` to generate sourcemap (external) ([c81d66a](https://github.com/remarkablemark/inline-style-parser/commit/c81d66a))
* **rollup:** add `rollup.config.js` ([ac60124](https://github.com/remarkablemark/inline-style-parser/commit/ac60124))


### Features

* clone project from `npm-package-template` ([5976c6f](https://github.com/remarkablemark/inline-style-parser/commit/5976c6f))
* **index:** copy `parse` module from `css` package ([3bf4bee](https://github.com/remarkablemark/inline-style-parser/commit/3bf4bee))
* **index:** parse only declarations and remove all unused code ([a04d918](https://github.com/remarkablemark/inline-style-parser/commit/a04d918))
* **index:** throw error if first argument is not a string ([346ae28](https://github.com/remarkablemark/inline-style-parser/commit/346ae28))


### Tests

* add snapshot for the parsed output of a single declaration ([c2c774c](https://github.com/remarkablemark/inline-style-parser/commit/c2c774c))
* **data:** add more cases for 'content' and 'background-image' ([204c574](https://github.com/remarkablemark/inline-style-parser/commit/204c574))
* **index:** add more misc and one-off test cases ([a08f521](https://github.com/remarkablemark/inline-style-parser/commit/a08f521))
* **index:** check that a comment before colon is parsed correctly ([bf9518c](https://github.com/remarkablemark/inline-style-parser/commit/bf9518c))
* **index:** check that the error message matches ([9169525](https://github.com/remarkablemark/inline-style-parser/commit/9169525))
* add snapshots for the parsed output of multiple declarations ([8708031](https://github.com/remarkablemark/inline-style-parser/commit/8708031))
* **index:** disable placeholder test suite ([20bf8af](https://github.com/remarkablemark/inline-style-parser/commit/20bf8af))
* add cases and compare parser output with `css.parse` output ([361974b](https://github.com/remarkablemark/inline-style-parser/commit/361974b))
* **index:** refactor tests and use `expect` and `it.each` ([dbf2ef0](https://github.com/remarkablemark/inline-style-parser/commit/dbf2ef0))
* organize tests with describe blocks and tidy test names ([5c5fcd4](https://github.com/remarkablemark/inline-style-parser/commit/5c5fcd4))
* replace `mocha` and `nyc` with `jest` ([100311d](https://github.com/remarkablemark/inline-style-parser/commit/100311d))
* **index:** test "End of comment missing" error and silent option ([9f0c832](https://github.com/remarkablemark/inline-style-parser/commit/9f0c832))
* **index:** verify that expected errors are thrown ([d0ed3bd](https://github.com/remarkablemark/inline-style-parser/commit/d0ed3bd))
* **package:** collect coverage from `index.js` only ([bc503b7](https://github.com/remarkablemark/inline-style-parser/commit/bc503b7))
