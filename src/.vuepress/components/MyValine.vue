<template>
  <div>
    <div :id="'func'+(this.$route.path=='/'?'':this.$route.path)"></div>
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