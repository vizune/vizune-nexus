<script setup>
import { convertDate } from '../../utilities/convertDate';

const props = defineProps({
    title: {
        type: Object,
        required: true
    },
    slug: {
        type: Object,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col md:flex-row align-center border-4 border-hibiscus p-2 h-full">
        <img :src="thumbnail" role="presentation" class="w-64 h-64 mx-auto md:mx-0" />
        <div class="text-left mt-4 md:mt-0 md:ml-4 flex flex-col h-full w-full">
            <h2 class="font-bold mb-1">{{ title }}</h2>
            <p class="font-bold text-hibiscus">{{ convertDate(publishDate) }}</p>
            <p class="grow">{{ description }}</p>
        </div>
        <div class="flex flex-col shrink-0 justify-end md:ml-2">
            <router-link :to="`/${category}/${slug}`" class="button">Read more</router-link>
        </div>
    </div>
</template>