import { describe, it } from 'node:test';

import assert from 'assert';

import parse from '../index.js';

describe('index', () => {
  it('exports default function', () => {
    assert.strictEqual(typeof parse, 'function');
  });

  it('parses style', () => {
    assert.deepEqual(parse('a:b'), [
      {
        type: 'declaration',
        property: 'a',
        value: 'b',
        position: {
          start: {
            line: 1,
            column: 1
          },
          end: {
            line: 1,
            column: 4
          },
          source: undefined
        }
      }
    ]);
  });
});
