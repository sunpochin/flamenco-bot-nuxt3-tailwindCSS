<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <NuxtLink to="/home">
          <img :src="logoSrc" alt="Flamenco Guitar Robot Logo" class="logo-image" />
        </NuxtLink>
      </div>
      <ul class="navbar-menu">
        <li><NuxtLink to="/home" :class="{ active: $route.path === '/home' }">Home</NuxtLink></li>
        <li><NuxtLink to="/vision" :class="{ active: $route.path === '/vision' }">Vision</NuxtLink></li>
        <li><NuxtLink to="/team" :class="{ active: $route.path === '/team' }">Team</NuxtLink></li>
        <li><NuxtLink to="/products" :class="{ active: $route.path === '/products' }">Products</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import logoSrc from '@/assets/flamenco-robot.webp';
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 100px;
  width: auto;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

.navbar-menu li a:hover, .navbar-menu li a.active {
  color: #007bff;
}
</style>
