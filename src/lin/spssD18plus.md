---
next: ./mode
prev: ./spssD18
---
# 信效度的应用案例
<MyViews></MyViews>
## 基于CTT理论的量表编制

案例下载[边玉芳 学习自我效能感量表的编制与应用](https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CDFD&dbname=CDFD9908&filename=2003094723.nh&uniplatform=NZKPT&v=fKC6As8TTdks3oYb6LVkmMMKXMcPrIR3eHPPeHTpqDwXHinBApUGdegiPrVXk8SU)

::: details 文章与作者介绍
截止2022.4.10 文章被引量792	下载量33780	

边玉芳，发展与教育心理学博士、博士后。北京师范大学中国基础教育质量监测协同创新中心教授、博士生导师，北京师范大学儿童家庭教育研究中心主任，北京师范大学心理健康与教育研究所所长，北京师范大学中国基础教育质量监测协同创新中心学术委员会主任、首席专家、德育领域监测的牵头人，教育部中小学心理健康教育专家指导委员会委员。
:::

经典策略理论（Classical Test Theory，CTT）是研究者所熟悉的，其基本思想是把测验的得分（ 通常称为测验的观察分）看作真分数和误差分数的线性组合，可归结为如下简单数学模型：$X＝T＋e_x$，X是观测分数，T 是真分数，e 是误差分。传统信度、效度、项目分析的原理与方法均建立在这一模型之上。<MyCite/>

> p39 本研究的目标是编制学习自我效能感量表，因此本部分是整个研究重点之所在。整个量表编制的思路和步骤如下:
> + (1)采用开放式调查和访谈对教师和学生进行相应调查;
> + (2) 对国外几个典型的学习自我效能量表进行试用;
> + (3)在以上两个预备研究的基础上结合初步的学习自我效能感量表的理论框架，形成学习自我效能感量表第一稿;
> + (4)对量表第一稿进行试测，运用探索性因素分析等方法对数据进行分析，根据测试结果调整测题，形成学习自我效能感量表第二稿;
> + (5)对学习自我效能感量表第二稿进行试测，根据结果对学习自我效能感量表的框架和测题进行调整，如此反复，直到第五稿，学习自我效能感量表的结构已基本稳定，测题得以基本确定;
> + (6)经过两次的验证性因素分析验证了学习自我效能感量表的结构;
> + (7)对基本形成的学习自我效能感量表进行各种测量学指标的分析，包括测题的平均数、标准差、通俗性水平及鉴别力分析和测验的信度和效度考察，一系列结果说明测验的性能较好。
::: tip 思考
(2) 对国外几个典型的学习自我效能量表进行试用;

这一步目的何在？
<img   :src="$withBase('/IRT/1.jpg')" alt="图片加载失败">
<img   :src="$withBase('/IRT/2.jpg')" alt="图片加载失败">
:::

涉及到的方法：
+ 探索性因素分析
+ 验证性因素分析
+ 效标关联效度计算
+ 信度系数计算

测量内部一致性信度、再测信度

<img   :src="$withBase('/IRT/3.jpg')" alt="图片加载失败">

------

<img   :src="$withBase('/IRT/4.jpg')" alt="图片加载失败">


## 基于IRT理论的测试题修订
## IRT研究案例
案例下载 p31<a :href="$withBase('/IRT/lipeishan.pdf')" >:open_file_folder:李佩珊 大学生跨学科概念理解的调查研究</a>

CTT是建立在弱假设基础上的，项目反应理论(Item Response Theory, IRT)则建立在强假设基础上的。后者有三条基本假设：
1. :warning: 潜在特质空间的单维性假设——指组成某个测验的所有项目都是测量同一潜在特质；
2. 局部独立性假设——指对某个被试能力而言，项目间无相关存在；
3. 项目特征曲线假设则是对被试某项目的正确反应概率与其能力之间的函数关系所作的模型。
  
IRT有各种各样的模型，其中著名的是二级评分模型中的单参数逻辑斯蒂模型（即拉什模型）和三参数逻辑斯蒂模型，后者有项目难度、项目区分度、猜测三个参数。只要找到适合数据的模型，就可以对项目进行比较精确的分析。<MyCite/>

> 试测环节：
> 1. 信度分析
> 数据显示试题信度为0.88，大于0.8，表明试题信度较高。
> 2. 项目拟合度分析
> 3. 区分度分析

> 正式测试环节：
> 1. 信度分析
> 2. 怀特图分析
> 3. 试题难度值和项目拟合度分析
> 4. 区分度
> 5. 效度
> + 内容效度
> + 单维性

## IRT操作案例
::: warning 环境安装
需要提前安装R语言程序，请参考[R语言教程](https://www.runoob.com/r/r-tutorial.html)。

关于IDE，推荐使用Rstudio，因为它在作图方面表现出色。您可以在[Rstudio官网](https://www.rstudio.com/products/rstudio/)下载免费版。

使用的扩展包为[TAM](http://www.edmeasurementsurveys.com/TAM/Tutorials/index.htm)、[ltm](https://cran.r-project.org/web/packages/ltm/index.html)和[WrightMap](https://cran.r-project.org/web/packages/WrightMap/index.html)

:::
[:open_file_folder:试卷下载](http://www.edmeasurementsurveys.com/TAM/Tutorials/data/NumeracyD1.doc)

[:open_file_folder:数据下载](http://www.edmeasurementsurveys.com/TAM/Tutorials/data/D1_scored.csv)


### 扩展包配置
以下均为Rasch模型操作步骤

在桌面新建一个文件夹，新建一个.txt文件并重命名为.r。

<img   :src="$withBase('/IRT/5.jpg')" alt="图片加载失败">

添加下列代码

```R
# 引入扩展包
library("TAM")
library("WrightMap")
```
如果未下载扩展包，可以先执行下列代码
```R
# 注意 请在终端运行，不要放在.r文件里
# TAM 为需要安装的包的名字，注意大小写
install.packages("TAM")
```

### 读取数据
将数据都下载到此文件夹中。
```R
# 将“C:/Users/Lin/Desktop/Rtest"替换为文件夹的绝对路径。
# setwd表示设置工作目录
setwd("C:/Users/Lin/Desktop/Rtest")
# 读取数据文件,这里D1_scored.csv为文件名
dataset1 <- read.csv("D1_scored.csv")
```

### 信度分析
执行下列代码来计算Weighted Likelihood Estimation(WLE) Reliability
```R
# 执行TAM包的tam函数
mod1 <- tam(dataset1)
# View()用来窗口化显示运行结果
# 计算rasch模型的能力和WLE信度
View(tam.wle(mod1))

```
### 怀特图分析
```R
# 使用WrightMap包进行绘图
IRT.WrightMap(mod1)

```
### 试题难度值和项目拟合度分析
```R
# 难度xsi值
View(mod1$xsi)

# 项目拟合度，outfit和infit接近1的拟合度较好 
fit <- tam.fit(mod1)
View(fit$itemfit)

```
### 区分度分析
这里通过两张图来呈现。论文里使用的图是把两条曲线画在同一张图中。

```R
## Test Information Function
plot(x,
  type = "IIC", items = 0, lwd = 2, cex.lab = 1.1,
  sub = paste("Call: ", deparse(x$call))
)

# ## The Standard Error of Measurement can be plotted by
vals <- plot(x, type = "IIC", items = 0, plot = FALSE)
plot(vals[, "z"], 1 / sqrt(vals[, "info"]),
  type = "l", lwd = 2,
  xlab = "Ability", ylab = "Standard Error",
  main = "Standard Error of Measurement"
)
```
### 效度分析
内容效度通过德尔菲法（专家评审法）来保障

单维性检验使用的是主成分分析法。这里的扩展包无法实现，但可以通过SPSS的探索性因子分析代替。见[探索性因素分析](./spssD17.md)

完整代码如下：
```R
# 引入扩展包
library("TAM")
library("WrightMap")
# 将“C:/Users/Lin/Desktop/Rtest"表示文件夹的绝对路径。
# setwd表示设置工作目录
setwd("C:/Users/Lin/Desktop/Rtest")
# 读取数据文件,这里D1_scored.csv为文件名
dataset1 <- read.csv("D1_scored.csv")
# 执行TAM包的tam函数
mod1 <- tam(dataset1)
# View()用来窗口化显示运行结果
# 计算rasch模型的能力和WLE信度
View(tam.wle(mod1))
# 使用WrightMap包进行绘图
IRT.WrightMap(mod1)
# 难度xsi值
View(mod1$xsi)
# 项目拟合度，outfit和infit接近1的拟合度较好 
fit <- tam.fit(mod1)
View(fit$itemfit)
# Test Information Function
plot(x,
  type = "IIC", items = 0, lwd = 2, cex.lab = 1.1,
  sub = paste("Call: ", deparse(x$call))
)
# The Standard Error of Measurement can be plotted by
vals <- plot(x, type = "IIC", items = 0, plot = FALSE)
plot(vals[, "z"], 1 / sqrt(vals[, "info"]),
  type = "l", lwd = 2,
  xlab = "Ability", ylab = "Standard Error",
  main = "Standard Error of Measurement"
)

```

### 2PL和3PL
以上都是使用的Rasch模型,现使用2PL和3PL模型分析之。这里仅简单执行，不做各种检验、绘图。
```R
# 引入扩展包
library("ltm")

# 2PL
# The two-parameter logistic model for the dataset1 data
# with the constraint that (i) the easiness parameter
# for the 1st item equals 1 and (ii) the discrimination
# parameter for the 13th item equals -0.5
# 令第一个元素相对难度为1，令第十三个元素的相对区分度为-0.5
# 以此为基准进行二元回归
# 二元即难度和区分度
View(ltm(dataset1 ~ z1, constr = rbind(c(1, 1, 1), c(13, 2, -0.5))))

# 3PL
# 三元即难度、区分度、猜测性
View(tpm(dataset1))
```

#### 参考资料
1. 俞晓琳.项目反应理论与经典测验理论之比较[J].南京师大学报(社会科学版),1998(04):79-82.
2. 俞晓琳.项目反应理论与经典测验理论之比较[J].南京师大学报(社会科学版),1998(04):79-82.
<MyValine/>
