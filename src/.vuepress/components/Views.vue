<!--
 * @Author: Lin
 * @Date: 2020-04-16 15:07:44
 * @LastEditors: Lin
 * @LastEditTime: 2020-04-16 16:25:15
 * @Description: 
 -->
 <template>
  <div>
    <span :id="path" class="leancloud_visitors" data-flag-title="article">
      <div class="viewsBox">
        <!-- <div>{{path}}123</div> -->
        <img class="viewIcon" src="../public/view.png" />
        <div class="leancloud-visitors-count">loading...</div>
      </div>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: "/func"+this.$route.path
    };
  },
  name: 'Views',
  mounted: function() {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window;
      window.AV = require('leancloud-storage');
    }

    new Valine({
      el: '#vcomments',
      appId: 'FVKty4KWiFq07tiSWQ2Tw0ul-gzGzoHsz', // your appId
      appKey: 'P0qs5IyQBvBI9fGdrw6CS5qd', // your appKey
      placeholder: '欢迎留下你的评论！',
      visitor: true
    });
  }
};
</script>
<style scoped>
.viewIcon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.viewsBox {
  margin-left: 2px;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>

