<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import NavSlot from './components/NavSlot.vue'

const title = ref('Dog Parks')
const info = ref('This is a list of dog parks, hiking trails, and parks in the area.')
</script>

<template>
  <!-- attempt at named slots with a nav bar -->
  <NavSlot>
    <template #left>
      <img
        src="../src/assets/tennis-1381230_640.jpg"
        class="img-fluid"
        alt="Tennis ball with water flinging off of it."
        width="150"
        height="150"
      />
    </template>
    <template #center>
      <h2>{{ title }}</h2>
    </template>
    <template #right>
      <h2>{{ info }}</h2>
    </template>
  </NavSlot>
  <Navbar>
    <!-- This is the header slot -->
  </Navbar>
  <!-- Place components in the area of the main element so that each nav link will place the content for each component in the main area. -->
  <RouterView />

  <Footer>
    <!-- This is the footer slot -->
  </Footer>
</template>

<style scoped></style>
