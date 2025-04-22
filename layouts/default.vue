<template>
  <div class="layout-default">
    <NavBar />
    <main>
      <slot />
    </main>
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Made by sunpochin@gmail.com with ❤️ </p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
// Default layout logic
</script>

<style scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
  width: 100%;
}

.footer {
  flex-shrink: 0;
  text-align: center;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}
</style>
