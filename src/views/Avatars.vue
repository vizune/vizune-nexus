<script setup>
  import { POSTS_AVATARS_100, POSTS_AVATARS_200, POSTS_AVATARS_400 } from '../../config.js';
  import PatternHeading from '../components/PatternHeading.vue';

  const posts100 = await fetch(POSTS_AVATARS_100)
  .then((r) => r.json());

  const posts200 = await fetch(POSTS_AVATARS_200)
  .then((r) => r.json());

  const posts400 = await fetch(POSTS_AVATARS_400)
  .then((r) => r.json());

  function getThumbnail(id, category) {
    return category.includes.Asset.find(post => post.sys.id === id).fields.file.url
  }
</script>

<template>
  <div>
    <h1>Avatars</h1>
    <div class="flex justify-center gap-4 mb-6">
      {{  selected  }}
      <button 
        @click="setSelected(100)" 
        :disabled="selected = 100"
      >100 x 100</button>
      <button
        @click="setSelected(200)" 
        :disabled="selected = 200"
      >200 x 200</button>
      <button
        @click="setSelected(400)" 
        :disabled="selected = 400"
      >400 x 400</button>
    </div>

    <PatternHeading>100 x 100</PatternHeading>
    <div class="grid gap-4 wrapper100">
      <div v-for="post in posts100.items" class="text-left flex mb-6">
        <img :src="getThumbnail(post.fields.asset.sys.id, posts100)" class="w-[100px] h-[100px]" />
        <div class="bg-stone text-white gap-1 p-2 grow justify-center items-center flex h-[100]">
          <span class="text-xs text-center break-words">{{ post.fields.category }}</span>
        </div>
      </div>
    </div>

    <PatternHeading>200 x 200</PatternHeading>
    <div class="grid gap-4 wrapper200">
      <div v-for="post in posts200.items" class="text-left flex flex-col mb-6 w-[200px]">
        <img :src="getThumbnail(post.fields.asset.sys.id, posts200)" />
        <div class="bg-stone text-white gap-1 p-2 grow text-center align-center">
          <span class="text-xs text-center break-words">{{ post.fields.category }}</span>
        </div>
      </div>
    </div>

    <PatternHeading>400 x 400</PatternHeading>
    <div class="grid gap-4 wrapper400">
      <div v-for="post in posts400.items" class="text-left flex flex-col mb-6 w-[400px]">
        <img :src="getThumbnail(post.fields.asset.sys.id, posts400)" />
        <div class="bg-stone text-white gap-1 p-2 grow text-center align-center">
          <span class="text-xs text-center break-words">{{ post.fields.category }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.wrapper100 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.wrapper200 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.wrapper400 {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
</style>