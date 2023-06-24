<script setup>
import { POSTS_RENDERS } from '../../config.js';
import PatternHeading from '../components/PatternHeading.vue';

const posts = await fetch(POSTS_RENDERS)
.then((r) => r.json());

function getThumbnail(id) {
  return posts.includes.Asset.find(post => post.sys.id === id).fields.file.url
}
</script>

<template>
  <div>
    <h1>Renders</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div v-for="post in posts.items" class="text-left flex flex-col mb-3">
        <PatternHeading>{{ post.fields.title }}</PatternHeading>
        <img :src="getThumbnail(post.fields.thumbnail.sys.id)" class="mb-1" />
        <div class="bg-dark text-white gap-1 p-3">
          <p class="m-0"><strong>Dimensions</strong>: {{ post.fields.imageDimensions }}</p>
        </div>
        <div class="flex justify-center mt-1">
          <a :href="post.fields.downloadUrl" target="_blank" class="button w-full">Preview / Download</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
  flex-grow: 1;
  height: 80px;
}
</style>