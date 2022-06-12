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
}
