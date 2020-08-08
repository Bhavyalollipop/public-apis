<template>
  <div>
    <div id="topbar" class="pl-4 pr-4 pt-2 bg-dark">
      <i v-b-toggle.sidebar class="fa fa-bars cursor-pointer"></i>
    </div>
    <Sidebar />
    <b-container>
      <Nuxt />
    </b-container>
    <Notification />
  </div>
</template>
<script>
import Sidebar from '@/layouts/sidebar'
import Notification from '@/components/Notification'
export default {
  components: {
    Sidebar,
    Notification
  }
}
</script>
