<template>
  <div>
    <breadcrumb-bar />
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto py-12 lg:max-w-none">
          <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <collection-item />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionItem from '~/components/collections/CollectionItem.vue'
import BreadcrumbBar from '~/components/BreadcrumbBar.vue'
export default {
  components: { CollectionItem, BreadcrumbBar }
}
</script>

<style>

</style>
