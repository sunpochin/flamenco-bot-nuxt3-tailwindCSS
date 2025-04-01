<template>
  <div class="mx-auto max-w-7xl p-8">
    <h1 class="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-8">
      Get Your Flamenco Robot!
    </h1>
    <div class="relative mb-10">
      <img :src="flamencoImage" alt="Hero Image" class="w-full h-auto rounded-lg border-2 border-blue-500 transition-transform duration-300 hover:translate-y-[-5px]" />
      <p class="text-center text-lg mt-4 text-gray-700">{{ welcomeMessage }}</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(product, index) in products" :key="index" class="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
        <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <p class="text-green-600 font-bold text-lg mb-4">{{ product.price }}</p>
        <button @click="showProductDetails(index)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import flamencoImage from '@/assets/flamenco-humanoid.webp';

const welcomeMessage = ref('Discover our amazing services and products');
const isLoading = ref(true);

const products = ref([
  {
    title: 'Flamenco Singer Robot',
    description: 'This robot can sing Flamenco songs with perfect pitch and rhythm.',
    price: '$1,200',
    details: 'Expanded details about Flamenco Singer Robot'
  },
  {
    title: 'Flamenco Guitarist Robot',
    description: 'This robot can play Flamenco guitar with incredible skill.',
    price: '$1,500',
    details: 'Expanded details about Flamenco Guitarist Robot'
  },
  {
    title: 'Flamenco Singer + Guitarist All-in-One Robot',
    description: 'This robot can both sing and play Flamenco guitar, providing a full performance.',
    price: '$2,500',
    details: 'Expanded details about Flamenco Singer + Guitarist All-in-One Robot'
  }
]);

onMounted(() => {
  // Simulate loading data
  setTimeout(() => {
    isLoading.value = false;
    console.log('Home page data loaded');
  }, 500);
});

function showProductDetails(index) {
  alert(products.value[index].details);
}
</script>

<style scoped>
/* Removed all native CSS */
</style>