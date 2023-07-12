<script setup>

</script>

<template>
  <div>
    <h1>Tutorials</h1>
    <router-link :to="{ name: 'tutorials.post', params: { id: tutorial.id } }">Go to tutorial</router-link>
  </div>
</template>