<script setup>
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
    <div class="wrapper-item text-left flex h-full">
        <img :src="asset" />
        <div class="wrapper-info bg-stone text-white gap-1 p-2 grow">
            <span class="text-sm text-center break-words">{{ fields.category }}</span>
        </div>
    </div>
</template>