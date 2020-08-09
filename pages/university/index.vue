<template>
  <div>
    <b-row class="pt-4">
      <b-col><h3 class="control-label">List of Public API(s)</h3> </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(item, index) in university" :key="index" class="col-lg-4 col-md-6 col-sm-12">
        <b-card :title="item.name" img-top tag="article" class="m-2">
          <b-card-text>
            {{ item.country }}
          </b-card-text>
          <template v-slot:footer>
            <a variant="primary" class="btn-sm" :href="item.web_pages">{{ item.web_pages[0] }}</a>
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
      university: state => state.university.university
    })
  },
  created() {
    this.getUniversity()
  },
  methods: {
    getUniversity() {
      this.$store.dispatch('university/getUniversity')
    }
  }
}
</script>
<style scoped lang="sass">
.card
  height: 200px !important;
</style>
