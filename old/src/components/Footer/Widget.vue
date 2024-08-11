<script setup>
const props = defineProps({
    heading: String,
})
</script>

<template>
    <div class="w-full">
        <h2 class="text-center text-xxl font-bold text-white">{{ heading }}</h2>
        <div class="px-6 pb-6">
            <slot />
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 1.25rem; 
}
</style>