<script setup>
import PatternHeading from '../components/PatternHeading.vue';

const props = defineProps({
    category: Number,
    title: String,
    posts: Array
})

function getThumbnail(id, cat) {
    return cat.includes.Asset.find(post => post.sys.id === id).fields.file.url
}
</script>

<template>
    <div>
        <PatternHeading>{{ title }}</PatternHeading>
        <div class="grid gap-4" :class="`wrapper${category}`">
          <div v-for="post in posts.items" class="wrapper-item text-left flex">
            <img :src="getThumbnail(post.fields.asset.sys.id, posts)" :class="`w-[${category}px] h-[${category}px]`" />
            <div class="wrapper-info bg-stone text-white gap-1 p-2 grow">
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
.wrapper100 .wrapper-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}
.wrapper200 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
}
.wrapper200 .wrapper-item {
    flex-direction: column;
    width: 200px;
}
.wrapper400 {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
}
.wrapper400 .wrapper-item {
    flex-direction: column;
    width: 400px;
}
.wrapper200 .wrapper-info,
.wrapper400 .wrapper-info {
    text-align: center;
}
</style>