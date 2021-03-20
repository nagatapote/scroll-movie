const path = require("path");
// for not jsx users
module.exports = {
  mode: "production",
  entry: {
    main: "./src/adaptor/index",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "ScrollMovie",
    libraryExport: "default",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      // {
      //   test: /worker\.ts$/,
      //   use: { loader: 'worker-loader' },
      // },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",

        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
