<script setup>
  import { POSTS_TEMPLATES } from '../../config.js';
  import PatternHeading from '../components/PatternHeading.vue';

  const posts = await fetch(POSTS_TEMPLATES)
  .then((r) => r.json());

  const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);

  function getThumbnail(id) {
    return posts.includes.Asset.find(post => post.sys.id === id).fields.file.url
  }

  function convertPublishDate(date) {
    const format = new Date(date);
    return `${format.getDate()}/${format.getMonth() + 1}/${format.getFullYear()}`;
  }
</script>

<template>
  <div>
    <h1>Templates</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div v-for="post in sortedPostsByDate" class="text-left mb-6 flex flex-col">
        <PatternHeading>{{ post.fields.title }}</PatternHeading>
        <img :src="getThumbnail(post.fields.banner.sys.id)" class="mb-1" />
        <div class="bg-dark text-white grow flex flex-col gap-1 p-3">
          <p class="mb-0"><strong>Publish Date:</strong> {{ convertPublishDate(post.fields.publishDate) }}</p>
          <p v-if="post.fields.category" class="mb-0"><strong>Category:</strong> {{ post.fields.category }}</p>
          <p v-if="post.fields.series" class="mb-0">
            <strong>{{ post.fields.category && post.fields.category === "Mangaka/Artist" ? "Artist:" : "Series:" }}</strong> {{ post.fields.series }}
          </p>
          <p v-if="post.fields.character" class="mb-0"><strong>Character:</strong> {{ post.fields.character }}</p>
        </div>
        <div class="flex justify-center gap-1 mt-1">
          <a :href="post.fields.demoUrl" target="_blank" class="button w-full">Preview</a>
          <a :href="post.fields.downloadUrl" target="_blank" class="button w-full">Download</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0.25rem;
}
</style>