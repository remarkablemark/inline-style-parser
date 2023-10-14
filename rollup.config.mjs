import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

/**
 * Build rollup config for development or production.
 */
const getConfig = (minify = false) => ({
  input: 'index.js',
  output: {
    file: `dist/inline-style-parser${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'InlineStyleParser',
    sourcemap: true
  },
  plugins: [commonjs(), minify && terser()]
});

const configs = [getConfig(), getConfig(true)];

export default configs;
