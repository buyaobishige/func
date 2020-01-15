# cocos讲解一

==>@author 林传舜<==

==>@date 2020.1.16<==

> 市面上的手游开发引擎：
> unity3D, cocos等

cocos的优势：

1. 手机端市场占有率约为50%

2. **基于JS或者TS**

3. 强大的物理系统和碰撞系统

## 节点（Node）

以html为例：
>HTML 文档中的所有内容都是节点：
>整个文档是一个文档节点
>每个 HTML 元素是元素节点
>HTML 元素内的文本是文本节点
>每个 HTML 属性是属性节点
>注释是注释节点

![](https://www.w3school.com.cn/i/ct_htmltree.gif)

```html
<!-- test.html -->
<div class="parents">
  <div class="children">...</div>
  <div class="children">
    <img src="..." />
  </div>
</div>
```

节点关系：

```plaintext
整篇文档
  |__div(parents)
      |__div(children)
      |__div(children)
          |__img
```

概念提要：节点 父节点 子节点

### ☆特别注意：子节点的X，Y是基于父节点位置的相对定位，而不是worldPosition。例如，若在父节点默认创建一个sprite节点，则其默认位置为相对于父节点的（0，0）

> 注意事项：排位靠上的节点会遮盖其他节点

## 属性面板

右边的面板，包含许多属性。

## 资源管理器

assets文件夹的基本结构(手动创建即可)：

```plaintext
assets
  |__resources
  |__scenes
  |__scripts
  |__......
```

>提醒：resources 文件夹中的所有资源，连同它们关联依赖的 resources 文件夹外部的资源，都会被导出。如果一份资源仅仅是被 resources 中的其它资源所依赖，而不需要直接被 cc.loader.loadRes 调用，那么请不要放在 resources 文件夹里。

resources用于存放各种必须的素材资源。

script存放js或者ts脚本。

scenes存放场景。场景是指.fire为后缀名的、火焰图标的文件，它实际上是【一个界面】，UI场景在场景中铺设。

>提示 双击js文件可以用编译器打开并编辑。

**核心操作：拖动。**

1. 把JS拖动到【**节点的属性管理器上**】
2. 把图片素材拖动到spriteFrame当中，给节点“换肤"
3. 把节点拖动到【节点插槽】中

## 脚本

cocos中的脚本遵循组件化开发的思路，即在大多数情况下，一个JavaScript（或ts）需要挂载到一个节点上，并对这个节点生效。和微信小程序一个界面对应一个js是类似的。

脚本的基本结构：

```javascript
/* NewScript.js */
cc.Class({
    extends: cc.Component,//配置项，不用管它
    properties: { },//用于记录各种插槽
    // LIFE-CYCLE CALLBACKS:
    onLoad () {},//生命周期函数，与小程序的onLoad非常相似

    update (dt) {},
    //游戏开发的核心生命周期函数，
    //dt表示一帧时间
    //写在这里的函数每一帧都会被执行一次。
    });
```

插槽

Node插槽：

```javascript
/* ball.js */
cc.Class({
    extends: cc.Component,
    properties: {
      //任意命名，建议符合js命名规范。
       ballObj:{
         default:null,//如果是节点插槽，默认值应为null
         type:cc.Node,//引擎定义好的一种数据类型，节点类型
         tooltip:"被控制的球体"//在属性面板中，当鼠标悬
        //  停在插槽的时候会显示的提示语，选填。
       },
       initialSpeed:{
         default:10,//这是一个数字类型的插槽，UI组在前端可以直接在属性面板编辑它。
         type:cc.Float//注意，cc.Float是引擎内置的类型，数字类型除了cc.Float还有cc.Interger
       }
     },
    onLoad () {},
    update (dt) {},
    });
```

让球水平移动

```javascript
cc.Class({
  extends: cc.Component,
  properties: {
    ballObj:{
      default:null,
      type:cc.Node,
      tooltip:"被控制的球体"
    },
    moveDuration: {//多久完成移动
      defautl: 2,//单位为s
      type: cc.Float
    }
  },
  onLoad() {
    let moveAction = cc
      .moveBy(this.moveDuration, cc.v2(100, 100))
      /* .easing(cc.easeCubicActionOut()); */

      //moveAction是预设的一套动作，可以使用
      // Node.runAction（action）来执行，具体
      // 参考Api文档，被注释掉的那一行表示按照一定
      // 的方式非匀速运动
    this.ballObj.runAction(moveAction);
  },
  update(dt) {}
});
```

> 注意：要把节点拖进来，并且把js拖到相应的节点上去，它才会生效。这样拖动的控制方式有利于开发者理清各个脚本、节点间的关联。例子：操纵杆。

## 碰撞系统与物理系统

刚体

物理物体
