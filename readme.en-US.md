# Personal Blog

[![Author: Mr.Hope](https://img.shields.io/badge/Author-Mr.Hope-blue.svg)](https://mrhope.nenuyouth.com)
[![Demo Address](https://img.shields.io/badge/Demo-Visit-blue.svg)](https://vuepress-example.netlify.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6f56c571-a5aa-41d2-a93d-2b83d0f70ea7/deploy-status)](https://app.netlify.com/sites/vuepress-example/deploys)

## Folder Description

### src folder

The **source code** is placed in the `src` directory, in which all **markdown** files are rendered into **HTML**. That is the time when **readme.md** is rendered into **index.html**. In addition, Vuepress's configuration files are all placed in the `src/.vuepress` directory.

### dist folder

The built code will be **output** to the **dist** directory, just upload it to the server you need to deploy.

If you use an automated build tool, you **DONOT** need to perform the build locally after you turn on automatic deployment.。

### package.json

Node.js declaration file for the entire project, it is a file that must be included in the Node project. Contains information such as **project name**, **details**, **license**, and **packages** being used.

### readme.md

Project documentation on Github.

### Others

File that do not need to be understand at the beginning:

| Files             | Content                                                        |
| ----------------- | -------------------------------------------------------------- |
| node_modules      | Stored the package used by the project                         |
| LICENSE           | Project license document                                       |
| package-lock.json | The structure of the package actually installed by the project |
| .eslintignore     | Files ignored by ESLint                                        |
| .eslintrc.js      | ESLint rule configuration file                                 |
| .nvmrc            | Node version declaration file of the environment               |

> ESLint is a JS code linter.
>
> Beginners can use it in learning to reduce their own mistakes and develop a standardized code style. But you don't need to know the specific configuration method and working principle.

### .vuepress

The `.vuepress` folder should be placed directly in the source code directory. It contains the configuration options for Vuepress.

#### config.js

The configuration file for the project. For specific configuration instructions, please open the file to view the comments.

> For more details, please view[Vuepress Config](https://v1.vuepress.vuejs.org/config/)

#### public folder

A folder where other files on the site being placed. The files in the folder will be copied directly to the built directory when you build. Its content are usually resources that do not need to be imported using relative paths, such as icons for websites.

#### style folder

The style of the entire site is placed, where `index.styl` is the style file for the extra expansion of the entire site, and `palette.styl` is the color configuration of the entire site.

> Styl is a extend of CSS that extends and changes the way CSS is written, and variables can be used derectly. Beginners do not need to master.

File that do not need to be understand at the beginning:

| Forlder     | Content                                             |
| ----------- | --------------------------------------------------- |
| compoenents | Placed the Vue component in the Vuepress site       |
| theme       | Placed the theme of the Vuepress site               |
| templates   | Placed the template and layout of the Vuepress site |

## Plugins

- active-header-links: A plugin of automatically activating sidebar links when page scrolls
- back-to-top: Add the Back-to-top button
- google-analytics：Add Google analytics
- last-updated: Update last edit time
- medium-zoom: Picture Zoom
- nprogress: progressbar based on nprogress
- PWA: Support Progressive Web App
- register-component: register components
- search: Headers-based search plugin

> More configuration, please view[Vuepress Plugins](https://v1.vuepress.vuejs.org/plugin/)

## Orders

### Install Dependence

```bash
npm install
```

或

```bash
npm i
```

### Update Dependence

```bash
npm update
```

### Start Dev

Open local develope environment, please visit[localhost:8080](http://localhost:8080)。

```bash
npm run serve
```

### Build project

Generate the files that will eventually be deployed to the server.

```bash
npm run build
```

## Cases

- Case 1

  [Blog Address](http://dong4j.info/)
  [Source Code](https://github.com/dong4j/blog-resources)

- Case 2

  [Blog Address](https://davidangel.net/)
  [Source Code](https://github.com/davidangel/davidangel-vuepress)

- Case 3
  
  [Vue gallexy](https://vuepress.gallery/)
