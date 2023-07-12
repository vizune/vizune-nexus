<script setup>
import NavigationLink from './NavigationLink.vue'

const nav = [
    {
        page: "Blog",
        link: "/"
    },
    {
        page: "About",
        link: "/about"
    },
    {
        page: "Templates",
        link: "/templates"
    },
    {
        page: "Renders",
        link: "/renders"
    },
    {
        page: "Avatars",
        link: "/avatars"
    },
]
</script>

<template>
    <nav id="navigation mt-4">
        <ul class="flex flex-col list-none p-0">
            <NavigationLink v-for="item in nav" :page="item.page" :link="item.link" />
        </ul>
    </nav>
</template>

<style scoped>
</style>
