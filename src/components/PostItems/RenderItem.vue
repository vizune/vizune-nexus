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
    <div class="text-left flex flex-col mb-3 h-full bg-[#f2f2f2]">
        <h2 class="mb-0 flex flex-col gap-1 pl-4"><span v-for="text in fields.title.split(/: (.*)/s)">{{ text }}</span></h2>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-dark text-white gap-1 p-3">
            <p class="mb-0"><strong>Publish Date:</strong> {{ convertDate(fields.date) }}</p>
            <p class="m-0"><strong>Dimensions:</strong> {{ fields.imageDimensions }}</p>
            <p class="m-0"><strong>File Size:</strong> {{ fields.fileSize }}</p>
        </div>
        <div class="flex justify-center mt-1">
          <a :href="fields.downloadUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span>Download</span>
                        <svg class="icon ml-2" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon">
                        <use xlink:href="#download"></use>
                    </svg>
                </div>
            </a>
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