<template>
  <div class="layout-default">
    <main>
      <slot />
    </main>
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Flamenco-bot. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Default layout logic
</script>

<style scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}
</style>
