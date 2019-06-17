const cases = [
  // general
  'display: inline-block;',
  'color:red;',
  'margin: 0 auto;',
  'border: 5px solid #BADA55;',
  'font-size: .75em; position:absolute;width: 33.3%; z-index:1337;',
  'font-family: "Goudy Bookletter 1911", Gill Sans Extrabold, sans-serif;',

  // multiple of same property
  'color:rgba(0,0,0,1);color:white;',

  // missing semicolon
  'line-height: 42',
  'font-style:italic; text-transform:uppercase',

  // extra whitespace
  ' padding-bottom : 1px',
  'padding:   12px  0 ',
  `
    -moz-border-radius: 10px 5px;
    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 10px;
    -webkit-border-bottom-left-radius: 5px;
    border-radius: 10px 5px;
  `,

  // text and url
  'content: "Lorem ipsum";',
  'background-image: url(http://example.com/img.png)',

  // vendor prefixes
  'background: -webkit-linear-gradient(90deg, black, #111)',
  '-webkit-transition: all 4s ease; -moz-transition: all 4s ease; -ms-transition: all 4s ease; -o-transition: all 4s ease; transition: all 4s ease;',

  // comment
  '/* comment */',
  'top: 0; /* comment */ bottom: 42rem;',
  ` right: 0; /* comment */
  /* comment */   left: 42rem; `,

  // custom
  'foo: bar;',
  'foo:bar; baz:qux',

  // misc
  '',
  'overflow:'
];

const snapshots = [
  // `css.parse` throws an error when a comment precedes the colon (bug)
  [
    'correctly parses when comment precedes colon',
    'text-align/**/ /*:*/ : /*:*//**/ center'
  ],

  ['correctly parses single declaration', 'background-color: #C0FFEE;'],

  [
    'correctly parses multiple declarations',
    `
      background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
      content  :  " "  ; /* comment */
      foo:bar;-o-transition:all .5s
    `
  ]
];

const errors = [
  ...[
    undefined,
    null,
    true,
    false,
    0,
    1,
    {},
    ['Array'],
    new Date(),
    () => Function
  ].map(value => [value, 'First argument must be a string']),
  ['overflow', /property missing ':'$/],
  ['/*', /End of comment missing$/]
];

module.exports = {
  cases,
  errors,
  snapshots
};
