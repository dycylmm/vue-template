const state = {
  title: ''
}

const mutations = {
  setTitle(state, title) {
    state.title = title
  }
}

const actions = {
  updateTitle(ctx, title) {
    ctx.commit('setTitle', title)
  }
}

const getters = {
  title: state => state.title
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
