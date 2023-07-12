<script setup>
import Widget from './Widget.vue';
import Social from './Social.vue';

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
        name: 'Moonflame Designs',
        url: 'http://mfd.aki-mono.com/',
        button: '/buttons/moonflame-designs.png'
    },
    {
        name: 'A Random Website',
        url: 'https://a-random-website.net/',
        button: '/buttons/random.png'
    }
]


</script>

<template>
    <footer id="Footer" class="bg-dark w-full py-6 px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Widget heading="Affiliates">
            <div class="flex flex-wrap justify-center gap-4 mb-6">
                <a v-for="link in affiliates" :href="link.url" target="_blank"><img :src="link.button" :alt="`Affiliate: ${link.name} button`" /></a>
            </div>
        </Widget>
        <Widget heading="Social">
            <Social />
        </Widget>
    </footer>
</template>
