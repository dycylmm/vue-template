import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import common from './modules/common'

Vue.use(Vuex)

// store 默认已开启命名空间，详见：./modules/*
export default new Vuex.Store({
  strict: true,
  modules: {
    common
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
