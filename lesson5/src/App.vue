<script setup>
import { ref, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Grid from './components/Grid.vue'
import Accordion from './components/Accordion.vue'
import Images from './components/Images.vue'
import NotFound from './components/Not-Found.vue'
</script>

<template>
  <Navbar>
    <template #page-title>
      <h1 class="text-center">{{ title }}</h1>
    </template>
    <template #page-info>
      <p class="text-center">{{ info }}</p>
    </template>
    <!-- This is the header slot -->
  </Navbar>
  <!-- Place components in the area of the main element so that each nav link will place the content for each component in the main area. -->
  <RouterView />

  <Footer>
    <!-- This is the footer slot -->
  </Footer>
</template>

<style scoped></style>
