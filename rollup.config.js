import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import css from "rollup-plugin-css-only";

const globals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
};

export default {
  input: "src/index.tsx", // our source file
  output: [
    {
      file: "roll/index.js",
      format: "cjs",
      globals: globals
    },
    {
      file: "roll/index-es.js",
      format: "es", // the preferred format
      globals: globals
    },
    {
      file: "roll/index-iife.js",
      format: "iife",
      name: "textera", // the global which can be used in a browser
      globals: globals
    }
  ],
  external: [
    ...Object.keys((pkg.dependencies && pkg.devDependencies) || {}),
    "react",
    "react-dom"
  ],
  plugins: [
    // babel(),
    nodeResolve({
      // jsnext: true,
      // main: true
    }),
    typescript({
      typescript: require("typescript"),
      rollupCommonJSResolveHack: false
    }),
    css({ output: "bundle.css" }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      // include: 'node_modules/**',  // Default: undefined
      //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": [
          "isValidElementType",
          "isContextConsumer"
        ],
        react: "node_modules/react"
      },

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: [".js"], // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false, // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false, // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      //namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      ignore: ["conditional-runtime-dependency"]
    }),

    terser() // minifies generated bundles
  ]
};
