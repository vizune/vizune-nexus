<script setup lang="ts">
const affiliates = [
    {
        name: 'Aestharis',
        url: 'https://aestharis.net/',
        button: '/buttons/aestharis.png'
    },
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
    {
        name: 'Dorkistic',
        url: 'http://www.dorkistic.net/',
        button: '/buttons/dorkistic.png'
    },
    {
        name: 'Fae Icons',
        url: 'https://icons.moudoku.com/',
        button: '/buttons/fae-icons.png'
    },
    {
        name: 'The Flamboyant',
        url: 'http://theflamboyant.net/',
        button: '/buttons/the-flamboyant.jpg'
    },
    {
        name: 'Hakanai',
        url: 'http://hakanai.net/',
        button: '/buttons/hakanai.jpg'
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
        name: 'A Random Website',
        url: 'https://a-random-website.net/',
        button: '/buttons/random.png'
    },
    {
        name: 'Sea Love',
        url: 'http://sealove.love-acid.com/',
        button: '/buttons/sea-love.png'
    },
    {
        name: 'Snow Drops',
        url: 'https://snow-drops.org/',
        button: '/buttons/snow-drops.jpg'
    }
]
</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 justify-center gap-2 sm:gap-4 my-4 lg:px-6">
        <a 
            v-for="link in affiliates" 
            :href="link.url" 
            target="_blank" 
            class="flex items-center justify-center relative border border-ocean h-[39px] w-[96px] text-center text-midnight hover:bg-ocean"
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