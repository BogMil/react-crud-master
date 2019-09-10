const webpack = require("webpack");
const path = require("path");
const ROOT = __dirname;
const DESTINATION = path.join(ROOT, "/dist");
/** wepback resolve */
const RESOLVE = {
  extensions: [".tsx", ".ts", ".js", ".html"],
  alias: {
    react: path.resolve(__dirname, "./node_modules/react"),
    "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
  }
};
/** webpack plugins */
const PLUGINS = [new DtsBundlePlugin()];
const MODULE = {
  rules: [
    {
      test: /\.ts|\.tsx$/,
      exclude: [/node_modules/],
      // loader: "awesome-typescript-loader",
      use: "ts-loader",
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
  output: OUTPUT,
  externals: {
    // Don't bundle react or react-dom
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  }
};

function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin("done", function() {
    var dts = require("dts-bundle");

    dts.bundle({
      name: "react-crud-master",
      main: "lib/index.d.ts",
      out: "../dist/index.d.ts",
      removeSource: false,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};
