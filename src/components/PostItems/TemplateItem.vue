<script setup>
import PatternHeading from '../../components/PatternHeading.vue';
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
    <div class="text-left mb-6 flex flex-col h-full">
        <PatternHeading>{{ fields.title }}</PatternHeading>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-dark text-white grow flex flex-col gap-1 py-3 px-5 justify-center">
            <p class="mb-0"><strong>Publish Date:</strong> {{ convertDate(fields.publishDate) }}</p>
            <p v-if="fields.category" class="mb-0"><strong>Category:</strong> {{ fields.category }}</p>
            <p v-if="fields.series" class="mb-0">
                <strong>{{ fields.category && fields.category === "Mangaka/Artist" ? "Artist:" : "Series:" }}</strong> {{ fields.series }}
            </p>
            <p v-if="fields.character" class="mb-0"><strong>Character:</strong> {{ fields.character }}</p>
        </div>
        <div class="flex justify-center gap-1 mt-1">
            <a :href="fields.demoUrl" target="_blank" class="button w-full">Preview</a>
            <a :href="fields.downloadUrl" target="_blank" class="button w-full">Download</a>
        </div>
    </div>
</template>