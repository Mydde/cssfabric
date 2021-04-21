const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // ready for webpack5 next ver
  future: {
    webpack5: true,
  },
  // If you want to configure the Sass compiler
  sassOptions: {
    includePaths: ["css-fabric", "node_modules", "src"].map((d) =>
      path.join(__dirname, d)
    ),
    prependData: '$env: ' + process.env.NODE_ENV + ';$CSS_FABRIC_PATH: ' + process.env.CSS_FABRIC_PATH + ';'
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.fsevents = false;
    } 

    return config;
  }
};
