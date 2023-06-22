<script setup>
    const props = defineProps({
        url: String,
        icon: String
    })
</script>
<template>
    <a :href="url" target="_blank" :title="icon" class="hover:text-white">
        <font-awesome-icon :icon="['fab', icon]" size="2xl" />
    </a>
</template>