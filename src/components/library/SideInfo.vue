<template>
  <SidebarPanel id="sider4" title="网站信息">
    {{ props.title }}
    <div class="info">
      <div>
        <span>页面加载总耗时：</span><span>{{ loadTime + 'ms' }}</span>
      </div>
      <div>
        <span>DOM渲染耗时：</span><span>{{ domRenderTime + 'ms' }}</span>
      </div>
      <div>
        <span>首次交互耗时：</span><span>{{ fetchTime + 'ms' }}</span>
      </div>
      <div>
        <span>DOM解析耗时：</span><span>{{ domInteractiveTime + 'ms' }}</span>
      </div>
      <div>
        <span>首屏耗时：</span><span>{{ firstPaintTime + 'ms' }}</span>
      </div>
      <div>
        <span>白屏耗时：</span><span>{{ whiteScreenTime + 'ms' }}</span>
      </div>
      <div>
        <span>首包耗时：</span><span>{{ firstPackageTime + 'ms' }}</span>
      </div>
      <div>
        <span>下载耗时：</span><span>{{ downLoadTime + 'ms' }}</span>
      </div>
      <div>
        <span>请求响应耗时：</span><span>{{ responseTime + 'ms' }}</span>
      </div>
      <div>
        <span>TCP连接耗时：</span><span>{{ tcpTime + 'ms' }}</span>
      </div>
      <div>
        <span>DNS查询耗时: </span><span>{{ dnsTime + 'ms' }}</span>
      </div>
      <div>
        <span>网站运行天数：</span><span>{{ runTime + '天' }}</span>
      </div>
    </div>
  </SidebarPanel>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
const dnsTime = ref(0)
const loadTime = ref(0)
const domRenderTime = ref(0)
const tcpTime = ref(0)
const firstPaintTime = ref(0)
const responseTime = ref(0)
const fetchTime = ref(0)
const domInteractiveTime = ref(0)
const whiteScreenTime = ref(0)
const firstPackageTime = ref(0)
const downLoadTime = ref(0)
const runTime = ref(0)

const getTiming = () => {
  let urodz = new Date('06/10/2022')
  let now = new Date()
  let ile = now.getTime() - urodz.getTime()
  runTime.value = Math.floor(ile / (1000 * 60 * 60 * 24))
  setTimeout(() => {
    let timing = performance.timing
    let start = timing.navigationStart

    dnsTime.value = timing.domainLookupEnd - timing.domainLookupStart
    tcpTime.value = timing.connectEnd - timing.connectStart
    responseTime.value = timing.responseStart - timing.requestStart
    downLoadTime.value = timing.responseEnd - timing.responseStart
    firstPackageTime.value = timing.responseStart - timing.domainLookupStart
    firstPaintTime.value = timing.responseStart - start
    whiteScreenTime.value = timing.responseEnd - timing.fetchStart
    domInteractiveTime.value = timing.domInteractive - timing.responseEnd
    fetchTime.value = timing.domInteractive - timing.fetchStart
    domRenderTime.value = timing.domContentLoadedEventEnd - start
    timing.loadEventEnd == 0
      ? (loadTime.value = parseInt(performance.now()))
      : (loadTime.value = timing.loadEventEnd - start)
  }, 0)
}
// onMounted(getTiming)

window.addEventListener('load', getTiming(), false)
</script>

<style lang="scss" scoped>
#sider4 {
  .info {
    padding: 12px 15px;
    background-color: $bgColor;
    border-radius: 12px;
    div {
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      &:last-child {
        margin-bottom: 0;
      }
      span:last-child {
        text-align: center;
        width: 80px;
        padding: 0 10px;
        background-color: #fff;
        border-radius: 2px;
      }
    }
  }
}
</style>
