<script setup>
import { convertDate } from '../../utilities/convertDate';

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
        <h2 class="mb-0 flex flex-col gap-1"><span v-for="text in fields.title.split(/: (.*)/s)">{{ text }}</span></h2>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-dark text-white gap-1 p-3">
            <p class="mb-0"><strong>Publish Date:</strong> {{ convertDate(fields.date) }}</p>
            <p class="m-0"><strong>Dimensions:</strong> {{ fields.imageDimensions }}</p>
        </div>
        <div class="flex justify-center mt-1 mb-4">
          <a :href="fields.downloadUrl" target="_blank" class="button w-full">Preview / Download</a>
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