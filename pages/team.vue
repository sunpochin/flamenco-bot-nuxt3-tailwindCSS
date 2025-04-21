<template>
  <div class="flex flex-col mx-auto max-w-7xl p-8">
    <h1 class="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-8">
      Meet Our Team
    </h1>
    <div class="flex flex-row mx-auto justify-between gap-8">
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500">
          <img src="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg" alt="Team Member">
          <p class="font-bold">John Doe</p>
      </div>
      </div>
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500">
          <img src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg" alt="Team Member">
          <p class="font-bold">Jane Smith</p>
        </div>
      </div>
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500">
          <img src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg" alt="Team Member">
          <p class="font-bold">Jane Smith</p>
        </div>
        <div class="font-bold">Michael Brown</div>
      </div>
      <div class="text-center flex-shrink-0 w-1/4">
        <div class="w-[150px] h-[150px] bg-gray-300 rounded-full mb-4 transition-transform duration-300 hover:translate-y-[-10px] hover:border-2 hover:border-blue-500">
          <img src="https://cdn.pixabay.com/photo/2023/06/02/21/24/portrait-8036356_1280.jpg" alt="Team Member">
          <p class="font-bold">Jane Smith</p>

        </div>
        <div class="font-bold">Emily Davis</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/SideBar.vue';
</script>

<style scoped>
</style>
