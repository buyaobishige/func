'use strict';

module.exports = {
  /** 头部导航栏的配置 */
  nav: [
    { text: '主页', link: '/', icon: 'homefill' },
    { text: '烦闷与大学', link: '/lin/rhj1', icon: 'infofill' },
    { text: '科学教育', link: '/lin/rhj2', icon: 'infofill' }
    // { text: 'Markdown介绍', link: '/markdown/', icon: 'markdown' }
  ],

  /** 侧边栏配置 */
  sidebar: 'auto',

  /** 侧边栏标题显示深度，0-2 */
  sidebarDepth: 2,

  /** 文档目录 */
  docsDir: 'src',

  /** 自定义仓库链接文字 */
  repoLabel: 'Github'
};
