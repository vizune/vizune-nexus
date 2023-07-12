<script setup>
import { computed, ref, watch } from 'vue';
import PaginationWrapper from './PaginationWrapper.vue';
import TemplateItem from '../PostItems/TemplateItem.vue';
import RenderItem from '../PostItems/RenderItem.vue';
import AvatarItem from '../PostItems/AvatarItem.vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    itemsPerPage: {
        type: Number,
        default: 10
    },
    gridClass: {
        type: String,
        required: true
    },
    assets: {
        type: Array
    },
    category: {
        type: String,
        required: true
    }
})

const currentPage = ref(1);
const itemsPerPage = ref(props.itemsPerPage);

const displayedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;

    return props.items.slice(startIndex, endIndex);
});

//pass this function to pagination component
function changePage(pageNumber) {
    currentPage.value = pageNumber;
}

watch(currentPage, () => {
    //window.scrollTo({
         //top: 0,
         //behavior: 'smooth'
     //});
});

watch(() => props.items, () => {
    // Reset page to 1 when filters have been applied
    changePage(1);
});

function getAsset(id) {
    return props.assets.find(post => post.sys.id === id).fields.file.url
}
</script>

<template>
    <div>
        <PaginationWrapper
            :itemCount="items.length"
            :itemsPerPage="itemsPerPage"
            :currentPage="currentPage"
            @changePage="changePage"
        >
            <div :class="gridClass">
                <div
                    v-for="(item, index) in displayedItems"
                    :key="`${item.id}--${index}`"
                >
                    <template v-if="category === 'templates'">
                        <TemplateItem 
                            :fields="item.fields"
                            :asset="getAsset(item.fields.banner.sys.id)"
                        />
                    </template>

                    <template v-if="category === 'renders'">
                        <RenderItem 
                            :fields="item.fields"
                            :asset="getAsset(item.fields.thumbnail.sys.id)"
                        />
                    </template>

                    <template v-if="category === 'avatars'">
                        <AvatarItem 
                            :fields="item.fields"
                            :asset="getAsset(item.fields.asset.sys.id)"
                        />
                    </template>
                </div>
            </div>
        </PaginationWrapper>
    </div>
</template>