<script setup>
import { ref } from 'vue'
// imports the HomeImages component and Vue's ref function to manage reactivity
import HomeImages from './HomeImages.vue'

// array of images for the carousel that will display in the carousel component
const images = ref([
  {
    src: '../src/assets/med1.jpg',
    alt: 'Park',
    title: 'Park',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    src: '../src/assets/med2.jpg',
    alt: 'Park',
    title: 'Park',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    src: '../src/assets/med3.jpg',
    alt: 'Park',
    title: 'Park',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
])
</script>

<template>
  <div class="img-container mt-5 d-flex flex-wrap gap-1 justify-content-center">
    <HomeImages
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      :title="image.title"
      :class="image.class"
      :index="index"
    />
  </div>
</template>

<style scoped></style>
