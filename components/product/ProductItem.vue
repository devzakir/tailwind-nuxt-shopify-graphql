<template>
  <nuxt-link :to="{ name: 'products-slug', params: {slug: product.handle }}" class="group">
    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <img v-if="product.featuredImage && product.featuredImage.url" :src="product.featuredImage.url" :alt="product.featuredImage" class="w-full h-full object-center object-cover group-hover:opacity-75">
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      {{ product.title }}
    </h3>
    <p v-if="product.priceRange && product.priceRange.maxVariantPrice" class="mt-1 text-lg font-medium text-gray-900">
      {{ product.priceRange.maxVariantPrice.currencyCode }} {{ product.priceRange.maxVariantPrice.amount }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>
