const cssParse = require('css/lib/parse');
const inlineStyleParser = require('..');
const { cases, errors, snapshots } = require('./data');

/**
 * @param {string} inlineStyle
 * @return {Array}
 */
function getDeclarations(inlineStyle) {
  const {
    stylesheet: { rules }
  } = cssParse(`a{${inlineStyle}}`);
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

// compare with `css.parse` declarations
it.each(cases)('parses "%s"', style => {
  expect(removePosition(inlineStyleParser(style))).toEqual(
    removePosition(getDeclarations(style))
  );
});

// match snapshots
it.each(snapshots)('%s', (_name, style) => {
  expect(inlineStyleParser(style)).toMatchSnapshot();
});

// errors
it.each(errors)('throws error when argument is "%s"', value => {
  expect(() => inlineStyleParser(value)).toThrow();
});

// one-off
it.each`
  style  | expected
  ${':'} | ${[]}
`('parses "%s"', ({ style, expected }) => {
  expect(inlineStyleParser(style)).toEqual(expected);
});
