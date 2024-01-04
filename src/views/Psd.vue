<script setup>
  import Pagination from '../components/Pagination/Pagination.vue';

  const posts = await fetch(import.meta.env.VITE_POSTS_PSDS)
  .then((r) => r.json());

  const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);

</script>

<template>
  <div>
    <h1 class="mb-8">PSD Downloads</h1>
    <Pagination
      :items="sortedPostsByDate"
      :itemsPerPage="9"
      gridClass="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-9"
      :assets="posts.includes.Asset"
      category="psd"
    >
    </Pagination>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
}
</style>