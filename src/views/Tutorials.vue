<script setup>
  import Pagination from '../components/Pagination/Pagination.vue';

  const posts = await fetch(import.meta.env.VITE_POSTS_TUTORIALS)
  .then((r) => r.json());
  
  const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
  <div>
    <h1>Tutorials</h1>
    <Pagination
      :items="sortedPostsByDate"
      :itemsPerPage="6"
      gridClass="grid grid-cols-1 md:grid-cols-2 gap-5"
      :assets="posts.includes.Asset"
      category="tutorials"
    >
    </Pagination>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
}
</style>