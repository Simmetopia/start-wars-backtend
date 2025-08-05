// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';

export default {
  input: 'src/server.ts',                             // Your entry point
  output: {
    file: 'dist/server.js',
    format: 'esm',                                    // Use 'cjs' if you prefer CommonJS :contentReference[oaicite:10]{index=10}
    sourcemap: true,
  },
  external: [],                                       // Leave empty if using externals plugin
  plugins: [
    externals(),                                      // Auto-externalize node_modules & built-ins
    resolve({ preferBuiltins: true }),                // Locate modules
    commonjs(),                                       // Convert CJS ➜ ESM
    typescript({ tsconfig: './tsconfig.json' }),      // Compile TS
  ],
};
