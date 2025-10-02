import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

/**
 * UMD build configuration for development or production.
 */
const getUMDConfig = (minify = false) => ({
  input: 'index.js',
  output: {
    file: `dist/inline-style-parser${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'InlineStyleParser',
    sourcemap: true
  },
  plugins: [commonjs(), resolve(), minify && terser()]
});

const configs = [getUMDConfig(), getUMDConfig(true)];

export default configs;
