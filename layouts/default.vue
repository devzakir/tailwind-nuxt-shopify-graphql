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
export default {
  components: { AppHeader, AppFooter },
  data () {
    return {

    }
  }
}
</script>
