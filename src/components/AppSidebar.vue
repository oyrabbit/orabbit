<template>
  <aside class="app-sidebar">
    <div class="container">
      <div class="side-center">
        <div class="container">
          <img src="@/assets/images/mao.png" alt="" />
          <div>天心兔</div>
          <div>这个人很懒，什么也没有留下</div>
          <div>
            <div><span>1000</span><span>文章</span></div>
            <div><span>1000</span><span>阅读</span></div>
            <div><span>1000</span><span>评论</span></div>
          </div>
        </div>
      </div>

      <SidebarPanel id="sider2" title="导航">
        <ul>
          <li class="active">
            <iconpark-icon name="home" size="1.2em"></iconpark-icon
            ><span>首页</span>
          </li>
          <li>
            <iconpark-icon name="message-one" size="1.2em"></iconpark-icon
            ><span>留言</span>
          </li>
          <li>
            <iconpark-icon name="peoples" size="1.2em"></iconpark-icon
            ><span>友链</span>
          </li>
          <li>
            <iconpark-icon name="info" size="1.2em"></iconpark-icon
            ><span>关于</span>
          </li>
          <li>
            <iconpark-icon name="setting-config" size="1.2em"></iconpark-icon
            ><span>管理</span>
          </li>
          <li>
            <iconpark-icon name="github-one" size="1.2em"></iconpark-icon
            ><span>GitHub</span>
          </li>
        </ul>
      </SidebarPanel>
      <SidebarPanel id="sider1" title="分类">
        <ul>
          <li class="active"><span>全部</span><span>100</span></li>
          <li><span>Vue</span><span>100</span></li>
          <li><span>Vue</span><span>100</span></li>
          <li><span>Vue</span><span>100</span></li>
          <li><span>Vue</span><span>100</span></li>
          <li><span>Vue</span><span>100</span></li>
        </ul>
      </SidebarPanel>
      <SidebarPanel id="sider3" title="友链">
        <ul>
          <li>
            <img src="@/assets/images/mao.png" alt="" /><span>阿里巴巴</span>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" /><span>阿里巴巴</span>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" /><span>阿里巴巴</span>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" /><span>阿里巴巴</span>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" /><span>阿里巴巴</span>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" /><span>阿里巴巴</span>
          </li>
        </ul>
      </SidebarPanel>
    </div>
  </aside>
</template>
<script setup></script>
<style scoped lang="scss">
.app-sidebar {
  width: 230px;
  height: auto;
  .side-center {
    margin-bottom: 10px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 20px 0px #d8d8d8;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      img {
        width: 85px;
        border-radius: 50%;
      }
      & > div {
        margin-bottom: 10px;
        &:first-of-type {
          margin-top: 10px;
          font-size: 16px;
          font-weight: bold;
        }
        &:nth-of-type(2) {
          font-size: 10px;
          opacity: 0.7;
        }
        &:last-of-type {
          width: 100%;
          display: flex;
          justify-content: space-around;
          text-align: center;
          margin-top: 5px;
          margin-bottom: 0;
          div {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            span:last-child {
              font-size: 12px;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
  #sider1,
  #sider2,
  #sider3 {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 35px;
      padding: 0 20px;
      margin-bottom: 5px;
      opacity: 0.7;
      border-radius: 12px;
      &:last-child {
        margin-bottom: 0;
      }
      &.active {
        background-color: $bgColor;
      }
      &:hover {
        background-color: $bgColor;
      }
    }
  }
  #sider2,
  #sider3 {
    li {
      justify-content: unset;
      position: relative;
      span {
        margin-left: 15px;
      }
    }
  }
  #sider3 {
    li {
      img {
        width: 20px;
        border-radius: 50%;
      }
    }
  }
}
</style>
