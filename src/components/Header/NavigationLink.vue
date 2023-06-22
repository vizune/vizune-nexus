<script setup>
const props = defineProps({
    page: String,
    link: String
})
</script>

<template>
    <li class="text-left mt-4">
        <router-link :to="link" class="bg-stizza hover:bg-white text-white focus:bg-white focus:text-hibiscus hover:text-stizza block px-4 py-3">
            <span class="uppercase tracking-wider text-lg">{{ page }}</span>
        </router-link>
    </li>
</template>

<style scoped>
</style>