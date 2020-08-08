<template>
  <div>
    <b-row class="pt-4">
      <b-col><h3 class="control-label">Emoji(s)</h3> </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(item, index) in categories" :key="index" cols="4">
        <b-card :title="item.slug" img-top tag="article" style="max-width: 20rem;" class="m-2">
          <b-card-text>
            {{ item.subCategories.join(',') }}
          </b-card-text>
          <template v-slot:footer>
            <b-button variant="primary" class="btn-sm" @click="listemoji(item.slug)">{{
              `See ${item.slug} Emoji(s)`
            }}</b-button>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from 'vuex' // get data set in the state in vuex
export default {
  computed: {
    ...mapState({
      categories: state => state.emoji.categories
    })
  },
  created() {
    this.getCategories()
  },
  methods: {
    listemoji(group) {
      this.$router.push(`emoji/${group}`)
    },
    getCategories() {
      this.$store.dispatch('emoji/getCategories')
    }
  }
}
</script>
<style scoped lang="sass">
.card
  height: 300px !important;
</style>
