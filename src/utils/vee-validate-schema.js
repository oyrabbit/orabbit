// 定义校验规则提供给vee-validate组件使用
export default {
  username(value) {
    if (!value) return '请输入用户名!'
    // 规则：字母开头5-20字符之间
    if (!/^[a-zA-Z]\w{4,19}$/.test(value))
      return '用户名必须字母开头且5-20个字符!'
    return true
  },
  password(value) {
    if (!value) return '请输入密码！'
    if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符！'
    return true
  },

  title(value) {
    if (!value || !value.length) {
      return '请输入标题！'
    }
    if (value.length < 5 || value.length > 40) {
      return '标题长度为5-40个字符！'
    }
    return true
  },

  img(value) {
    if (!value || !value.length) {
      return '请输入图床链接！'
    }

    if (value.length < 5 || value.length > 400) {
      return '链接长度为5-400个字符！'
    }
    return true
  },
}
