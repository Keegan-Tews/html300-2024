<script setup>
import { ref } from 'vue'
// imports the HomeImages component and Vue's ref function to manage reactivity
import HomeImages from './HomeImages.vue'
import toggleMixin from '@/mixin/toggleMixin'

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

// logs the image array to the console for debugging purposes
console.log(images.value)
</script>

<template>
  <div class="bground">
    <!-- passed the header content to CarouselImages.vue using a slot -->
    <HomeImages :images="images">
      <h1>Home</h1>
    </HomeImages>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 24px;
  color: white;
  padding-top: 10px;
  margin-bottom: 10px;
}
/* adds a background color rather than a background image */
.bground {
  background-color: #2d462f;
  min-height: 100vh;
}
</style>
