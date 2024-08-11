<script setup>
const nav = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Templates',
        url: '/templates'
    },
    {
        name: 'PSDs',
        url: '/psd'
    },
    {
        name: 'Avatars',
        url: '/avatars'
    },
    {
        name: 'Renders',
        url: '/renders'
    },
    {
        name: 'Tutorials',
        url: '/tutorials'
    }
]
</script>

<template>
    <div class="lg:container mx-auto py-8 xl:py-[3.5rem] overflow-hidden">
        <div class="mx-4">
        <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 xl:gap-0">
            <li v-for="link in nav" class="flex items-center">
                <NuxtLink 
                    :to="link.url" 
                    class="NavLink w-full h-full flex items-center xl:justify-center font-forum text-ice text-xl lg:text-2xl uppercase tracking-wider pl-8 xl:pl-0">
                    <span v-html="link.name" />
                </NuxtLink>
            </li>
        </ul> 
    </div>
    </div>
</template>

<style lang="scss" scoped>
$link-glow: #90c2f5;

.NavLink {
    position: relative;

    &[aria-current="page"] {
        color: white;
        text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px $link-glow, 0 0 20px $link-glow, 0 0 20px $link-glow, 0 0 20px $link-glow, 0 0 70px $link-glow;
    }

    &:not([aria-current="page"]) {
        position: relative;

        &:before {
            content: '';
            background: url('/orb.webp') center left no-repeat;
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: 20px;
            transform: translateX(-2rem);
            transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity ease-in-out .25s;
        }

        &:hover {
            &:before {
                transform: translateX(-1.4rem);
            }
        }

        @media (min-width: 1280px) {

            &:before {
                content: '';
                background-position: center center;
                opacity: 0;
                transform: translateY(15px);
                transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity ease-in-out .25s;
            }

            &:hover {
                &:before {
                    opacity: 1;
                    transform: translateY(37px);
                }
            }
        }
    }

    @media (min-width: 1280px) {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background-color: #90c2f5;
        }
    }
}

li:last-child .NavLink:after {
    display: none;
}
</style>