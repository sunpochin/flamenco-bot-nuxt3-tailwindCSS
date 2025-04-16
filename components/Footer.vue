<template>
  <footer class="footer">
    <p>© {{ currentYear }} Contact: sunpochin@gmail.com</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1rem;
  background: #f1f1f1;
}
</style>
