export default {
  state: () => ({
    notifications: [],
    duration: 6000,
    position: 'left'
  }),
  mutations: {
    addNotification(state, payload) {
      state.notifications.push({
        title: payload.message,
        variant: payload.type || 'info',
        duration: payload.duration || state.duration
      })
    },
    removeNotification(state) {
      state.notifications = state.notifications.slice(1)
    },
    removeSpecificNotification(state, index) {
      state.notifications = state.notifications.filter((_, i) => i !== index)
    }
  },
  actions: {
    showNotification(ctx, payload) {
      ctx.commit('addNotification', payload)
      setTimeout(() => {
        ctx.commit('removeNotification')
      }, payload.duration || ctx.state.duration)
    },
    removeNotification(ctx, payload) {
      if (payload.index === null || payload.index === undefined) {
        return
      }
      ctx.commit('removeSpecificNotification', payload.index)
    }
  }
}
