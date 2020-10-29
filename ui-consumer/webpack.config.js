const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = (_, args) => ({
  entry: {
    trivia: {
      import: "./src/Trivia/index.ts",
      filename: "[name].js",
    },
    poll: {
      import: "./src/Poll/index.ts",
      filename: "[name].js",
    },
    main: "./src/index.ts",
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "[name].js",
  //   publicPath: "http://localhost:8081/",
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "consumer",
      filename: "consumerEntry.js",
      remotes: {
        ui: "ui@http://localhost:8080/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
