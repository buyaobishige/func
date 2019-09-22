# 如何学习一门计算机语言

## 变量

一个**变量**是数据的“命名存储”。我们可以使用变量来保存商品、访客和其他信息。

下面的语句创建（换句话说，**声明**或者**定义**）了一个名称为“message”的变量：

```javascript
let message;
```

```javascript
let user = 'John';
let age = 25;
let message = 'Hello';
```

## 条件运算符

```javascript
let year = 2015;
if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

## 循环：while 和 for

```javascript
for (let i = 0; i < 3; i++) { // 结果为 0、1、2
  alert(i);
}
```

## 函数

函数是程序的主要“构建模块”，它们允许不重复地多次调用代码。

我们已经看到了内置函数的示例，如 `alert(message)`、`prompt(message, default)` 和 `confirm(question)`。但我们也可以创建自己的函数。

我们的新函数可以用名称调用 `showMessage()`。

例如：

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
```
