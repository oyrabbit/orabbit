<template>
  <SidebarPanel class="admin-body" title="发表文章">
    <div class="create-article">
      <Form
        ref="formCom"
        class="form"
        :validation-schema="mySchema"
        v-slot="{ errors }"
        @submit.prevent.self
        autocomplete="off"
      >
        <div class="form-item">
          <div class="input">
            <span><i>* </i>文章标题：</span>
            <div class="input-text">
              <Field
                :class="{ error: errors.title }"
                v-model="form.title"
                maxlength="40"
                name="title"
                type="text"
                placeholder="文章标题"
              />
              <span>{{ form.title.length }}/40</span>
            </div>
          </div>
          <div class="error" v-if="errors.title">
            <iconpark-icon
              name="attention"
              stroke="#EE4343"
              fill="#EE4343"
              size="1.2em"
            ></iconpark-icon
            >{{ errors.title }}
          </div>
        </div>

        <div class="form-item">
          <div class="input">
            <span><i>* </i>文章类型：</span>
            <div class="input-radio">
              <div>
                <input
                  v-model="form.type"
                  id="original"
                  name="type"
                  type="radio"
                  :value="1"
                />
                <label for="original">原创</label>
              </div>
              <div>
                <input
                  v-model="form.type"
                  id="reprint"
                  name="type"
                  type="radio"
                  :value="2"
                />
                <label for="reprint">转载</label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-item">
          <div class="input">
            <span><i>* </i>文章标签：</span>
            <div class="input-tag">
              <div class="left">
                <div class="tags">
                  <div :key="item.id" v-for="item in addTagList">
                    {{ item.name }}
                    <iconpark-icon
                      name="close-small"
                      size="1.2em"
                      @click="delTag_click(item.name)"
                    ></iconpark-icon>
                  </div>
                </div>
                <input
                  :class="{ error: errors.title }"
                  v-model="tag"
                  @keyup.enter="addTag_enter(tag)"
                  name="tag"
                  type="text"
                  :placeholder="
                    addTagList.length >= 5 ? '已达标签上限' : '按Enter添加'
                  "
                />
              </div>
              <span>{{ addTagList.length + '/5' }}</span>
            </div>
          </div>
          <div class="error" v-if="tags_validate">
            <iconpark-icon
              name="attention"
              stroke="#EE4343"
              fill="#EE4343"
              size="1.2em"
            ></iconpark-icon
            >请输入标签!
          </div>
          <div class="tag-list">
            <div>
              <p>标签列表({{ tagList.length }}):</p>
              <div @click="isTagsEdit = !isTagsEdit">
                {{ isTagsEdit == 0 ? '管理' : '完成' }}
              </div>
            </div>
            <div class="tags">
              <div
                :key="item.id"
                v-for="item in tagList"
                @click="!isTagsEdit ? addTag_click(item.name) : ''"
              >
                {{ item.name }}
                <iconpark-icon
                  :class="{ display: !isTagsEdit }"
                  name="close-small"
                  size="1.2em"
                  @click="delTag_click_db(item._id)"
                ></iconpark-icon>
              </div>
            </div>
          </div>
        </div>

        <div class="form-item">
          <div class="input">
            <span><i>* </i>文章头图：</span>
            <div class="input-text">
              <Field
                :class="{ error: errors.img }"
                v-model="form.img"
                maxlength="400"
                name="img"
                type="text"
                placeholder="请输入图床链接"
              />
              <span>{{ form.img.length }}/400</span>
            </div>
          </div>
          <div class="error" v-if="errors.img">
            <iconpark-icon
              name="attention"
              stroke="#EE4343"
              fill="#EE4343"
              size="1.2em"
            ></iconpark-icon
            >{{ errors.img }}
          </div>
        </div>

        <div class="form-item">
          <div class="input">
            <span><i>* </i>文章内容：</span>
          </div>
          <div class="error" v-if="content_validate">
            <iconpark-icon
              name="attention"
              stroke="#EE4343"
              fill="#EE4343"
              size="1.2em"
            ></iconpark-icon
            >请输入内容！
          </div>
          <div class="input-content">
            <v-md-editor
              v-model="form.content"
              name="content"
              height="400px"
            ></v-md-editor>
          </div>
        </div>
        <!-- <AppButton type="primary" class="btn">发表文章</AppButton> -->
        <a @click.prevent="create()" class="btn">发表文章</a>
      </Form>
    </div>
  </SidebarPanel>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { GetTags, AddTag, DelTag, CreateArticle } from '@/api/user'
import { Form, Field } from 'vee-validate'
import Message from '@/components/library/Message'
import schema from '@/utils/vee-validate-schema'

// 使用router
const router = useRouter()
// 使用route
const route = useRoute()

const tags_validate = ref(0)
const content_validate = ref(0)

const isTagsEdit = ref(0)
const tagList = ref([])

computed(
  GetTags().then((data) => {
    tagList.value = data.tag_list
  })
)

const tag = ref()
const addTagList = ref([])
const addTag_click = (tagname) => {
  if (
    addTagList.value.length < 5 &&
    tagname &&
    !addTagList.value.some((item) => {
      return item.name == tagname
    })
  ) {
    addTagList.value.push({ name: tagname })
  }
}
const delTag_click = (tagname) => {
  addTagList.value.splice(
    addTagList.value.findIndex((item) => item.name === tagname)
  )
}

const delTag_click_db = async (tagid) => {
  Promise.all([
    await DelTag(tagid).catch((e) => {
      Message({
        type: 'error',
        text: e.response.data.message || '该标签下存在文章，删除失败!',
      })
    }),
    await GetTags().then((data) => {
      tagList.value = data.tag_list
    }),
  ])
}

const addTag_enter = async (tagname) => {
  if (
    addTagList.value.length < 5 &&
    tagname &&
    !addTagList.value.some((item) => {
      return item.name == tagname
    })
  ) {
    if (
      tagList.value.some((item) => {
        return item.name == tagname
      })
    ) {
      addTagList.value.push({ name: tagname })
      tag.value = ''
    } else {
      Promise.all([
        await AddTag({ name: tagname }),
        await GetTags().then((data) => {
          tagList.value = data.tag_list
          addTagList.value.push({ name: tagname })
          tag.value = ''
        }),
      ])
    }
  }
}

const formCom = ref(null)
// 表单对象数据
const form = reactive({
  title: '',
  type: 1,
  tags: addTagList.value,
  img: '',
  content: '',
})

const mySchema = {
  // 校验函数规则：返回true就是校验成功，返回一个字符串就是失败，字符串就是错误提示
  title: schema.title,
  img: schema.img,
}

const create = async () => {
  if (form.tags.length === 0) {
    Message({
      type: 'error',
      text: '标签不能为空!',
    })
    return
  } else if (form.content.length === 0) {
    Message({
      type: 'error',
      text: '内容不能为空!',
    })
    return
  }
  // 整体校验
  const valid = await formCom.value.validate()
  if (valid.valid) {
    CreateArticle(form)
      .then(() => {
        // 2. 提示
        Message({ type: 'success', text: '发表成功！' })
        // 3. 跳转
        router.push(route.query.redirectUrl || '/admin')
      })
      .catch((e) => {
        // 失败
        Message({
          type: 'error',
          text: e.response.data.error || '发表失败！',
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.create-article {
  display: flex;
  padding: 40px 35px;
  .form {
    width: 100%;
    &-item {
      margin-bottom: 40px;
      .input {
        height: 40px;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        > span {
          margin-right: 15px;
          i {
            color: red;
          }
        }
        .input-tag {
          min-width: 585px;
          height: 40px;
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          line-height: 40px;
          border: 1px solid #cfcdcd;
          border-radius: 12px;
          div:first-child {
            display: flex;
            align-items: center;
            .tags {
              height: 40px;
              display: flex;
              align-items: center;
              margin-right: 15px;
              div {
                height: 30px;
                padding: 0 5px;
                line-height: 30px;
                margin: 0 3px;
                color: #fff;
                background-color: $Color;
                border-radius: 5px;
                iconpark-icon {
                  margin-left: 3px;
                  color: #fff;
                }
              }
            }

            input[type='text'] {
              height: 35px;
              line-height: 35px;
            }
          }

          span {
            opacity: 0.5;
          }

          &.active,
          &:focus {
            border: 1px solid #cfcdcd;
            border-color: $Color;
          }
          &.error {
            border: 1px solid #cfcdcd;
            border-color: $priceColor;
          }
        }
        .input-text {
          line-height: 40px;
          span {
            position: absolute;
            right: 260px;
            opacity: 0.5;
          }
          input[type='text'] {
            padding: 0 60px 0 15px;
            border: 1px solid #cfcdcd;
            border-radius: 12px;
            height: 40px;
            line-height: 40px;
            width: 585px;
            &.error {
              border: 1px solid #cfcdcd;
              border-color: $priceColor;
            }
            &.active,
            &:focus {
              border: 1px solid #cfcdcd;
              border-color: $Color;
            }
          }
        }
        .input-radio {
          height: 40px;
          display: flex;
          justify-content: center;
          vertical-align: middle;
          div {
            margin-right: 35px;
            display: flex;
            align-items: center;
            input[type='radio'] + label::before {
              content: ' ';
              display: inline-block;
              vertical-align: middle;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              border: 1px solid #999999;
              margin-right: 0.8rem;
              box-sizing: border-box;
              margin-top: -0.1rem;
            }

            input[type='radio']:checked + label::before {
              background-color: $Color;
              background-clip: content-box;
              border: 1px solid $Color;
              padding: 0.1rem;
              box-sizing: border-box;
            }
            input[type='radio'] {
              position: absolute;
              clip: rect(0, 0, 0, 0);
            }
          }
        }
      }

      .tag-list {
        margin: 20px 0 0 95px;
        > div:first-child {
          display: flex;
          justify-content: space-between;
          opacity: 0.7;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          margin: 10px 0 0 0;
          div {
            height: 30px;
            padding: 0 5px;
            line-height: 30px;
            margin: 10px 5px;
            color: #fff;
            background-color: $Color;
            border-radius: 5px;
            iconpark-icon {
              margin-left: 3px;
              color: #fff;
              &.display {
                display: none;
              }
            }
          }
        }
      }

      .input-content {
        margin-top: 20px;
      }
      > .error {
        float: left;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 20px;
        color: $focusColor;
        display: flex;
        align-items: center;
        iconpark-icon {
          margin-right: 2px;
        }
      }
    }
    .btn {
      display: block;
      width: 25%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $Color;
      border-radius: 12px;
      cursor: pointer;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
}
</style>
