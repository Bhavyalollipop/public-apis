<template>
  <div>
    <b-row class="pt-4">
      <b-col><h3 class="control-label">Beauty Products</h3> </b-col>
      <b-col class="text-right">
        <b-dropdown id="dropdown-1" :text="product_type" class="btn-sm">
          <b-dropdown-item
            v-for="(item, index) in type"
            :key="index"
            @click=";(product_type = item), getProduct(item)"
            >{{ item }}</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, index) in products"
        :key="index"
        class="col-lg-4 col-md-6 col-sm-12 mb-3"
      >
        <b-card :key="index" img-height="280px" :img-src="item.image_link" img-alt="Image" img-top>
          <b-card-text
            ><a :href="item.product_link" target="_blank"
              ><strong>{{ item.name }}</strong></a
            >
            <div class="colour_section">
              <div
                v-for="(color, idx) in item.product_colors"
                :key="idx"
                class="color m-1"
                :style="addStyle(color)"
              ></div>
            </div>
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">{{ `${item.price_sign} ${item.price}` }}</small>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from 'vuex' // get data set in the state in vuex
export default {
  data() {
    return {
      product_type: 'mascara',
      type: [
        'blush',
        'bronzer',
        'eyebrow',
        'eyeliner',
        'eyeshadow',
        'foundation',
        'lip_liner',
        'mascara',
        'nail_polish'
      ]
    }
  },
  computed: {
    ...mapState({
      products: state => state.makeup.products
    })
  },

  created() {
    this.getProduct(this.product_type)
  },
  methods: {
    addStyle(color) {
      return {
        'background-color': color.hex_value
      }
    },
    getProduct() {
      this.$store.dispatch('makeup/getProduct', { productType: this.product_type })
    }
  }
}
</script>
<style scoped lang="sass">
.card
  height: 500px !important
.colour_section
  display: flex
  flex-wrap: wrap
.colour_section .color
    width: 20px
    height: 20px
    border-radius: 50%
</style>
