<script setup>
import PatternHeading from '../PatternHeading.vue';
const props = defineProps({
    heading: String,
})
</script>

<template>
    <div class="bg-dark w-full">
        <PatternHeading>{{  heading }}</PatternHeading>
        <slot />
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 1.25rem; 
}
</style>