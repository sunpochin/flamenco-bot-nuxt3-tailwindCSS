<template>
  <div class="mx-auto max-w-7xl p-8">
    <h1 class="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-8">
      Get Your Flamenco Robot!
    </h1>

    <!-- Vuetify Data Table -->
    <v-container>
      <v-data-table
        :headers="headers"
        :items="products"
        class="elevation-1"
      >
        <template v-slot:headers="{ columns }">
          <tr>
            <th v-for="header in headers" :key="header.value">
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}</td>
            <td>
              <v-btn color="primary" @click="showProductDetails(item)">
                Learn More
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
    <div class="relative mb-10">
      <img :src="flamencoImage" alt="Hero Image" class="w-full h-auto rounded-lg border-2 border-blue-500 transition-transform duration-300 hover:translate-y-[-5px]" />
      <p class="text-center text-lg mt-4 text-gray-700">{{ welcomeMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import flamencoImage from '@/assets/flamenco-humanoid.webp';

const welcomeMessage = ref('Discover our amazing services and products');
const isLoading = ref(true);

const headers = ref([
  { text: 'Title', value: 'title', align: 'start', sortable: true },
  { text: 'Description', value: 'description', align: 'start', sortable: true },
  { text: 'Price', value: 'price', align: 'start', sortable: true },
  { text: 'Action', value: 'action', align: 'center', sortable: false },
]);

const products = ref([
  {
    id: 1,
    title: 'Flamenco Singer Robot',
    description: 'This robot can sing Flamenco songs with perfect pitch and rhythm.',
    price: '$1,200',
    details: 'Expanded details about Flamenco Singer Robot',
  },
  {
    id: 2,
    title: 'Flamenco Guitarist Robot',
    description: 'This robot can play Flamenco guitar with incredible skill.',
    price: '$1,500',
    details: 'Expanded details about Flamenco Guitarist Robot',
  },
  {
    id: 3,
    title: 'Flamenco Singer + Guitarist All-in-One Robot',
    description: 'This robot can both sing and play Flamenco guitar, providing a full performance.',
    price: '$2,500',
    details: 'Expanded details about Flamenco Singer + Guitarist All-in-One Robot',
  },
]);

onMounted(() => {
  // Debug: Log products and headers to ensure they are loaded correctly
  console.log('Headers:', headers.value);
  console.log('Products:', products.value);

  // Simulate loading data
  setTimeout(() => {
    isLoading.value = false;
    console.log('Products page data loaded');
  }, 500);
});

function showProductDetails(item) {
  alert(item.details);
}
</script>

<style scoped>
/* Removed all native CSS */
</style>