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
                class="grow w-full"
            >
                <button :disabled="selectedTitle === title" class="w-full relative z-10 before:bg-header-pattern text-white py-6 bg-dark border-none text-lg">
                    <span>{{ title }}</span>
                </button>
            </li>
        </ul>
        <slot />
    </div>
</template>

<style scoped>
button:before {
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