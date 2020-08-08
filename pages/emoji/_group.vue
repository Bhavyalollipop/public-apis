<template>
  <div>
    <b-row class="pt-4">
      <b-col
        ><h3 class="control-label">{{ $route.params.group }}</h3>
      </b-col>
      <b-col class="text-right">
        <b-button variant="primary" class="btn-sm" @click="$router.push('/emoji')"
          >Go Back</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-card v-for="(item, index) in listemoji" :key="index" class="m-2 cursor-pointer"
        ><span :title="item.slug">{{ item.character }}</span></b-card
      >
    </b-row>
  </div>
</template>
<script>
import { mapState } from 'vuex' // get data set in the state in vuex
export default {
  computed: {
    ...mapState({
      listemoji: state => state.emoji.listemoji
    })
  },
  created() {
    this.$store.dispatch('emoji/getGroup', { group: this.$route.params.group })
  }
}
</script>
