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
    <Header />
    <Navigation />
    <nuxt-page />
    <Footer />
  </div>
</template>