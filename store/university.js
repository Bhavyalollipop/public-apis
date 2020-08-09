import instance from '@/plugins/interceptors'
export default {
  state: () => ({
    university: {}
  }),
  mutations: {
    addUniversity(state, payload) {
      state.university = payload.data
    }
  },
  actions: {
    getUniversity({ commit }) {
      instance.get(`${process.env.VUE_UNIVERSITY_API}?country=United+Kingdom`).then(payload => {
        commit('addUniversity', payload)
      })
    }
  }
}
