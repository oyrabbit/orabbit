<template>
  <BodyPanel title="博主登录"
    ><div class="login">
      <Form
        ref="formCom"
        class="form"
        :validation-schema="mySchema"
        v-slot="{ errors }"
        autocomplete="off"
      >
        <div class="form-item">
          <div class="input">
            <iconpark-icon name="user"></iconpark-icon>
            <Field
              :class="{ error: errors.username }"
              v-model="form.username"
              name="username"
              type="text"
              placeholder="用户名"
            />
          </div>
          <div class="error" v-if="errors.username">
            <iconpark-icon
              name="attention"
              stroke="#EE4343"
              fill="#EE4343"
              size="1.2em"
            ></iconpark-icon
            >{{ errors.username }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <iconpark-icon name="key"></iconpark-icon>
            <Field
              :class="{ error: errors.password }"
              v-model="form.password"
              name="password"
              type="password"
              placeholder="密码"
            />
          </div>
          <div class="error" v-if="errors.password">
            <iconpark-icon name="attention" color="#EE4343"></iconpark-icon
            >{{ errors.password }}
          </div>
        </div>
        <AppButton type="primary" @click.prevent.self="login()" class="btn"
          >登 录</AppButton
        >
      </Form>
    </div></BodyPanel
  >
  <AppSidebarRight />
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Form, Field } from 'vee-validate'
import { Login } from '@/api/user'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import AppSidebarRight from '../home/SidebarView'
import schema from '@/utils/vee-validate-schema'
import Message from '@/components/library/Message'

// 使用store
const store = useStore()
// 使用router
const router = useRouter()
// 使用route
const route = useRoute()
const formCom = ref(null)
// 表单对象数据
const form = reactive({
  username: null,
  password: null,
})

const mySchema = {
  // 校验函数规则：返回true就是校验成功，返回一个字符串就是失败，字符串就是错误提示
  username: schema.username,
  password: schema.password,
}

// 登录提交
const login = async () => {
  // 整体校验
  const valid = await formCom.value.validate()
  if (valid.valid) {
    Login(form)
      .then((data) => {
        // 成功
        // 1. 存储信息
        const { token } = data.user
        store.commit('user/setUser', { token })
        // 2. 提示
        Message({ type: 'success', text: '登录成功' })
        // 3. 跳转
        router.push(route.query.redirectUrl || '/')
      })
      .catch((e) => {
        // 失败
        Message({
          type: 'error',
          text: e.response.data.error || '登录失败',
        })
      })
  }
}
</script>

<style scoped lang="scss">
// 账号容器
.login {
  display: flex;
  justify-content: center;
  margin-top: 75px;
  height: 80vh;
  .form {
    width: 50%;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 45px;
        > iconpark-icon {
          width: 34px;
          height: 45px;
          position: absolute;
          left: 5px;
          opacity: 0.7;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          background-color: $bgColor;
          border-radius: 12px;
          height: 45px;
          line-height: 45px;
          width: 100%;
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
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $focusColor;
        display: flex;
        align-items: center;
        iconpark-icon {
          margin-right: 2px;
        }
      }
    }
    .btn {
      width: 100%;
      border-radius: 12px;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
}
</style>
