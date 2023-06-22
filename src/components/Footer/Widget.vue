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
h2:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>