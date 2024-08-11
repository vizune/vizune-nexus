<script setup>
import Pagination from '../components/Pagination/Pagination.vue';

const posts = await fetch(import.meta.env.VITE_POSTS_BLOG)
.then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <div>
      <h1>News & Updates</h1>
      <Pagination
        :items="sortedPostsByDate"
        :itemsPerPage="6"
        gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-9"
        :assets="posts.includes.Asset"
        category="blog"
      >
      </Pagination>
      </div>
</template>