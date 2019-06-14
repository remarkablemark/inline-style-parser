const assert = require('assert');
const main = require('..');

describe('npm-package-template', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'npm-package-template');
  });
});
