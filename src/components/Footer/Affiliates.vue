<script setup>
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
    {
        name: 'The Flamboyant',
        url: 'http://theflamboyant.net/',
        button: '/buttons/the-flamboyant.jpg'
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
        name: 'Snow Drops',
        url: 'https://snow-drops.org/',
        button: '/buttons/snow-drops.jpg'
    }
]
</script>

<template>
    <div class="grid grid-cols-3 lg:grid-cols-4 justify-center gap-4 my-6 px-6">
        <a v-for="link in affiliates" :href="link.url" target="_blank">
            <img :src="link.button" :alt="`Affiliate: ${link.name} button`" class="border-2 border-white hover:border-toadstool" />
        </a>
    </div>
</template>