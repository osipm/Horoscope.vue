<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
