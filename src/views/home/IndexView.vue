<template>
  <div class="index">
    <div class="container">
      <div class="article" :key="item.id" v-for="(item, index) in topArticles">
        <div
          :style="'background-image: url( ' + item.img + ');cursor: pointer;'"
          @click="() => imgLink(item._id)"
        ></div>
        <div>
          <div>
            <div :class="{ display: !item.is_top }">置顶</div>
            <router-link :to="'/article/' + item._id">{{
              item.title
            }}</router-link>
          </div>
          <div>
            <router-link :to="'/article/' + item._id">{{
              vContent(item.content)
            }}</router-link>
          </div>
          <div>
            <div>
              <div>
                <iconpark-icon name="preview-open" size="1.2em"></iconpark-icon
                ><span>{{ item.view }}</span>
              </div>
              <div>
                <iconpark-icon name="comment"></iconpark-icon
                ><span>{{ item.comment_count }}</span>
              </div>
              <div>
                <iconpark-icon name="time"></iconpark-icon
                ><span>{{ vDate(item.updated_time) }}</span>
              </div>
            </div>
            <div @click="like_top(index, item._id)">
              <iconpark-icon
                :class="{ display: item.is_like }"
                name="like"
                size="1.5em"
              ></iconpark-icon>
              <iconpark-icon
                :class="{ display: !item.is_like }"
                name="like"
                size="1.5em"
                stroke="red"
                fill="red"
              ></iconpark-icon
              ><span>{{ item.like }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="article" :key="item.id" v-for="(item, index) in articles">
        <div
          :style="'background-image: url( ' + item.img + ');cursor: pointer;'"
          @click="() => imgLink(item._id)"
        ></div>
        <div>
          <div>
            <div :class="{ display: !item.is_top }">置顶</div>
            <router-link :to="'/article/' + item._id">{{
              item.title
            }}</router-link>
          </div>
          <div>
            <router-link :to="'/article/' + item._id">{{
              vContent(item.content)
            }}</router-link>
          </div>
          <div>
            <div>
              <div>
                <iconpark-icon name="preview-open" size="1.2em"></iconpark-icon
                ><span>{{ item.view }}</span>
              </div>
              <div>
                <iconpark-icon name="comment"></iconpark-icon
                ><span>{{ item.comment_count }}</span>
              </div>
              <div>
                <iconpark-icon name="time"></iconpark-icon
                ><span>{{ vDate(item.updated_time) }}</span>
              </div>
            </div>
            <div @click="like(index, item._id)">
              <iconpark-icon
                :class="{ display: item.is_like }"
                name="like"
                size="1.5em"
              ></iconpark-icon>
              <iconpark-icon
                :class="{ display: !item.is_like }"
                name="like"
                size="1.5em"
                stroke="red"
                fill="red"
              ></iconpark-icon
              ><span>{{ item.like }}</span>
            </div>
          </div>
        </div>
      </div>

      <AppInfiniteLoading
        :loading="loading"
        :finished="finished"
        @infinite="getData"
      />

      <!-- <div class="more"><AppButton type="primary">加载更多</AppButton></div> -->
    </div>
  </div>
  <AppSidebarRight />
</template>

<script setup>
import AppSidebarRight from './SidebarView'
import { ref } from 'vue'
import { GetArticles, GetTopArticles, UpdateArticleLike } from '@/api/user'
import { useRouter } from 'vue-router'

import moment from 'moment'
moment.locale('zh-cn')

const route = useRouter()

const loading = ref(false)
const finished = ref(false)
const articles = ref([])
const topArticles = ref([])

let reqParams = {
  pageNum: 1,
  pageSize: 8,
}

const imgLink = (url) => {
  route.push('/article/' + url)
}
// 获取数据函数
const getData = () => {
  loading.value = true
  GetArticles(reqParams).then(({ article_list }) => {
    if (article_list.length) {
      const article_list2 = []
      article_list
        .filter((item) => item.is_top === 0)
        .forEach((item) => {
          article_list2.push({ ...item, is_like: 0 })
        })
      articles.value.push(...article_list2)
      reqParams.pageNum++
    } else {
      // 加载完毕
      finished.value = true
    }
    // 请求结束
    loading.value = false
  })
}

// 获取置顶文章列表
GetTopArticles().then(({ article_list }) => {
  if (article_list.length) {
    const article_list2 = []
    article_list.forEach((item) => {
      article_list2.push({ ...item, is_like: 0 })
    })
    topArticles.value.push(...article_list2)
  }
})
// GetArticle().then((data) => {
//   articles.value = data.article_list
// })

// 更新文章点赞数据
const like = async (index, articleId) => {
  articles.value[index].is_like === 0 &&
    (await UpdateArticleLike({ type: 1, articleId: articleId }).then(
      ({ article }) => {
        articles.value[index] = { ...article, is_like: 1 }
      }
    ))
}

// 更新置顶文章点赞数据
const like_top = async (index, articleId) => {
  topArticles.value[index].is_like === 0 &&
    (await UpdateArticleLike({ type: 1, articleId: articleId }).then(
      ({ article }) => {
        topArticles.value[index] = { ...article, is_like: 1 }
      }
    ))
}

const vContent = (content) => {
  return content.replace(/#|-|>|-|\*/g, '').trim()
}

const vDate = (date) => {
  const thistime = moment(date).format('YYYY-MM-DD HH:mm:ss')
  const nowtime = moment(Date()).format('YYYY-MM-DD HH:mm:ss')
  const timespan = moment(nowtime).diff(thistime, 'day')

  if (timespan <= 10) {
    return moment(thistime).fromNow()
  } else {
    return thistime
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 730px;
  height: auto;
  margin: 0 10px;
  // background-color: #fff;
  // border-radius: 12px;
  // box-shadow: 0 0 20px 0px #d8d8d8;
  .article {
    width: 100%;
    height: 190px;
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 20px 0px #d8d8d8;
    & > div:first-child {
      width: 200px;
      height: 150px;
      // background: url(@/assets/images/img.png) no-repeat center center;
      background-image: url(@/assets/images/img.png);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 12px;
    }
    & > div:last-child {
      flex: 1;
      height: 150px;
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > div:first-child {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        div {
          width: 36px;
          height: 18px;
          margin-right: 10px;
          text-align: center;
          font-size: 12px;
          background-color: $focusColor;
          color: #fff;
          border-radius: 5px;
        }
      }
      & > div:nth-child(2) {
        flex: 1;
        padding: 10px 0;
        margin-bottom: 12px;
        overflow: hidden;
        font-size: 12px;
        opacity: 0.7;
      }
      & > div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 0.7;
        & > div {
          display: flex;
          div {
            margin-right: 20px;
            display: flex;
            &:first-child,
            &:nth-child(2) {
              width: 50px;
            }
            span {
              margin-left: 3px;
            }
          }
          span {
            margin-left: 3px;
          }
        }
        &:last-child {
          margin-right: 5px;
        }
      }
    }
  }
  .more {
    margin: 20px;
    text-align: center;
  }
}
</style>
