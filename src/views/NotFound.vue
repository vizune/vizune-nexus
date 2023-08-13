<script setup>
import Pagination from '../components/Pagination/Pagination.vue';

const posts = await fetch(import.meta.env.VITE_POSTS_BLOG)
.then((r) => r.json());

console.log(posts)

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <div>
      <h1>404 Not Found</h1>

      </div>
</template>