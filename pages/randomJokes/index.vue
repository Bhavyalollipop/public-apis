<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>{{ test }}</h1>
      </b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      test: '\uD83D\uDE00'
    }
  }
}
</script>
<style scoped></style>
