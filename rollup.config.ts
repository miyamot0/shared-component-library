import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';

import * as packageJson from './package.json';

import typescript from 'rollup-plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [external(), resolve(), typescript(), commonjs(), postcss(), terser()],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/u],
  },
];
