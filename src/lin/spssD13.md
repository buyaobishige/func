---
next: ./mode
---
# 相关与回归

<MyViews></MyViews> 

## 简介

::: tip 相关与回归的关系

---

线性关系分析是将两个变量的关系以直线方程式的原理来估计关联强度，例如积差相关就是用来反映两个连续变量具有线性关系强度的指标；**积差相关系数越大，表示线性关联越强**，反之则表示线性关联越弱，此时可能是变量间没有关联，或是呈现非线性关系。

回归分析是以直线方程式来进行统计决策与应用，又称为线性回归(linear regression) 。**一般来说，两个变量的关系先以相关系数去检验线性关联度，若相关达到统计显著水平，表示线性关系是有意义的，便可进行回归来进行进一步的预测与解释。**

此外，象限内的点为每一位样本在两个变量上的成对观察值(paired raw scores) , 其散布情形显示出两变量的关联情形，称为**散点图**(或译散布图，scatter plot)。下图为散点图

:::

![](/spssPic/13/13-1.jpg)

## 公式

方差公式：
$$Variance(x)=\frac{\sum(X-\overline{X})}{N-1}=\frac{SS_x}{N-1}$$


协方差公式：
$$Cov(X,Y)=\frac{\sum({X-\overline{X}})({Y-\overline{Y}})}{N-1}=\frac{SP_{xy}}{N-1}$$

皮尔逊积差相关公式：
$$r=\frac{\sum{cov(x,y)}}{s_xs_y}$$

<iframe src="https://quizlet.com/22125271/flashcards/embed?i=2yjgce&x=1jj1" height="500" width="100%" style="border:0"></iframe>

<MyValine/>

