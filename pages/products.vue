<template>
  <div class="home-container">
    <h1 class="page-title">Welcome to Our Website</h1>
    <div class="hero-section">
      <img src="https://picsum.photos/800/400" alt="Hero Image" class="hero-image">
      <p class="hero-text">{{ welcomeMessage }}</p>
    </div>
    
    <div class="features-section">
      <div v-for="(feature, index) in features" :key="index" class="feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <button @click="showFeatureDetails(index)" class="feature-button">Learn More</button>
      </div>
    </div>
    
    <div class="cta-section">
      <h2>Ready to get started?</h2>
      <button @click="signUp" class="cta-button">Sign Up Now</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const welcomeMessage = ref('Discover our amazing services and products');
const isLoading = ref(true);

const features = ref([
  {
    title: 'Feature 1',
    description: 'This is a description of our first amazing feature.',
    details: 'Expanded details about feature 1'
  },
  {
    title: 'Feature 2',
    description: 'This is a description of our second amazing feature.',
    details: 'Expanded details about feature 2'
  },
  {
    title: 'Feature 3',
    description: 'This is a description of our third amazing feature.',
    details: 'Expanded details about feature 3'
  }
]);

onMounted(() => {
  // Simulate loading data
  setTimeout(() => {
    isLoading.value = false;
    console.log('Home page data loaded');
  }, 500);
});

function showFeatureDetails(index) {
  alert(features.value[index].details);
}

function signUp() {
  console.log('Sign up clicked');
  alert('Thank you for your interest! Sign up form will appear soon.');
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.hero-section {
  position: relative;
  margin-bottom: 40px;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.hero-text {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.feature-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.feature-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.cta-section {
  text-align: center;
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 8px;
}

.cta-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #218838;
}
</style>