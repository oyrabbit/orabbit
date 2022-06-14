import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/common.scss'
import UI from '@/components/library'

import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import hljs from 'highlight.js'

VMdEditor.use(githubTheme, {
  Hljs: hljs,
})

createApp(App).use(store).use(router).use(UI).use(VMdEditor).mount('#app')
