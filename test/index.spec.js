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

// compare output with `css.parse` declarations
describe('when compared to `css.parse`', () => {
  it.each(cases)('correctly parses "%s"', style => {
    expect(removePosition(inlineStyleParser(style))).toEqual(
      removePosition(getDeclarations(style))
    );
  });
});

// match snapshots
describe('inline-style-parser', () => {
  it.each(snapshots)('%s', (_name, style) => {
    expect(inlineStyleParser(style)).toMatchSnapshot();
  });
});

// errors
describe('error', () => {
  it.each(errors)('throws when argument is "%s"', value => {
    expect(() => inlineStyleParser(value)).toThrow();
  });
});

// one-off
describe('misc', () => {
  it.each`
    style  | expected
    ${':'} | ${[]}
  `('correctly parses "$style"', ({ style, expected }) => {
    expect(inlineStyleParser(style)).toEqual(expected);
  });
});
