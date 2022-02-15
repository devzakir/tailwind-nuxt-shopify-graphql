<template>
  <div class="group relative mb-6">
    <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
      <nuxt-link :to="{ name: 'collections-slug', params: {slug: collection.handle }}">
        <span class="absolute inset-0" />
        {{ collection.title }}
      </nuxt-link>
    </h3>
    <p class="text-base font-semibold text-gray-900">
      {{ collection.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['collection']
}
</script>

<style>

</style>
