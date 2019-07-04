const webpack = require("webpack");
const path = require("path");
const ROOT = __dirname;
const DESTINATION = path.join(ROOT, "/dist");
/** wepback resolve */
const RESOLVE = {
  extensions: [".tsx", ".ts", ".js", ".html"]
};
/** webpack plugins */
const PLUGINS = [new DtsBundlePlugin()];
const MODULE = {
  rules: [
    // Scripts
    {
      test: /\.ts|\.tsx$/,
      exclude: [/node_modules/],
      loader: "awesome-typescript-loader",
      include: __dirname
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
};
const OUTPUT = {
  filename: "index.js",
  libraryTarget: "umd",
  library: "react-crud-master",
  path: DESTINATION
};
module.exports = {
  node: {
    fs: "empty"
  },
  entry: {
    app: ROOT + "/src/index.tsx"
  },
  context: ROOT,
  resolve: RESOLVE,
  mode: "development",
  module: MODULE,
  plugins: PLUGINS,
  devtool: "source-map",
  devServer: {},
  output: OUTPUT
};

function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function(){
    var dts = require('dts-bundle');

    dts.bundle({
      name: "react-crud-master",
      main: 'lib/index.d.ts',
      out: '../dist/index.d.ts',
      removeSource: false,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};
