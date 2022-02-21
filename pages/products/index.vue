<template>
  <div>
    <breadcrumb-bar />
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <product-item v-for="product in products" :key="product.cursor" :product="product.node" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '../../components/product/ProductItem.vue'
import ALL_PRODUCTS from '../../graphql/allProducts'
import BreadcrumbBar from '~/components/BreadcrumbBar.vue'

export default {
  components: { ProductItem, BreadcrumbBar },
  async asyncData ({ app }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: ALL_PRODUCTS
    })

    const products = data?.products?.edges
    const pageInfo = data?.products?.pageInfo

    return { products, pageInfo }
  },
  data () {
    return {
      // products
    }
  }
}
</script>
