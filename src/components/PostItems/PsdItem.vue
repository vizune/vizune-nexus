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
    <div class="text-left flex flex-col justify-between mb-3 h-full bg-[#f2f2f2]">
        <h2 class="mb-4 text-center">{{ fields.title }}</h2>
        <img :src="asset" class="mb-1 mx-auto max-h-[150px]" v-if="asset" />
        <div class="flex justify-center mt-4">
          <a :href="fields.url" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span>{{ `Download (${fields.fileSize})` }}</span>
                        <svg class="icon ml-2" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon">
                        <use xlink:href="#download"></use>
                    </svg>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
h2 {
  font-size: 1.125rem;
  font-weight: 700;
  border-top: 4px solid var(--hibiscus);
  padding-top: 1rem;
}
</style>