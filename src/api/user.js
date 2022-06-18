import request from '@/utils/request'

export const Login = ({ username, password }) => {
  return request('/login', 'post', { username, password })
}

export const GetTags = () => {
  return request('/tags', 'get')
}

export const AddTag = ({ name }) => {
  return request('/tags', 'post', { name })
}

export const DelTag = (tagId) => {
  return request(`/tags/${tagId}`, 'delete')
}

export const CreateArticle = ({ title, type, tags, img, content }) => {
  return request('/article', 'post', { title, type, tags, img, content })
}

export const GetArticle = (params) => {
  return request('/article', 'get', params)
}

export const Gettimetable = () => {
  return request('/timetable', 'get')
}

export const Getreward = () => {
  return request('/reward', 'get')
}

export const Getpunish = () => {
  return request('/punish', 'get')
}

export const Getscore = () => {
  return request('/score', 'get')
}

export const Editmeasures = ({
  measureId,
  ideology,
  academic,
  development,
}) => {
  return request(`/measures/${measureId}`, 'put', {
    ideology,
    academic,
    development,
  })
}
