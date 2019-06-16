const assert = require('assert');
const css = require('css');
const parse = require('..');
const { cases } = require('./data');

/**
 * @param {string} inlineStyle
 * @return {Array}
 */
function getDeclarations(inlineStyle) {
  const {
    stylesheet: { rules }
  } = css.parse(`a{${inlineStyle}}`);
  return rules[0].declarations;
}

/**
 * @param {Object[]} declarations
 * @return {Object[]}
 */
function removePosition(declarations) {
  return declarations.map(({ type, property, value }) => ({
    type,
    property,
    value
  }));
}

cases.forEach(inlineStyle => {
  it(`parses \`${inlineStyle}\``, () => {
    assert.deepEqual(
      removePosition(parse(inlineStyle)),
      removePosition(getDeclarations(inlineStyle))
    );
  });
});
