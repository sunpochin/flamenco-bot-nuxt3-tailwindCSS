<template>
  <v-app>
    <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup>
// Import the Navbar component
import Navbar from '~/components/Navbar.vue';
</script>

<style>
/* Global styles can go here */
</style>
