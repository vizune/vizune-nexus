<script setup>
import SocialLink from './SocialLink.vue';

const social = [
    {
        url: "https://github.com/vizune",
        icon: "github"
    },
    {
        url: "https://www.deviantart.com/vizune",
        icon: "deviantart"
    },
    {
        url: "https://www.instagram.com/vizune_/",
        icon: "instagram"
    },
    {
        url: "https://www.linkedin.com/in/sasha-r-547a2b57",
        icon: "linkedin"
    },
    {
        url: "https://discordapp.com/users/vizune.",
        icon: "discord"
    },
    {
        url: "https://www.pinterest.co.uk/vizune/",
        icon: "pinterest"
    },
    {
        url: "https://open.spotify.com/user/1149827575",
        icon: "spotify"
    },
    {
        url: "https://steamcommunity.com/id/vizune",
        icon: "steam"
    },
    {
        url: "https://twitter.com/Vizune_",
        icon: "twitter"
    }
]
</script>

<template>
    <div class="grid grid-cols-5 gap-8 text-white py-4 px-8">
        <div v-for="item in social">
            <SocialLink :url="item.url" :icon="item.icon" />
        </div>
    </div>
</template>