const path = require("path");
module.exports = {
    i18n: {
      defaultLocale: 'en-US',
      locales: ['ar-SA', 'de', 'en-US', 'ms-SG', 'mt'],
      localeDetection: false,
      localePath: path.resolve("./public/locales"),
    },
  };
