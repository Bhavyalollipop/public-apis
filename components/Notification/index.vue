<template>
  <div>
    <div v-for="(notification, idx) in notifications" :key="idx">
      <div id="b-toaster-top-right" class="b-toaster b-toaster-top-right">
        <div class="b-toaster-slot vue-portal-target">
          <b-toast
            id="toast"
            body-class="display-none"
            :variant="notification.type"
            :title="notification.title"
            static
            no-auto-hide
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    notifications() {
      return this.$store.state.notification.notifications
    }
  },
  updated() {
    this.$bvToast.show('toast')
  }
}
</script>
