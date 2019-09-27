# JavaScript

## 为什么培训 JavaScript *?*

1. HTML 定义了网页的内容
2. CSS 描述了网页的布局
3. JavaScript 编写网页的行为

___

`网页行为需要专门的一段代码来完成，这段段代码可以称其为“脚本”、“函数”，可以理解为实现某一步骤或功能的mini程序,而JavaScript就是编写这种程序的语言`

___

[示例1](https://www.runoob.com/try/try.php?filename=tryjs_intro_alert)

[示例2](https://www.runoob.com/try/try.php?filename=tryjs_intro_inner_html)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
  
  <h1>我的第一段 JavaScript</h1>
<p id="demo">
  JavaScript 能改变 HTML 元素的内容。
</p>
<script>
function myFunction()
{
  x=document.getElementById("demo");  // 找到元素
  x.innerHTML="Hello JavaScript!";    // 改变内容
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>

</body>
</html>
```

## JavaScript 用法

   HTML 中的脚本必须位于 `<script>` 与  `</script>` 标签之间。

## 变量与常量

### 变量

一个变量是数据的“命名存储”。我们可以使用变量来保存商品、访客和其他信息。

其实也可以初步理解为数学中的未知数，只是这个未知数的值不一定为数字。

#### 变量命名

JavaScript 的变量命名有两个限制：

1. 变量名称只能包含字母，数字，符号 $ 和 _。
2. 首字符必须非数字。

举个例子

```javascript
let userName;//正确
let 2-test23;//错误
```

#### 创建一个变量

在 JavaScript 中创建一个变量，我们需要用到 let 关键字。

下面我们来创建（换句话说，声明或者定义）一个名称为“message”的变量：

```javascript
let message;
```

现在，通过赋值操作符 = 为变量添加一些数据：

```javascript
let message;
message = 123; // 保存数字，右边的值赋给左边的变量
```

通过使用变量名称访问它：

```javascript
let message;
message = 123;
alert(message); // 显示变量内容
```

简洁一点，我们将变量定义和赋值合并成一行：

```javascript
let message = 'Hello!'; // 定义变量，并且赋值
alert(message); // Hello!
```

也可以在一行中声明多个变量。

```javascript
let user = 'Tom', age = 25, message = 'Hello';
```

看上去代码长度更短，但并不推荐。为了更好的可读性，请一行声明一个变量。

多行变量声明有点长，但更容易阅读：

```javascript
let user = 'Tom';
let age = 25;
let message = 'Hello';
```

### 常量

声明一个常数（不变）变量，可以使用 `const` 而非 `let`：

```javascript
const myBirthday = '123';
```

使用 const 声明的变量称为“常量”。它们不能被修改，尝试这样做就会造成错误：

```javascript
 const myBirthday = '123';
myBirthday = '321'; // 错误，不能对常量重新赋值
```

> 任务：
>
>1.声明变量myNumber、myBooleans、myString并分别赋给其数字、布尔值、字符。
>
>2.声明一个常量myConstent并赋值，尝试修改其值，看是否有效果。
___

## 条件运算符：if

### “if” 语句

`if` 语句计算括号里的条件表达式，如果计算结果是 `true`，就会执行对应的代码块。

如下：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
```

如果有多个语句要执行，我们必须将要执行的代码块封装在大括号内：

```javascript
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```

### 布尔转换

`if（……）` 语句会计算圆括号包围的表达式的结果并将其转换为布尔类型。

转换规则：

- 数字 `0`、一个空字符串 `""`、`null`、`undefined` 和 `NaN` 都会转换成 `false`。因为他们被称为 “falsy” 值。
- 其他值变成 `true`，所以它们被称为 “truthy”。

所以，下面条件下的代码永远不会执行：

```javascript
if (0==true) {
  ...
}

if (0) { // 0 是 falsy
  ...
}
```

……但下面的条件 —— 始终有效：

```javascript
if (1==true) {
  ...
}

if (1) { // 1 是 truthy
  ...
}
```

### “else” 语句

`if` 语句包含一个可选的 “else” 块。如果条件不成立，就会执行它内部的代码。

如下所示：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // 2015 以外的任何值
}
```

### 多个条件：“else if”

有时我们需要测试一个条件的几个变体。使用 `else if` 子句可以实现。

如下所示：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

在上面的代码中，首先检查 `year < 2015`。如果它是假的，就会转到下一个条件 `year > 2015`，否则显示最后一个 `alert`。

可以有更多的 `else if` 块。结尾的 `else` 是可选的。

## 逻辑运算符

JavaScript 里有三个逻辑运算符：`||` (或), `&&` (与), `!` (非)。

虽然被称为“逻辑”，这些运算符却可以被应用于任意类型的值，而不仅仅是布尔值。结果也同样可能是任意类型。

### || (或)

两个竖线符号`||`表示了“或”运算：

大多数时间，或 `||` 会被用在 `if` 语句中，用来测试是否有**任何**给定的条件是 `true` 的。

例如：

```javascript
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
```

我们可以传入更多的条件：

```javascript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // 是周末
}
```

#### 或运算——寻找第一个真值

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数。
- 将每一个操作数转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的**初始值**。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），返回最后一个操作数。

例如：

```javascript
alert( 1 || 0 ); // 1（1 是真值）
alert( 1 || 0 || 2 ); // 1（第一个真值）
alert( null || 1 ); // 1（1 是第一个真值）
alert( undefined || null || 0 ); // 0（所有的转化结果都是 false，返回最后一个值）
```

#### 检验一下

1. **获取变量列表或者表达式的第一个真值**

   假设我们有几个变量，它们可能包含某些数据或者是 `null/undefined`。我们需要选出第一个包含数据的变量。

   我们可以这样应用或运算 `||`：

 ```javascript
let currentUser = null;
   let defaultUser = "Tom";
   let name = currentUser || defaultUser || "unnamed";
   alert( name ); // 我们现在这个name的值是多少？

 ```

   如果 `currentUser` 和 `defaultUser` 都是假值，那么结果就是 `"unnamed"`。

### &&（与）

两个 & 符号表示 `&&` 与操作：

使用 `if` 语句的例子：

```javascript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'Time is 12:30' );
}
```

就像或运算一样，与运算的操作数可以是任意类型的值：

```javascript
if (1 && 0) { // 作为 true && false 来执行
  alert( "won't work, because the result is falsy" );
}
```

#### 与操作——寻找第一个假值

与运算 `&&` 做了如下的事情：

- 从左到右依次计算操作数。
- 将每一个操作数转化为布尔值。如果结果是 `false`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `true`），返回最后一个操作数。

换句话说，与操作符返回第一个假值，如果没有假值就返回最后一个值。

上面的规则和或运算很像。区别就是与运算返回第一个假值而或操作返回第一个真值。

例如：

```javascript
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3，最后一个值
```

#### 与运算 `&&` 在或操作符 `||` 之前执行

与运算 `&&` 的优先级比或运算 `||` 要高。（优先级是什么？1+2*3=？）

所以与运算 `&&` 有时候能够代替 `if`。

例如：

```javascript
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
```

`&&` 右边的代码只有运算抵达到那里才能被执行。也就是，当且仅当 `(x > 0)` 返回了真值。

所以我们基本可以类似的得到：

```javascript
let x = 1;

if (x > 0) {
  alert( 'Greater than zero!' );
}
```

带 `&&` 的代码变体看上去更短。但是 `if` 的含义更明显，可读性也更高。

所以建议是根据目的选择代码的结构。需要条件判断就用 `if`，需要与运算就用 `&&`。

___

### !（非）

感叹符号 `!` 表示布尔非运算。

语法相当简单：

```javascript
result = !value;
```

操作符接受一个参数，并按如下运作：

1. 将操作数转化为布尔类型：`true/false`。
2. 返回相反的值。

例如：

```javascript
alert( !true ); // false
alert( !0 ); // true

if(!1){
  ...
}
```

两个非运算 `!!` 有时候用来将某个值转化为布尔类型：

```javascript
!!"non-empty string"  // true
!!null // false
```

**非运算符 `!` 的优先级在所有逻辑运算符里面最高，所以它总是在 `&&` 或者 `||` 前执行。**

___

## 条件运算符： ‘?’

### 三元运算符 ‘?’（一种简写）

使用问号 `?` 来代替 `if` 语句

语法如下：

```javascript
condition ? value1 : value2
```

计算条件结果，如果`condition`结果为真，则返回 `value1`，否则返回 `value2`。

如下所示：

```javascript
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

写成三元表达式

如下所示：

```javascript
let accessAllowed = (age > 18) ? true : false;
```

___

### 多个 ‘?’

使用一系列问号 `?` 运算符可以返回一个取决于多个条件的值。

如下所示：

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

很难一下子看出发生了什么。但经过仔细观察，我们可以看到它只是一个普通的检查序列。

1. 第一个问号检查 `age < 3`。
2. 如果为真 — 返回 `'Hi, baby!'`，否则 — 在冒号 `":"` 后面继续检查 `age < 18`。
3. 如果为真 — 返回 `'Hello!'`，否则 — 在下一个冒号 `":"` 后面继续检查 `age < 100`。
4. 如果为真 — 返回 `'Greetings!'`，否则 — 在最后一个冒号 `":"` 后面返回 `'What an unusual age!'`。

使用 `if..else` 实现上面的逻辑：

```javascript
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

>任务：
>
>- 仿造上面的代码，如果age<6，给message赋值为baby，age<30，给message赋值为teen，age<100，给message赋值为old，age>100，给message赋值为hero。
