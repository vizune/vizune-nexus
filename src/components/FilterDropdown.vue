<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <div class="flex flex-wrap gap-4 justify-center mb-5">
        <select class="p-3 h-14" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
            <slot></slot>
        </select>
        <button @click="$emit('update:modelValue', '')" :disabled="modelValue.length === 0">Clear filter</button>
    </div>
</template>