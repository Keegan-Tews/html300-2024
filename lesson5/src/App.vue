<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Head from './components/Head.vue'
import Foot from './components/Foot.vue'
import grid from './components/grid.vue'
import accordion from './components/accordion.vue'
import images from './components/images.vue'
import NotFound from './components/Not-Found.vue'

const routes = {
  '/': Home,
  '/grid': grid,
  '/accordion': accordion,
  '/images': images,
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
  <Head>
    <div>
      <slot name="head"></slot>
      <slot name="nav"></slot>
    </div>
  </Head>
  <component :is="currentView.value"></component>
</template>

<style scoped></style>
