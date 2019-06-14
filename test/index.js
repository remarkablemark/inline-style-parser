const assert = require('assert');
const main = require('..');

describe('inline-style-parser', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'inline-style-parser');
  });
});
