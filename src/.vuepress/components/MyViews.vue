 <template>
  <div class="viewsWrapper">
    <span>
      <div class="topBox">
        <img class="topIcon" src="../public/author.png" />
        <slot class="authorName">林传舜</slot>
      </div>
    </span>
    <span :id="path" class="leancloud_visitors" data-flag-title="article">
      <div class="topBox">
        <img class="topIcon" src="../public/view.png" />
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
  name: 'MyViews',
  mounted() {
    console.log("#"+ 'func'+(this.$route.path=='/'?'':this.$route.path))
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window;
      window.AV = require('leancloud-storage');
    }
    new Valine({
      appId: 'FVKty4KWiFq07tiSWQ2Tw0ul-gzGzoHsz', // your appId
      appKey: 'P0qs5IyQBvBI9fGdrw6CS5qd', // your appKey
      placeholder: '欢迎留下你的评论！',
      visitor: true,
      path:this.path,
      el: "#"+ 'func'+(this.$route.path=='/'?'':this.$route.path),
    });
  }
};
</script>
<style scoped>
.topIcon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.topBox {
  margin-left: 2px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding:0 5px;
}
.viewsWrapper{
  display:flex; 
  align-items:center;
}
</style>

