<template>
  <div class="article">
    <AppLoading :loading="loading" v-if="loading" />
    <template v-if="!loading">
      <div class="type">原创</div>
      <div class="title">{{ article.title }}</div>
      <div class="info">
        <div>
          <iconpark-icon name="user"></iconpark-icon><span>天心兔</span>
        </div>
        <div>
          <iconpark-icon name="preview-open"></iconpark-icon
          ><span>{{ article.view }}</span>
        </div>
        <div>
          <iconpark-icon name="comment"></iconpark-icon
          ><span>{{ article.comment_count }}</span>
        </div>
        <div>
          <iconpark-icon name="time"></iconpark-icon
          ><span>{{ article.created_time }}</span>
        </div>
      </div>
      <div class="article-body">
        <div class="content">
          <v-md-preview :text="article.content" ref="preview"></v-md-preview>
        </div>
        <div class="end">
          <div class="top">
            <div></div>
            <div>The End</div>
            <div></div>
          </div>
          <p>本文为原创文章，转载需注明出处。</p>
          <p>如果你觉得此文章对你帮助很大，可打赏支持</p>
          <div class="money">
            <iconpark-icon
              name="finance"
              color="#fff"
              size="1.8em"
            ></iconpark-icon
            ><span>打赏支持</span>
          </div>
        </div>
      </div>
    </template>
  </div>
  <aside class="app-sidebar-right">
    <div class="container">
      <SidebarPanel id="sider1" title="标签">
        <AppLoading :loading="loading" v-if="loading" />
        <div class="tags" :key="index" v-for="(tag, index) in article.tags">
          {{ tag.name }}
        </div>
      </SidebarPanel>
      <SidebarPanel id="sider2" title="目录"
        ><AppLoading :loading="loading" v-if="loading" />
        <div
          class="indent"
          :key="anchor.indent"
          v-for="anchor in titles"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </SidebarPanel>
    </div>
  </aside>
</template>

<script setup>
import { ref, onUpdated, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import AppSidebarRight from './SidebarView'
import { GetArticle } from '@/api/user'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'
VMdPreview.use(githubTheme, {
  Hljs: hljs,
})
const loading = ref(true)
const article = ref({})
const titles = ref([])
const preview = ref(null)

onUpdated(() => {
  const anchors = preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')

  const titlesData = Array.from(anchors).filter(
    (title) => !!title.innerText.trim()
  )

  if (!titlesData.length) {
    titles.value = []
    return
  }

  const hTags = Array.from(
    new Set(titlesData.map((title) => title.tagName))
  ).sort()

  titles.value = titlesData.map((el) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName),
  }))
})

const handleAnchorClick = (anchor) => {
  const { lineIndex } = anchor

  const heading = preview.value.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  )

  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60,
    })
  }
}

const route = useRoute()
const { articleId } = route.params

onMounted(async () => {
  await GetArticle(articleId).then(({ articleData }) => {
    article.value = articleData
    loading.value = false
  })
})

// 获取数据
</script>

<style lang="scss" scoped>
.article {
  width: 730px;
  height: auto;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px 0px #d8d8d8;
  position: relative;
  .type {
    width: 67px;
    height: 40px;
    position: absolute;
    right: 0;
    background-color: #0079b7;
    border-radius: 0 12px 0 0;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    opacity: 0.5;
  }
  .title {
    margin-top: 30px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .info {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    opacity: 0.6;
    div {
      display: flex;
      align-self: center;
      margin: 20px;
      span {
        margin-left: 8px;
      }
    }
  }
  .article-body {
    padding: 15px 30px;
    .content {
      width: 100%;
      height: auto;
    }
    .end {
      width: 100%;
      height: 200px;
      text-align: center;
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        div:first-child,
        div:last-child {
          flex: 1;
          height: 2px;
          background-color: #333333;
          opacity: 0.4;
        }
        div:nth-child(2) {
          width: 84px;
          height: 40px;
          margin: 0 6px;
          border-radius: 12px;
          line-height: 40px;
          color: #fff;
          font-weight: bold;
          background-color: #b5b5b5;
        }
      }
      p {
        margin: 20px;
      }
      .money {
        display: flex;
        align-self: center;
        justify-content: center;
        width: 132px;
        height: 50px;
        margin: 0 auto;
        background-color: #b90000;
        color: #fff;
        font-size: 16px;
        line-height: 50px;
        opacity: 0.55;
        border-radius: 12px;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}

.app-sidebar-right {
  width: 300px;
  height: auto;
  #sider1 {
    .tags {
      width: auto;
      height: 23px;
      padding: 0 8px;
      margin: 5px 10px 5px 0;
      text-align: center;
      line-height: 23px;
      border-radius: 6px;
      display: inline-block;
      background-color: $Color;
      color: #fff;
    }
  }
  #sider2 {
    // position: fixed;
    // top: 0;
    // bottom: 0;

    margin: auto;
    width: 300px;
    max-height: 80%;
    overflow: scroll;
    overflow-x: hidden;
    a {
      display: inline-block;
      width: auto;
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      &:hover {
        background-color: $onColor;
        border-radius: 12px;
      }
    }
  }
}
</style>
