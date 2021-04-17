const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // ready for next ver
  future: {
    webpack5: true,
  },
  // If you want to configure the Sass compiler
  sassOptions: {
    includePaths: ["scss", "node_modules", "src"].map((d) =>
      path.join(__dirname, d)
    ),
    // prependData: `@use "scss/_vars.scss";`,
  }, 
  webpack: (config, { dev ,isServer }) => {

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },

  /* plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ], */
  /* 
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.scss?$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: "sass-loader",
          options: {
            includePaths: ["scss/*", "node_modules"].map((d) =>
              path.join(__dirname, d)
            ),
          },
        },
      ],
    });

    return config;
  }, */
};
