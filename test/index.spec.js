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
  it.each(cases)('correctly parses "%s"', (style) => {
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
  it.each(errors)('throws when argument is `%s`', (value, message) => {
    expect(() => inlineStyleParser(value)).toThrow(message);
  });
});

// one-off
describe('misc', () => {
  describe.each`
    style  | options             | expected
    ${':'} | ${undefined}        | ${[]}
    ${'a'} | ${{ silent: true }} | ${[]}
  `(
    'when style="$style" and options=`$options`',
    ({ style, options, expected }) => {
      it(`returns expected output \`${JSON.stringify(expected)}\``, () => {
        expect(inlineStyleParser(style, options)).toEqual(expected);
      });
    }
  );
});
