const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src/base/nexSkills.js"),
  //entry: path.join(__dirname, 'src/sandbox.js'),
  output: {
    path: path.join(__dirname, "dist"),
    filename: `nexskills.min.js`,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          keep_fnames: true,
          toplevel: false,
          keep_classnames: true,
        },
      }),
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    }),
    new NodePolyfillPlugin(),
  ],
  experiments: {
    topLevelAwait: true, // Enable top-level await for the loadModules function
  },
  externals: {
    react: "React", // Case matters here
    "react-dom": "ReactDOM", // Case matters here
  },
};
