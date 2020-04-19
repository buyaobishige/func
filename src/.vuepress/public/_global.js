"use strict";

function valine() {
  const Valine = require("valine");
  if (typeof window !== "undefined") {
    this.window = window;
    window.AV = require("leancloud-storage");
  }
  new Valine({
    el: "#vcomments",
    appId: "FVKty4KWiFq07tiSWQ2Tw0ul-gzGzoHsz", // your appId
    appKey: "P0qs5IyQBvBI9fGdrw6CS5qd", // your appKey
    placeholder: "欢迎留下你的评论！",
    visitor: true,
  });
}
