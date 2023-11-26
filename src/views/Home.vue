<script setup>
import Pagination from '../components/Pagination/Pagination.vue';

const posts = await fetch(import.meta.env.VITE_POSTS_BLOG)
.then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <div>
      <img src="https://images.ctfassets.net/89ruixmjhco6/FYEIcyqvTQidcfrxFAfRb/f0c23f709993fff00887645f92966adf/halloween-header.png" alt="Happy Halloween" class="mb-8" />
      <h1>News & Updates</h1>
      <Pagination
        :items="sortedPostsByDate"
        :itemsPerPage="6"
        gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5"
        :assets="posts.includes.Asset"
        category="blog"
      >
      </Pagination>
      </div>
</template>