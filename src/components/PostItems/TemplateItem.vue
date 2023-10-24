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
    },
    tags: {
        type: Array
    }
})

const tagInfo = [
    {
        name: 'tailwind',
        url: 'https://tailwindcss.com/',
        title: 'This template has been built with Tailwind CSS framework'
    },
    {
        name: 'vue',
        url: 'https://vuejs.org/',
        title: 'This template has been built with Vue JavaScript framework'
    },
    {
        name: 'bootstrap',
        url: 'https://getbootstrap.com/docs/3.4/',
        title: 'This template has been built with Bootstrap v3.4 CSS framework'
    }
]

const getTagInfo = (tag) => {
    return tagInfo.find((item) => item.name === tag);
}

</script>

<template>
    <div class="text-left mb-6 flex flex-col h-full">
        <PatternHeading>
            <div class="flex justify-between">
                <span>{{ fields.title }}</span>
                <div class="flex gap-4" v-if="tags">
                    <a v-for="tag in tags" :href="getTagInfo(tag.id).url" :title="getTagInfo(tag.id).title">
                        <svg class="icon">
                            <use :xlink:href="`#${tag.sys.id}`"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </PatternHeading>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-dark text-white grow flex flex-col gap-1 py-3 px-5 justify-center">
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
                    <div class="flex">
                        <span>Demo</span>
                        <svg class="icon ml-2" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon">
                        <use xlink:href="#display"></use>
                    </svg>
                </div>
            </a>
            <a :href="fields.downloadUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span>Source code</span>
                        <svg class="icon ml-2" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon" style="height: 1.75rem">
                        <use xlink:href="#code"></use>
                    </svg>
                </div>
            </a>
        </div>
    </div>
</template>