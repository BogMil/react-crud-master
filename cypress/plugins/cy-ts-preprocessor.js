const wp = require("@cypress/webpack-preprocessor");
const path = require("path");

const webpackOptions = {
  entry: "../../src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "disto")
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};

const options = {
  webpackOptions
};

module.exports = wp(options);
