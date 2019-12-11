<template>
  <div>
    <div class="mermaid">
        gantt
        dateFormat  YYYY-MM-DD
        title 活动一览表(机密※)

        section 核心活动
        年度汉字                    :active,2020-01-13,7d
        FLAG                         :crit, 2020-01-24, 1d

        section 重要活动
        图书收集                    :active,2020-01-13,11d
        俄狄浦斯王                   :,2020-02-09,7d
        
        section 基础活动
        小年对春联                    :crit,2020-01-17,1d
        元宵猜灯谜                    :crit,2020-02-08,1d
        我家乡的新年摄影              :,2020-01-25,7d
        新年话题讨论              :done,2020-01-25,14d
        熊孩子吐槽              :,2020-02-01,7d
        故事接龙              :done,2020-02-15,7d
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyDemo',

  mounted() {
    import('../../../node_modules/mermaid/dist/mermaid').then(module => {
      module.initialize({
        theme: 'forest',
        gantt: {
          axisFormatter: [
            [
              '%Y-%m-%d',
              d => {
                return d.getDay() === 1;
              }
            ]
          ]
        }
      });
    });
  }
};
</script>
