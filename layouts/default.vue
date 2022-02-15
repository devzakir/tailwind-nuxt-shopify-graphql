<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppHeader from '~/components/layouts/AppHeader.vue'
// import GLOBAL_QUERY from '~/graphql/global'

export default {
  components: { AppHeader, AppFooter },
  data () {
    return {

    }
  },
  methods: {
    // async loadData () {
    //   // console.log(this.$nuxt.$apolloProvider.defaultClient)
    //   // console.log(this.$apolloProvider.defaultClient);
    //   const client = this.$nuxt.$apolloProvider.defaultClient
    //   const { data } = await client.query({
    //     query: GLOBAL_QUERY
    //   })

    //   this.global = data?.global?.data?.attributes
    //   this.$store.commit('SET_GLOBAL_DATA', this.global)
    // }
  }
}
</script>
