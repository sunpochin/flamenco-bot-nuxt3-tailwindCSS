<template>
  <div class="flex flex-col mx-auto max-w-7xl p-8">
    <h1 class="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-8">
      Meet Our Team
    </h1>
    <div class="flex flex-row mx-auto justify-between gap-8">
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500"></div>
        <p class="font-bold">John Doe</p>
      </div>
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500"></div>
        <p class="font-bold">Jane Smith</p>
      </div>
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500"></div>
        <div class="font-bold">Michael Brown</div>
      </div>
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500"></div>
        <div class="font-bold">Emily Davis</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
</style>
