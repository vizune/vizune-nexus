<script setup>
import Header from './components/Header/Header.vue'
import Logo from './components/Header/Logo.vue'
import Navigation from './components/Header/Navigation.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <div class="container flex flex-col grow p-0">
    <Header>
      <Logo />
      <Navigation />
    </Header>
    <div class="bg-white px-4 md:px-6 pt-12 pb-24 bg-footer-lace bg-bottom bg-repeat-x grow">
      <Suspense>
        <router-view />
      </Suspense>
    </div>
    <Footer  />
  </div>
</template>