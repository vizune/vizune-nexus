<script setup>
  import { POSTS_TEMPLATES } from '../../config';
  import Pagination from '../components/Pagination/Pagination.vue';

  const posts = await fetch(POSTS_TEMPLATES)
  .then((r) => r.json());

  const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);

</script>

<template>
  <div>
    <h1>Templates</h1>
    <Pagination
      :items="sortedPostsByDate"
      :itemsPerPage="6"
      gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5"
      :assets="posts.includes.Asset"
      category="templates"
    >
    </Pagination>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
}
</style>