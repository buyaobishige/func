# 开发文档

<MyViews></MyViews>

:::tip 小贴士

咨询报告生成器的开发文档

:::

## 快速开始

1. 用`table.py`替换掉原生包里的内容 

> C:\Users\Administrator\AppData\Local\Programs\Python\Python312\Lib\site-packages\reportlab\platypus

2. 跳过安装`fitz`，直接安装`PyMuPDF`

3. 修改`os.chdir`后的路径


## 输出
输出的报告PDF在雅学资讯文件夹中。

## 代码结构

### 主体

生成pdf主体就俩，一个是content，一个是doc。

能往content里加的就是文本和图片，往doc里加的一般来说就只有图片和版式，也会有极少量文本。



### 院校

修改`schRequest_Unfinished`数组，可生成对应院校的咨询报告

```py
schRequest_Unfinished=[
#贵州大学
 (91,['苏州大学','西南大学','南昌大学','广西大学','云南大学','海南大学'],85,5,'纯色'),
]
```



### 变量名称修改说明

大多数xx dict都是改指标名称的

例如，`provdict`就是改省份prov的，`nameDisplayDict`就是改人才培养、科学研究这种指标名称的



### 内容修改 pdfWrite<Badge text="函数"/>
::: details 查看代码
``` py
class PdfWrite:
	pdfWrite(self, k, data_collect, lock)：
    	...
```
:::
在这个函数中，可以按照自然顺序添加页面内容。

+ 基于函数的方式
`self.someFunc(content,...)`可以以函数的方式添加整块的内容。
::: details 查看代码
函数定义：

```py
def someFunc (self,content,...):
    content=[]
	...
# 在content里追加内容即可
```
:::
+ 直接添加的方式

`content.appends(Paragraph(内容,格式))`可以添加文本内容。

`content.append(Spacer(1, 10))`添加内容间距

`content.append(PageBreak())`添加换页符

:::tip 提示

主体页面的话基本上从这个创建content往下看基本上都是能分清哪个函数是写哪一页的。class PdfWrite下的每个函数基本都是以页为单位的，不同的就是占几页的问题。

:::


::: details 查看代码
```py
# 创建内容对应的空列表
content = []
# Create an instance of TableOfContents. Override the level styles (optional)
# and add the object to the story
content.append(PageBreak())
self.statePage(content)
content.append(PageBreak())
self.SimpleIntro(content)
content.append(PageBreak())
content.append(PageBreak())
self.history(content)
content.append(PageBreak())
toc = TableOfContents()
```
:::


### 目录修改 initialdict<Badge text="函数"/>

1. 这部分直接与目录对应。例如，本科生培养p1_0_0最终等于目录里本科生培养的页码，以此类推。

::: details 查看代码
```py
def initialdict(self):
    initial_i = 10

    # 概述
    p0 = 1
    # 综合实力
    p1 = 6
    # 人才培养
    p1_0 = p1+5
    # 本科生培养
    p1_0_0 = p1_0+0
    # 党建思政
    p1_0_0_00 = p1_0_0+3
    # 本科基础
    p1_0_0_0 = p1_0_0_00+2
    # 就业质量
    p1_0_0_1 = p1_0_0_0+2
    # p1_0_0_1_anlys=p1_0_0_1+4
    # 性价比
    p1_0_0_2 = p1_0_0_1+2
    # 学生竞赛
    p1_0_0_3 = p1_0_0_2+1
```
::: 


2. 这部分决定页面内的目录标签。其中，`analysisdict[i]`表示右上角的标签图。要注意和图片命名保持一致！
::: details 查看代码
```py
for i in range(p0+initial_minus, q+initial_minus):
    if i <= p1-1+initial_minus:
        self.txtdict[i] = '概述'
        self.analysisdict[i] = '空'
    elif i <= p2-1+initial_minus:
        self.txtdict[i] = '综合实力'
        self.analysisdict[i] = '空'

        if i <= p1_0-1+initial_minus:
            self.subtxtdict[i] = ''
            self.sub2txtdict[i] = ''
            self.sub3txtdict[i] = ''
            self.analysisdict[i] = '综合实力'
        elif i <= p1_1-1+initial_minus:
            self.subtxtdict[i] = '人才培养'
            if i <= p1_0_0-1+initial_minus:
                self.sub2txtdict[i] = ''
                self.sub3txtdict[i] = ''
            elif i <= p1_0_1-1+initial_minus:
                self.sub2txtdict[i] = '本科生培养'
                self.analysisdict[i] = '本科生培养'
                if i <= p1_0_0_00-1+initial_minus:
                    self.sub3txtdict[i] = ''
                elif i <= p1_0_0_0-1+initial_minus:
                    self.sub3txtdict[i] = '党建思政'
                elif i <= p1_0_0_1-1+initial_minus:
                    self.sub3txtdict[i] = '本科基础'
```
:::

## 格式修改

### 换行

`Paragraph()`内换行，用`<br/>`

表格内换行，用`\n`

### 保留小数位

对于变量{a}，保留两位小数可以用`a:.2f`。

### 文本颜色

```py
<font color=#0652dd>HELLO WORLD</font>
```

### 虚线分割线

:::details 查看代码

```py
drawing = Drawing(515,1)
line=HorizontalLineChart()
line.x=-10
line.y=-1
line.height=1
line.width=515
line.data= [(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),]
line.lines[0].strokeColor=colors.black
line.lines[0].strokeDashArray = [2, 2] 
xaxis=XCategoryAxis()
xaxis.visible=0
yaxis=YValueAxis()
yaxis.visible=0
line.categoryAxis = xaxis
line.valueAxis = yaxis
drawing.add(line)
content.append(drawing)
```

:::

