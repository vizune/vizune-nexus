<script setup>
import { postsBlog } from '../../constants';
import Pagination from '../components/Pagination/Pagination.vue';

const posts = await fetch(postsBlog)
.then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <div>
      <h1>News & Updates</h1>
      <Pagination
        :items="sortedPostsByDate"
        :itemsPerPage="4"
        gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5"
        :assets="posts.includes.Asset"
        category="blog"
      >
      </Pagination>
      </div>
</template>