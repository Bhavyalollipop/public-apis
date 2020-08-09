import instance from '@/plugins/interceptors'
export default {
  state: () => ({
    products: []
  }),
  mutations: {
    addProducts(state, payload) {
      state.products = payload.data
    }
  },
  actions: {
    getProduct({ commit }, { productType }) {
      instance.get(`${process.env.VUE_MAKEUP_API}?product_type=${productType}`).then(payload => {
        commit('addProducts', payload)
      })
    }
  }
}
