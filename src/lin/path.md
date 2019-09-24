# 路径

无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在Windows中还是在Linux中，文件的具体位置都用文档的路径标注。

访问一个一个文件夹/文件只包含自身的路径信息。

一般来说表示文件在电脑中位置的方式就有以上四种，在网页设计中常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。

## 物理路径

物理路径的英文全称是：Physical path，它就是指硬盘上文件的路径，比如下面的文件位置表示方法：

```text
d:\wwwroot\html\a.html
d:\wwwroot\html\photo\b.html
d:\wwwroot\html\photo\c.html
d:\wwwroot\html\photo\ours\d.html
```

> `D:`与`d:`均可。盘符不分大小写。

一般来说物理路径可用于Access数据库或者不通过WEB服务器(如：本地调试)等的情况下。

## 相对路径

相对路径的英文全称是Relative Path，我们可以从以下三个方面来了解它的用法(以“物理路径”中的位置情况为例)：  

- 如何表示同级目录的文件

   b.html和c.html在同一个文件夹下，如果b.html需要链接到c.html，可以在b.html中这样写：

   ```html
   <a href="./c.html">同目录下文件间互相链接</a>
   ```

  代码中的 `./` 代表一级上级目录(间隔一个目录)。
  
  `./`是相对路径，也可以省略不写，省略不写，即直接以文件夹或文件名称开头的路径也是相对路径。

  ```html
  <a href="./c.html">同目录下文件间互相链接</a>
  ```

- 如何表示上级目录的文件

  a.html是b.html和c.html的上级目录中的文件，如果b.html或c.html链接到a.html，可以在b.html或c.html中这样写：
  
  ```html
  <a href="../a.html">链接到上级目录中的文件</a>
  ```

  代码中的 `../` 代表一级上级目录(间隔一个目录)。
  需要注意的是：“`../../`”代表二级上级目录(间隔两个目录)，比如a.html是d.html的前两级目录，同时d.html需要链接到a.html，可以在d.html中这样写：

  ```html
  <a href="../../a.html">链接到上级目录的上级目录中的文件</a>
  ```

- 如何表示下级目录的文件

  b.html和c.html是a.html的下级目录中的文件，如果需要在a.html中链接到b.html， 可以在a.html中这样写：

  ```html
  <a href="photo/b.html">链接到下级目录(photo)中的文件</a>
  如果需要在a.html中链接到d.html，可以在a.html中这样写
  <a href="photo/ours/d.html">链接到下级目录(photo/ourd/)中的文件</a>
  ```

## 绝对路径

绝对路径的英文全称是Absolute Path，它就是带有网址的路径。比如你有一个域名www.deerol.com，其域名指向d:\wwwroot，那么上面的四个文件就可以这么表示：

```html
<a href="http://www.deerol.com/html/a.html">链接到a.html</a>
<a href="http://www.deerol.com/html/photo/b.html">链接到b.html</a>
<a href="http://www.deerol.com/html/photo/c.html">链接到c.html</a>
<a href="http://www.deerol.com/html/photo/ours/d.html">链接到d.html</a>
```

## 根目录

根目录的英文全称是Root directory，去掉绝对路径前面的域名就是根目录，所以它可以理解为是网站的最上层目录。它的表示方法如下：

```html
<a href="/html/a.html">链接到a.html</a>
<a href="/html/photo/b.html">链接到b.html</a>
<a href="/html/photo/c.html">链接到c.html</a>
<a href="/html/photo/ours/d.html">链接到d.html</a>
```

在服务器上，根目录即代表网站主页所在的目录。网站服务器一般只能访问网站主页所在文件夹内的文件与文件夹。
