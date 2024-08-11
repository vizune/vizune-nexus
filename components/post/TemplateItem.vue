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
    <div class="text-left mb-8 flex flex-col h-full">
        <h2 class="font-bold my-4">{{ fields.title }}</h2>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-charcoal text-white grow flex flex-col gap-1 p-5 justify-center">
            <p class="mb-0"><strong>Publish Date:</strong> {{ convertDate(fields.publishDate) }}</p>
            <p v-if="fields.category" class="mb-0"><strong>Category:</strong> {{ fields.category }}</p>
            <p v-if="fields.series" class="mb-0">
                <strong>{{ fields.category && fields.category === "Mangaka/Artist" ? "Artist:" : "Series:" }}</strong> {{ fields.series }}
            </p>
            <p v-if="fields.character" class="mb-0"><strong>Character:</strong> {{ fields.character }}</p>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center gap-1 mt-1">
            <a :href="fields.demoUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <span>Demo</span>
                    <div class="flex">
                        <svg class="icon mr-3">
                            <use xlink:href="#display"></use>
                        </svg>
                        <svg class="icon">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                </div>
            </a>
            <a :href="fields.downloadUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <span>Source code</span>
                    <div class="flex">
                        <svg class="icon mr-3">
                            <use xlink:href="#code"></use>
                        </svg>
                        <svg class="icon">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>