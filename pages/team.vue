<template>
  <div class="team">
    <h1>Meet Our Team</h1>
    <div class="team-members">
      <div class="team-member">
        <div class="photo-placeholder"></div>
        <h2>John Doe</h2>
        <p>CEO</p>
        <p>John is a serial entrepreneur with a Harvard MBA. He has successfully founded and sold multiple tech startups and is passionate about bringing innovative solutions to the market.</p>
      </div>
      <div class="team-member">
        <div class="photo-placeholder"></div>
        <h2>Jane Smith</h2>
        <p>CTO</p>
        <p>Jane holds a Ph.D. in Robotics and AI from the Polytechnic University of Valencia. She has over 15 years of experience in developing advanced robotic systems and artificial intelligence algorithms.</p>
      </div>
      <div class="team-member">
        <div class="photo-placeholder"></div>
        <h2>Michael Brown</h2>
        <p>Senior Robot Developer</p>
        <p>Michael is an expert in robotic engineering with a Master's degree from MIT. He specializes in designing and programming autonomous robots for various applications.</p>
      </div>
      <div class="team-member">
        <div class="photo-placeholder"></div>
        <h2>Emily Davis</h2>
        <p>Marketing Manager</p>
        <p>Emily has a background in digital marketing and a degree in Business Administration from Stanford University. She has a proven track record of successfully launching and promoting tech products.</p>
      </div>
    </div>
    <Sidebar />
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
.team {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.team-member {
  flex: 1 1 calc(25% - 2rem);
  text-align: center;
}

.photo-placeholder {
  width: 150px;
  height: 150px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 auto 1rem;
  transition: transform 0.3s, border 0.3s;
}

.photo-placeholder:hover {
  transform: translateY(-10px);
  border: 2px solid #007bff;
}
</style>