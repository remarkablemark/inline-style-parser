const css = require('css');
const inlineStyleParser = require('..');
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

it.each(cases)('parses `%s`', style => {
  expect(removePosition(inlineStyleParser(style))).toEqual(
    removePosition(getDeclarations(style))
  );
});
