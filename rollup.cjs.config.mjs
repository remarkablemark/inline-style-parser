import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

/**
 * CommonJS build configuration
 */
export default {
  input: 'index.js',
  output: {
    file: 'cjs/index.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [commonjs(), resolve()]
};
