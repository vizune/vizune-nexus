<script setup lang="ts">
const affiliates = [
    {
        name: 'Affelius',
        url: 'https://affeli.us/',
        button: '/buttons/affelius.png'
    },
    {
        name: 'A Glimpsed Horizon',
        url: 'https://akiba.flirt-wind.net/',
        button: '/buttons/a-glimpsed-horizon.png'
    },
    {
        name: 'Aurora Veil',
        url: 'https://auroraveil.org/',
        button: '/buttons/aurora-veil.png'
    },
/*    {
        name: 'Fae Icons',
        url: 'https://icons.moudoku.com/',
        button: '/buttons/fae-icons.png'
    },
     {
        name: 'The Flamboyant',
        url: 'http://theflamboyant.net/',
        button: '/buttons/the-flamboyant.jpg'
    }, */
    {
        name: 'Hakanai',
        url: 'http://hakanai.net/',
        button: '/buttons/hakanai.jpg'
    },
    {
        name: 'Kishou',
        url: 'https://kishou.net/',
        button: null
    },
    {
        name: 'Kouyou Design',
        url: 'http://kouyou-design.net/',
        button: '/buttons/kouyou-design.png'
    },
    {
        name: 'Love is Zero',
        url: 'https://loveiszero.net/',
        button: '/buttons/love-is-zero.png'
    },
    {
        name: 'Prideful Moon',
        url: 'https://pridefulmoon.com/',
        button: '/buttons/prideful-moon.jpg'
    },
    {
        name: 'A Random Website',
        url: 'https://a-random-website.net/',
        button: '/buttons/random.png'
    },
    {
        name: 'Sea Love',
        url: 'http://sealove.sheisl0ved.com/',
        button: '/buttons/sea-love.png'
    },
    {
        name: 'Snow Drops',
        url: 'https://snow-drops.org/',
        button: '/buttons/snow-drops.jpg'
    },
    {
        name: 'Violin Star',
        url: 'https://violinstar.net',
        button: '/buttons/violin-star.gif'
    }
]
</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 justify-center gap-2 sm:gap-4 my-4 lg:px-6">
        <a 
            v-for="link in affiliates" 
            :href="link.url" 
            target="_blank" 
            class="flex items-center justify-center relative border border-ocean h-[39px] w-[96px] text-center text-white hover:text-midnight hover:bg-ocean"
        >
            <span class="text-xs uppercase tracking-wider p-1">{{ link.name }}</span>

            <NuxtImg 
                format="webp" 
                :alt="`Affiliate: ${link.name} button`" 
                :src="link.button" 
                loading="lazy"
                width="88"
                height="31"
                class="absolute top-[3px] left-[3px]"
                v-if="link.button"
            />
        </a>
    </div>
</template>

<style scoped>
a {
    transition: background-color .25s ease;
}
a img {
    opacity: 1;
    transition: opacity .25s ease;
}

a:hover img {
    opacity: 0;
    transition: opacity .25s ease;
}
</style>