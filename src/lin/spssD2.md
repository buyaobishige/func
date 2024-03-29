---

---

# 统计概述

<MyViews></MyViews> 

## 大数定律

结论：当n很大时，事件发生的频率会靠近其概率。

证明见 龙永红.概率论与数理统计第三版[M].高等教育出版社2009:114

## 中心极限定理与正态分布

<img   :src="$withBase('/spssPic/2/2.jpg')" alt="图片加载失败">

正态分布为什么常见？真正原因是中心极限定理（central limit theorem）。

<img   :src="$withBase('/spssPic/2/3.gif')" alt="图片加载失败">

:::danger 中心极限定理

独立的统计量的和的平均值，符合正态分布。

:::

:::details 关于独立的随机变量

直观地说，一个随机变量的改变丝毫不影响另一个随机变量，则称两者独立。

对任意实数x、y,若(X,Y)为连续随机变量,X和Y相互独立充分必要条件f(X,Y)=$f_X$(x)·$f_Y$(y)。

:::

**根据中心极限定理，如果一个事物受到多种因素的影响，不管每个因素本身是什么分布，它们加总后，结果的平均值就是正态分布。**

举例来说，人的身高既有先天因素（基因），也有后天因素（营养）。每一种因素对身高的影响都是一个统计量，不管这些统计量本身是什么分布，它们和的平均值符合正态分布。

<img   :src="$withBase('/spssPic/2/1.jpg')" alt="图片加载失败">

:::tip 小讨论

生活中，还有什么变量是正态分布？

:::

:::details 拓展思考:关于财富

<img   :src="$withBase('/spssPic/2/4.png')" alt="图片加载失败">

财富的分布不是正态分布，而常常是如上图所是，为什么呢？

廖雪峰指出，富人的有钱程度（可能比平均值高出上万倍），远远超出穷人的贫穷程度（平均值的十分之一就是赤贫了），即财富分布曲线有右侧的长尾。这是为什么呢，财富明明也受到多种因素的影响，怎么就不是正态分布呢？

原来，正态分布只适合各种因素累加的情况，如果这些因素不是彼此独立的，会互相加强影响，那么就不是正态分布了。一个人是否能够挣大钱，由多种因素决定：

> + 家庭
>
> + 教育
>
> + 运气
>
> + 工作
>
> + ...

这些因素都不是独立的，会彼此加强。如果出生在上层家庭，那么你就有更大的机会接受良好的教育、找到高薪的工作、遇见好机会，反之亦然。也就是说，这不是 1 + 1 = 2 的效果，而是 1 + 1 > 2。

统计学家发现，如果各种因素对结果的影响不是相加，而是相乘，那么最终结果不是正态分布，而是[对数正态分布](https://baike.baidu.com/item/对数正态分布)（log normal distribution），即`x`的对数值`log(x)`满足正态分布。

<img   :src="$withBase('/spssPic/2/5.gif')" alt="图片加载失败">

这就是说，财富的对数值满足正态分布。如果平均财富是10,000元，那么1000元～10,000元之间的穷人（比平均值低一个数量级，宽度为9000）与10,000元~100,000元之间的富人（比平均值高一个数量级，宽度为90,000）人数一样多。因此，财富曲线左侧的范围比较窄，右侧出现长尾。



福利经济学之父庇古：现在，从事情的表面看，我们应该期望（有理由这样想），如果人们的能力按这种计划分配，他们的收入将以同样方式分配。为 什么这个期望不能实现呢？对这个疑问的部分解答也许可以从"能力”这个词的较严密的分析中找到。就我们使用这个词的目的而言，它一定是挣取收入的能力的意思。但是人们使用几种不同的能力挣取收入，能力的主要区分是体力能力和脑力能力。因此， 从挣取收入的观点看，很难正确假定我们正在讨论单一同性质的人群。如果我们一块儿考查一所大学的学生和一所初中的学生，得到这两群人合在一起的身高表不会与正常的曲线相符合。 如果大学的人数比初中的人数少得很多，而身高大大超过这两群人合在一起平均数的也不适当的多。 可能脑力劳动者组成同性质的一群，体力劳动者组成同性质的一群，但就挣取收入的目的而言，他们并不联合组成同性质的一群；正常法则分别支配每一群，有的支配大学，有的支配初中，但不一块儿支配两者。 根据这个思路可以部分解释独特形式的收人分配曲线。

:warning:可是有一种更重要和更肯定的解释：收入不是单独依靠体力或脑力能力，而是依靠能力与继承的财产的综合。 继承的财产不是按能力比例分配，而是集中千少数人。 即使不谈这个事实（过一会儿再提），即拥有大量财产能使财产主人通过训练改进他的能力，这个情况必然使收人分配曲线偏离“正常”形式，从我们目前讨论的问题看，这一点的重要性是明显的。

韩非子：长袖善舞，多钱善贾 

:::

## 连续变量的常见分布

### 均匀分布

最简单的一种分布，描述了一个随机变量在一个区间上取每一个值的可能性均等的分布。

一个随机变量X，如果其密度函数为

$$f(x)=\frac{1}{b-a},a<x<b,$$

$$f(x)=0,else$$

则称X服从[a,b]上的均匀分布，记作X~U[a,b]

[a,b]上的均匀分布的唯一特征是密度函数在[a,b]外是0，而在[a,b]上为常数1/(b-a)。

<img   :src="$withBase('/spssPic/2/6.png')" alt="图片加载失败">

### 正态分布

一个连续型随机变量X，如果其密度函数为

$$\phi(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}} , -\infty<x<\infty$$

其中$\mu$，$\sigma$为常数，且$\sigma>0$,则称X服从参数为$\mu$和$\sigma^2$的正态分布，记作:warning:X~N($\mu$,$\sigma^2$)

根据泊松分布可证得，:warning:EX=$\mu$,DX=$\sigma^2$

### 卡方分布

自由度为1的卡方分布,即$\chi^2$(1)分布。设X~N(0,1)，以它为密度函数的随机变量成为服从$\chi^2$(1)分布。Y=$X^2$的密度函数为：

$$f_Y(x)=\frac{1}{\sqrt{2\pi x}}e^{-\frac{x}{2}} , x>0$$

$$f_Y(x)=0, x≤0$$



:warning:自由度为n的卡方分布，即$\chi^2$(n)分布。设X1,X2……是n个相互独立的随机变量，$X_i~N(0,1),i=1,2……n$，则:

$$X=X_1^2+X_2^2+X_3^2+……+X_n^2+$$

其密度函数为:

$$\chi^2(x;n)=\frac{1}{2^{\frac{n}{2}}\Gamma(\frac{n}{2})}x^{\frac{n}{2}-1}e^{-0.5x}$$

其中$\Gamma$是[伽马函数](https://baike.baidu.com/item/%E4%BC%BD%E7%8E%9B%E5%87%BD%E6%95%B0/3540177?fromtitle=%E4%BC%BD%E9%A9%AC%E5%87%BD%E6%95%B0&fromid=11217190&fr=aladdin)

一个随机变量X成为服从以n为自由度的$\chi^2$分布，如果其密度函数如上，记作X~$\chi^2$(n)。

当自由度n≥3时，$\chi^2$分布密度函数的曲线皆为单峰曲线。密度曲线从原点开始递增，在x=n-2处达到最大值，然后递减，渐进于x轴。

<img   :src="$withBase('/spssPic/2/7.jpg')" alt="图片加载失败">

### F分布

设X~$\chi^2$(m)，Y~$\chi^2$(n),且X与Y相互独立，记

$$Z=\frac{X/m}{Y/n}=\frac{n}{m}\frac{X}{Y}$$

[密度函数](https://baike.baidu.com/item/F%E5%88%86%E5%B8%83/7917090?fr=aladdin)

若一个随机变量X的密度如上，则称其服从第一自由度为m，第二自由度为n的F分布，记作X~F(m,n)

<img   :src="$withBase('/spssPic/2/8.png')" alt="图片加载失败">

## t分布

设X~N(0,1),Y~$\chi^2(n)$,且X和Y相互独立，记

$$T=\frac{X}{\sqrt{Y/n}}$$,

所以 

$$T^2=\frac{X^2}{Y/n}$$

显然T²~F(1,n)。

如果一个随机变量X的密度函数由(4.23)给出，则称其为服从自由度为n的t分布，记作X~t(n) 



## 抽样分布

本部分定理均只适用于单正态总体的抽样分布。设$(X_1,X_2,……,X_N)$为正态总体X~N($\mu,\sigma^2$)的样本，$\bar{X}$与$S^2$分别为该样本的样本均值与样本方差。

1.定理一 个案的标准化

设U如下式，则U~N(0,1)$$U=\frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$$

证明:

> 因为$\bar{X}$~N($\mu$,$\frac{\sigma^2}{n}$)
>
> 所以$E(\bar{X})=\mu$，
>
>  所以E(U)=0
>
> 相似地，可证D(U)=1

2.定理二

$\frac{n-1}{\sigma^2}S^2$~$\chi^2$(n-1)

证明略。

3.定理三

$T=\frac{\bar{X}-\mu}{S/\sqrt{n}}$~t(n-1)

证明略。

## 推断统计

推断统计是研究如何利用样本数据来推断总体特征的统计方法。包括假设检验和参数估计。





<MyValine/>