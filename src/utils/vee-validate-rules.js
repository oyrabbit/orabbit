import { defineRule } from 'vee-validate'
defineRule('title', (value, [min, max]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return '请输入标题！'
  }
  if (value.length < min || value.length > max) {
    return `标题长度为${min}-${max}个字符！`
  }
  return true
})
