const { i18 } = require("./next-i18next.config");
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["ar", "en-US"],
    defaultLocale: "ar",
    localeDetection: false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
