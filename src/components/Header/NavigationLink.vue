<script setup>
const props = defineProps({
    page: String,
    link: String
})
</script>

<template>
    <li class="text-left">
        <router-link :to="link" class="bg-stizza hover:bg-white text-white focus:bg-white hover:text-stizza block px-8 py-4">
            <span class="uppercase tracking-wider text-lg">{{ page }}</span>
        </router-link>
    </li>
</template>

<style scoped>
.router-link-active {
    background: var(--dark);
}
.router-link-active:hover {
    background: #fff;
}
</style>