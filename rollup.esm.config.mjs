import resolve from '@rollup/plugin-node-resolve';

/**
 * ESM build configuration
 */
export default {
  input: 'index.js',
  output: {
    file: 'esm/index.mjs',
    format: 'es',
    sourcemap: true
  },
  plugins: [resolve()]
};
