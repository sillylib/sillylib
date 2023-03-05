const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const tsConfig = {
  tsconfig: path.resolve('./tsconfig.json'),
  compilerOptions: { rootDir: './src', noEmit: false },
  exclude: ['node_modules'],
  outputToFilesystem: true,
};

const externalDeps = ['react', 'react-dom'];

module.exports = [
  {
    input: path.resolve('./src/index.ts'),
    output: { dir: path.resolve('./dist'), format: 'cjs', sourcemap: true },
    external: externalDeps,
    plugins: [
      typescript({
        ...tsConfig,
        compilerOptions: {
          ...tsConfig.compilerOptions,
          outDir: path.resolve('./dist'),
        },
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
];
