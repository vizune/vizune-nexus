<script setup>
import { useSlots, ref , provide} from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">
        <ul class="flex justify-center items-center gap-4 mb-6 list-none flex-col md:flex-row p-0">
            <li
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
            >
                <button :disabled="selectedTitle === title">
                    {{ title }}
                </button>
            </li>
        </ul>
        <slot />
    </div>
</template>

<style scoped>
</style>