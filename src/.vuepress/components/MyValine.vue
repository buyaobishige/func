<template>
  <div :id="valineId"></div>
</template>

<script>
export default {
  name: "MyValine",
  data() {
    return {
      valineId:
        this.$route.path == "/" ? "home" : this.$route.path.slice(-8, -5),
    };
  },
  mounted() {
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }
    new Valine({
      appId: "FVKty4KWiFq07tiSWQ2Tw0ul-gzGzoHsz", // your appId
      appKey: "P0qs5IyQBvBI9fGdrw6CS5qd", // your appKey
      placeholder: "欢迎留下你的评论！",
      visitor: true,
      el: "#" + this.valineId,
      path:"/func"+this.$route.path
    });
  },
};
</script>
<style>
</style>
