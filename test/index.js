const assert = require('assert');
const parse = require('..');

describe.skip('inline-style-parser', () => {
  it('returns with placeholder', () => {
    assert.equal(parse(), 'inline-style-parser');
  });
});
