import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  plugins: [
    babel({
      exclude: 'node_modules/**/*',
    }),
    nodeResolve(),
  ],
  input: 'src/index.mjs',
  output: {
    format: 'umd',
    name: 'selektr',
  },
}
