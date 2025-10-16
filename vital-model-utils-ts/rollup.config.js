import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.build.json',
        useTsconfigDeclarationDir: true
      }),
      production && terser()
    ].filter(Boolean),
    external: ['fs', 'path', 'stream', 'util']
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto'
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.build.json',
        useTsconfigDeclarationDir: true
      }),
      production && terser()
    ].filter(Boolean),
    external: ['fs', 'path', 'stream', 'util']
  },
  // CLI build
  {
    input: 'src/cli.ts',
    output: {
      file: 'dist/cli.js',
      format: 'cjs',
      sourcemap: true,
      banner: '#!/usr/bin/env node'
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.build.json'
      }),
      production && terser()
    ].filter(Boolean),
    external: ['fs', 'path', 'stream', 'util', 'commander', 'handlebars']
  }
];
