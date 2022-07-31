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

export const GetArticles = (params) => {
  return request('/articles', 'get', params)
}

export const GetTopArticles = () => {
  return request('/articles_top', 'get')
}

export const UpdateArticleLike = (params) => {
  return request('/article/like', 'put', params)
}

export const UpdateArticleView = (articleId) => {
  return request('/article/view', 'put', { articleId: articleId })
}

export const GetArticle = (articleId) => {
  return request(`/article/${articleId}`, 'get')
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
