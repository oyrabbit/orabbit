<template>
  <div class="app-loading">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <span class="text">玩命加载中...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppLoading',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped lang="scss">
.app-loading {
  height: 100%;
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .img {
      width: 50px;
      height: 50px;
      background: url(../../assets/images/load.gif) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
