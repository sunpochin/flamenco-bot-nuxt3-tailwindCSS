<template>
  <div class="flex flex-row max-w-7xl mx-auto p-8">
    <!-- <h1 class="text-gray-1100 border-b-2 border-blue-500 pb-2 mb-8">Meet Our Team</h1> -->
    <div style="flex-wrap: no-wrap;" class="flex flex-row overflow-x-auto gap-6 pb-4">
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
    <Sidebar />
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<scoped>
  .no-wrap {
    flex-wrap: no-wrap;
  }
</scoped>
