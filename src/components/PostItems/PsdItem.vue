<script setup>

const props = defineProps({
    fields: {
        type: Object,
        required: true
    },
    asset: {
        type: String
    }
})
</script>

<template>
    <div class="text-left flex flex-col mb-3 h-full">
        <h2 class="mb-0 flex flex-col gap-1">{{ fields.title }}</h2>
        <img :src="asset" class="mb-1 mx-auto" v-if="asset" width="250" />
        <div class="flex justify-center mt-4 mb-4">
          <a :href="fields.url" target="_blank" class="button w-full">{{ `Download (${fields.fileSize})` }}</a>
        </div>
    </div>
</template>

<style scoped>
h2 {
  flex-grow: 1;
  font-size: 1.125rem;
  font-weight: 700;
  border-top: 4px solid var(--hibiscus);
  padding-top: 1rem;
}
</style>