<script setup lang="ts">
  useHead({
    title: 'Vizune.com',
    meta: [
      { name: 'description', content: 'Vizune.com' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })
</script>
<template>
  <div>
    <IconSprite />
    <div class="h-screen flex flex-col justify-between">
        <HeadingIntro>Obelisk: Nocturna</HeadingIntro>
      <Header />
    </div>
    <Navigation />
    <nuxt-page />
    <Footer />
  </div>
</template>