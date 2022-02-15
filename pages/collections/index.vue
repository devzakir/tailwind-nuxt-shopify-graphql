<template>
  <div>
    <breadcrumb-bar />
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto py-12 lg:max-w-none">
          <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <collection-item v-for="collection in collections" :key="collection.node.handle" :collection="collection.node" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ALL_COLLECTIONS from '../../graphql/allCollections'
import CollectionItem from '~/components/collections/CollectionItem.vue'
import BreadcrumbBar from '~/components/BreadcrumbBar.vue'

export default {
  components: { CollectionItem, BreadcrumbBar },
  async asyncData ({ app }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: ALL_COLLECTIONS
    })

    const collections = data?.collections?.edges
    const pageInfo = data?.collections?.pageInfo

    return { collections, pageInfo }
  }
}
</script>

<style>

</style>
