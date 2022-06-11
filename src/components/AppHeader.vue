<template>
  <header class="app-header">
    <div class="container">
      <div class="logo"></div>
      <div class="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="关键字"
          value=""
        />
        <div class="search-icon">
          <iconpark-icon name="search" size="1.6em"></iconpark-icon>
        </div>
        <div class="home-link">
          <iconpark-icon name="home" size="2em"></iconpark-icon>
        </div>
      </div>
      <div class="right-link">
        <iconpark-icon name="editor" size="2em"></iconpark-icon>
        <iconpark-icon name="user" size="2em"></iconpark-icon>
        <iconpark-icon name="remind" size="2em" class="d"></iconpark-icon>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style scoped lang="scss">
.app-header {
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 20px 0px #d8d8d8;
  .container {
    display: flex;
    width: 1280px;
    position: relative;
    .logo {
      height: 50px;
      width: 230px;
      background: url(@/assets/images/logo.png) no-repeat center center;
      background-size: contain;
    }
    .search {
      position: absolute;
      left: 230px;
      width: 230px;
      line-height: 50px;
      padding: 0 10px;
      input {
        width: 225px;
        height: 32px;
        background-color: $bgColor;
        padding: 5px 15px;
        border-radius: 16px;
      }
      .search-icon {
        position: absolute;
        top: 0;
        right: 10px;
        opacity: 0.5;
      }
      .home-link {
        position: absolute;
        top: 0;
        right: -50px;
        opacity: 0.7;
      }
    }

    .right-link {
      position: absolute;
      line-height: 50px;
      right: 0;
      iconpark-icon {
        padding: 0 10px;
        opacity: 0.7;
        &:last-child::after {
          content: '99';
          text-align: center;
          line-height: 15px;
          color: #fff;
          font-size: 5px;
          display: inline-block;
          position: absolute;
          top: 3px;
          right: 3px;
          width: 16px;
          height: 16px;
          background-color: $focusColor;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>
