
<template>
  <a v-if="autocite" class="sup" href="#参考资料">
    [<slot>{{citeCal}}</slot>]
  </a>
  <a v-else class="sup" href="#参考资料">
    [
    <slot></slot>]
  </a>
</template>

<script>
// 依赖于theme layout
import { citesequence } from "../../global.js";
export default {
  props: ["MyCite"],
  name: "MyViews",
  data() {
    return {
      autocite: true,
    };
  },
  computed: {
    citeCal() {
      let n = citesequence.length;
      citesequence.push(n);
      return n;
    },
  },
  beforemounted() {
    citesequence = [0];
  },
};
</script>

<style scoped>
.sup {
  color: #266ce8;
  display: inline;
  vertical-align: super;
  font-size: 0.5em;
}
</style>
