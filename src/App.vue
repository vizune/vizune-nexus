<script setup>
import Header from './components/Header/Header.vue'
import Logo from './components/Header/Logo.vue'
import Navigation from './components/Header/Navigation.vue'
import Footer from './components/Footer/Footer.vue'
import LiveChat from './components/LiveChat.vue'
</script>

<template>
  <div class="container flex flex-col grow p-0">
    <div class="flex">
      <Header />
      <div class="bg-stizza w-full">
        <Logo />
        <Navigation />
      </div>
    </div>
    <div class="bg-white px-4 lg:px-6 pt-12 pb-24 bg-footer-lace bg-bottom bg-repeat-x grow">
      <Suspense>
        <router-view />
      </Suspense>
    </div>
    <Footer  />
    <LiveChat />
  </div>
</template>