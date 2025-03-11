<template>
  <div :class="['sidebar', { open: isOpen }]" @click="toggleSidebar">
    <div class="sidebar-content" @click.stop>
      <h2>Our Robots</h2>
      <ul>
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const products = ref([
  { id: 1, name: 'Robot A' },
  { id: 2, name: 'Robot B' },
  { id: 3, name: 'Robot C' }
]);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: right 0.3s;
  cursor: pointer;
}

.sidebar.open {
  right: 0;
}

.sidebar-content {
  padding: 1rem;
}

h2 {
  margin-top: 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}
</style>
