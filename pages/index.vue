<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        public-api
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push('/makeup')
  }
}
</script>
