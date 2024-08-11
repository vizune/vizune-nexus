<script setup>
import Header from './components/Header/Header.vue'
import Logo from './components/Header/Logo.vue'
import Navigation from './components/Header/Navigation.vue'
import Footer from './components/Footer/Footer.vue'
import LiveChat from './components/LiveChat.vue'
</script>

<template>
  <div class="site-container flex flex-col grow">
    <div class="flex">
      <Header />
      <div class="bg-stizza flex flex-col justify-between w-full max-w-[21.25rem]">
        <Logo />
        <Navigation />
      </div>
    </div>
    <div class="bg-white px-4 lg:px-12 pt-12 pb-24 bg-footer-lace bg-bottom bg-repeat-x grow">
      <Suspense>
        <router-view />
      </Suspense>
    </div>
    <Footer />
    <LiveChat />
  </div>
</template>