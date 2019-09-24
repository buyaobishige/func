---
home: true
heroImage: /favicon.jpg
actionText: Get Started →
actionLink: /lin/jsbasic.md
features:
  - title: 我们是谁？
    details: 我们是功能部，我们要做功能
footer: 2019|青春遇见梦想
---

# 第四周工作简报

1. [w3c 的 html 教程](https://www.w3cschool.cn/html/html-basic.html)大家本周仔细看一遍此教程，**标签不要求识记**，但要搞清楚标签的开始、闭合结构，标签的属性等基本概念

2. 复习[菜鸟教程的 css 部分](https://www.runoob.com/css/css-tutorial.html)有关章节

3. 学习[菜鸟教程的 js 部分](https://www.runoob.com/js/js-tutorial.html)，重点学习课上讲的五个要点

4.作业：仿制[作业网站](https://lin.nenuyouth.com)中的作业

## HTML 提要

### HTML 属性

- HTML 元素可以设置**属性**
- 属性可以在元素中添加**附加信息**
- 属性一般描述于**开始标签**
- 属性总是以名称/值对的形式出现，**比如：name="value"**。

---

### 属性实例

HTML 链接由 `<a>` 标签定义。链接的地址在 **href 属性**中指定：

实例:

```html
<a href="http://www.w3cschool.cn">这是一个链接</a>
```

### HTML 属性参考手册

查看完整的 HTML 属性列表: [HTML 标签参考手册](https://www.w3cschool.cn/htmltags/html-reference.html)。

下面列出了适用于大多数 HTML 元素的属性：

| 属性  |                              描述                               |
| :---: | :-------------------------------------------------------------: |
| class | 为 html 元素定义一个或多个类名（classname）(类名从样式文件引入) |
|  id   |                        定义元素的唯一 id                        |
| style |               规定元素的行内样式（inline style）                |
| title |              描述了元素的额外信息 (作为工具条使用)              |

## CSS 提要

### 声明样式的方法

### 内联样式

当特殊的样式需要**应用到个别元素**时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。以下实例显示出如何改变段落的颜色和左外边距。

```html
<p style="color:blue;margin-left:20px;">This is a paragraph.</p>
<!-- margin-left表示左边距 -->
```

HTML 样式实例 - 背景颜色
背景色属性（background-color）定义一个元素的背景颜色：

```html
<!DOCTYPE html>
<html>
  <body style="background-color:yellow;">
    <h2 style="background-color:red;">This is a heading</h2>
    <p style="background-color:green;">This is a paragraph.</p>
  </body>
</html>
```

### 内部样式表

当单个文件需要特别样式时，就可以使用内部样式表。你可以在`<head>` 部分通过 `<style>`标签定义内部样式表:

```html
<head>
  <style type="text/css">
    body {
      background-color: yellow;
    }
    p {
      color: blue;
    }
  </style>
</head>
```

### id 选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

HTML 元素以 id 属性来设置 id 选择器,CSS 中 id 选择器以 "#" 来定义。

以下的样式规则应用于元素属性 id="para1":

```css
#para1 {
  text-align: center;
  color: red;
}
```

### class 选择器

class 选择器用于描述一组元素的样式，class 选择器有别于 id 选择器，class 可以在多个元素中使用。**类名的第一个字符不能使用数字！**

class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以一个点"."号显示：

在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。

```css
.center {
  text-align: center;
}
```

你也可以指定特定的 HTML 元素使用 class。

在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中:

```css
p.center {
  text-align: center;
}
```

### 颜色

CSS 中，颜色值通常以以下方式定义:

- 十六进制 - 如："#ff0000"

- RGB - 如："rgb(255,0,0)"

- 颜色名称 - 如："red"

## JS 提要

[JS 文档](./lin/jsbasic.md)
