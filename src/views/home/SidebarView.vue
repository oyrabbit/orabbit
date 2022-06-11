<template>
  <aside class="app-sidebar-right">
    <div class="container">
      <SidebarPanel id="sider1" title="最新评论">
        <ul>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>哈哈哈，你在干胡</div>
            </div>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>
                哈哈哈，你在干胡椒粉和附近的说法是不均衡的肺结核2活动是否激活计算机十九点九九嘛
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>
                哈哈哈，你在干胡椒粉和附近的说法是不均衡的肺结核2活动是否激活计算机十九点九九嘛
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>
                哈哈哈，你在干胡椒粉和附近的说法是不均衡的肺结核2活动是否激活计算机十九点九九嘛
              </div>
            </div>
          </li>
        </ul>
      </SidebarPanel>
      <SidebarPanel id="sider2" title="最新留言">
        <template #right><div class="right">我要留言</div></template>
        <ul>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>哈哈哈，你在干胡</div>
            </div>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>
                哈哈哈，你在干胡椒粉和附近的说法是不均衡的肺结核2活动是否激活计算机十九点九九嘛
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>
                哈哈哈，你在干胡椒粉和附近的说法是不均衡的肺结核2活动是否激活计算机十九点九九嘛
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/images/mao.png" alt="" />
            <div>
              <div><span>天心兔</span><span>1小时前</span></div>
              <div>
                哈哈哈，你在干胡椒粉和附近的说法是不均衡的肺结核2活动是否激活计算机十九点九九嘛
              </div>
            </div>
          </li>
        </ul>
      </SidebarPanel>
      <SidebarPanel id="sider3" title="闲言碎语">
        <div>
          <p>众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。</p>
          <p>出自：《青玉案·元夕》</p>
        </div>
      </SidebarPanel>
      <SidebarPanel id="sider4" title="网站信息">
        <div class="info">
          <div><span>页面响应时间：</span><span>56ms</span></div>
          <div><span>网站运行时间：</span><span>445天</span></div>
        </div>
      </SidebarPanel>
    </div>
  </aside>
</template>
<script setup></script>
<style scoped lang="scss">
.app-sidebar-right {
  width: 300px;
  height: auto;
  margin-top: 15px;
  #sider1,
  #sider2 {
    .right {
      opacity: 0.7;
    }
    li {
      display: flex;
      margin: 20px 0;
      font-size: 14px;
      &:last-child {
        margin-bottom: 0;
      }
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-top: 5px;
      }
      & > div {
        padding-left: 10px;
        div:first-child {
          margin-bottom: 3px;
          span {
            margin-right: 10px;
            font-weight: bold;
            &:last-child {
              font-weight: 500;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
  #sider3 {
    div {
      padding: 12px 15px;
      background-color: $bgColor;
      border-radius: 12px;
      p:last-child {
        margin-top: 10px;
        text-align: right;
        opacity: 0.7;
      }
    }
  }
  #sider4 {
    .info {
      padding: 12px 15px;
      background-color: $bgColor;
      border-radius: 12px;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        &:last-child {
          margin-top: 10px;
        }
        span:last-child {
          padding: 0 10px;
          background-color: #fff;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
