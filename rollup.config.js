import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const config = {
  input: 'index.js',
  output: {
    format: 'umd',
    name: 'InlineStyleParser'
  },
  plugins: [commonjs()]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify());
}

export default config;
