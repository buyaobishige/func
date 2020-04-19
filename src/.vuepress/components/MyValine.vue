<!--
 * @Author: Lin
 * @Date: 2020-04-16 14:48:26
 * @LastEditors: Lin
 * @LastEditTime: 2020-04-19 22:17:14
 * @Description: 
 -->
<template>
  <div>
    <div :id="'/func'+this.$route.path"></div>
  </div>
</template>
 
<script>
export default {
  name: 'MyValine',
};
</script>
<style>
@media (max-width: 419px){
  #vcomments{
    padding:0 1.5rem;
  }
}
@media (min-width: 419px){
  #vcomments{
    padding:2rem;
    max-width: 740px;
    margin: 0 auto;
  }
}
</style>