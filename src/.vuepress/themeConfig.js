"use strict";

module.exports = {
  /** 头部导航栏的配置 */
  nav: [
    { text: "主页", link: "/" },
    {
      text: "游戏开发",
      items: [
        {
          text: "会议记录",
          items: [
            {
              text: "第一次晚自习",
              link: "/lin/session1",
            },
            {
              text: "第二次晚自习",
              link: "/lin/session2",
            },
            {
              text: "第三次晚自习",
              link: "/lin/session3",
            },
            {
              text: "第四次晚自习",
              link: "/lin/session4",
            },
            {
              text: "第五次晚自习",
              link: "/lin/session5",
            },
            {
              text: "第六次晚自习",
              link: "/lin/session6",
            },
            {
              text: "第七次晚自习",
              link: "/lin/session7",
            },
          ],
        },
      ],
    },
    { text: "任鸿隽教育思想", link: "/lin/rhj1" },
    // { text: 'Markdown介绍', link: '/markdown/', icon: 'markdown' }
  ],

  /** 侧边栏配置 */
  sidebar: "auto",

  /** 侧边栏标题显示深度，0-2 */
  sidebarDepth: 2,

  /** 文档目录 */
  docsDir: "src",

  /** 自定义仓库链接文字 */
  repoLabel: "Github",
};
