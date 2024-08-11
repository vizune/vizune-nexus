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
        page: "Avatars",
        link: "/avatars"
    },
    {
        page: "Renders",
        link: "/renders"
    },
    {
        page: "Templates",
        link: "/templates"
    },
    {
        page: "Tutorials",
        link: "/tutorials"
    },
    {
        page: "PSD Downloads",
        link: "/psd"
    }
]
</script>

<template>
    <nav id="navigation" class="border-b-4 border-stizza">
        <ul class="flex flex-col list-none p-0">
            <NavigationLink v-for="item in nav" :page="item.page" :link="item.link" />
        </ul>
    </nav>
</template>

<style scoped>
</style>
