<template>
  <div class="viewsWrapper">
    <span>
      <div class="topBox">
        <img class="topIcon" src="../public/author.png" />
        <slot class="authorName">林传舜</slot>
      </div>
    </span>
    <span :id="valineId" class="leancloud_visitors" data-flag-title="article">
      <div class="topBox">
        <img class="topIcon" src="../public/view.png" />
        <div class="leancloud-visitors-count">loading...</div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyViews",
  data() {
    return {
      valineId: "/func" + this.$route.path,
    };
  },
  mounted() {
    console.log(this.valineId);
  },
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
  padding: 0 5px;
}
.viewsWrapper {
  display: flex;
  align-items: center;
}
</style>
