import instance from '@/plugins/interceptors'
export default {
  state: () => ({
    categories: [],
    listemoji: []
  }),
  mutations: {
    addCategories(state, payload) {
      state.categories = payload.data
    },
    addEmoji(state, payload) {
      state.listemoji = payload.data
    }
  },
  actions: {
    getCategories({ commit }) {
      instance
        .get(`${process.env.VUE_EMOJI_API}/categories?access_key=${process.env.VUE_EMOJI_KEY}`)
        .then(payload => {
          commit('addCategories', payload)
        })
    },
    getGroup({ commit }, { group }) {
      instance
        .get(
          `${process.env.VUE_EMOJI_API}/categories/${group}?access_key=${process.env.VUE_EMOJI_KEY}`
        )
        .then(payload => {
          commit('addEmoji', payload)
        })
    }
  }
}
