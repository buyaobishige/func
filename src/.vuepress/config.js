/* eslint-disable strict */
module.exports = {
  base: "/func/",
  title: "功能部",
  description: "基于Vuepress的功能部博客",
  dest: "dist",
  themeConfig: require("./themeConfig"),
  extraWatchFiles: [".vuepress/themeConfig.js"],
  markdown: { linenumber: true },
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "author", content: "func" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  plugins: [
    ["@vuepress/back-to-top"],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require("moment");

          moment.locale(lang);

          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        /** 默认图片选择器 */
        options: {
          /** 缩放后图片的外间距 */
          margin: 20,
          /** 缩放背景 */
          background: "silver",
          /** 关闭缩放需要滚动的像素数 */
          scrollOffset: 40,
        },
      },
    ],
  ],
};
