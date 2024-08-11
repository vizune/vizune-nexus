<script setup>
import { computed } from 'vue';
const emit = defineEmits(['changePage'])

const props = defineProps({
    itemCount: {
        type: Number,
        required: true
    },
    itemsPerPage: {
        type: Number,
        default: 10
    },
    currentPage: {
        type: Number,
        required: true
    }
})

const pageCount = computed(() =>
    Math.ceil(props.itemCount / props.itemsPerPage)
);

const pages = computed(() => {
    return Array.from({ length: pageCount.value }, (_, i) => i + 1);
});
</script>

<template>
    <div>
        <slot></slot>
        <div class="flex justify-center gap-5 w-full mt-8" v-if="pages.length > 1">
            <button
                type="button"
                v-for="page in pages.slice((currentPage === 1 ? currentPage - 1 : currentPage - 2), (currentPage + 3))"
                :key="page"
                @click="$emit('changePage', page)"
                :class="{ active: page === currentPage }"
                :disabled="page === currentPage"
            >
                {{ page }}
            </button>
        </div>
    </div>
</template>