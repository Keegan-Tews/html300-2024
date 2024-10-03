<script setup>
import { ref, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Grid from './components/Grid.vue'
import Accordion from './components/Accordion.vue'
import Images from './components/Images.vue'
import NotFound from './components/Not-Found.vue'

const routes = {
  '/': Home,
  '/grid': Grid,
  '/accordion': Accordion,
  '/images': Images,
  '/not-found': NotFound
}

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <Navbar>
    <template #page-title>
      <h1 class="text-center">{{ title }}</h1>
    </template>
    <template #page-info>
      <p class="text-center">This is a simple Vue app that demonstrates how to use Vue</p>
    </template>
    <!-- This is the header slot -->
  </Navbar>
  <!-- Place components in the area of the main element so that each nav link will place the content for each component in the main area. -->
  <component :is="currentView.value"></component>

  <Footer>
    <!-- This is the footer slot -->
  </Footer>
</template>

<style scoped></style>
