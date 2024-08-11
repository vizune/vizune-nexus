<script setup>
useHead({
  title: 'Vizune.com - Blog'
})

const config = useRuntimeConfig()

const posts = await fetch(config.public.blog).then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <Content>
        <HeadingTitle small="Welcome to" large="Vizune" />
        <blockquote class="font-forum mb-8">
            <p>Obelisk: Nocturna is best viewed with the curtains closed, lights off and listening to <a href="https://open.spotify.com/track/2SHzX7kPO4SBmBGsqnH6nN?si=2f81be5c66154553" target="_blank">"Luma" by The M Machine.</a></p>
            <span>- Sasha, <cite>Vizune.com</cite></span>
        </blockquote>
        <Pagination
            :items="sortedPostsByDate"
            :itemsPerPage="6"
            gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-9"
            :assets="posts.includes.Asset"
            category="blog"
        >
      </Pagination>
    </Content>
</template>
