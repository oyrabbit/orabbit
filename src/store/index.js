import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user },
  plugins: [
    createPersistedstate({
      key: 'orabbit',
      paths: ['user'],
    }),
  ],
})
