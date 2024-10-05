<script setup>
import { ref } from 'vue'
import imageList from './imageList.vue'

const title = ref('images')

const images = ref([
  {
    src: 'https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  },
  {
    src: '../src/assets/med1.jpg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  },
  {
    src: '../src/assets/med2.jpg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  },
  {
    src: '../src/assets/med3.jpg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  },
  {
    src: '../src/assets/med4.jpg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  },
  {
    src: '../src/assets/med1.jpg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  },
  {
    src: '../src/assets/med2.jpg',
    alt: 'park',
    title: 'park',
    class: 'img-fluid h-100 p-0 d-block mx-auto'
  }
])
</script>

<template>
  <div class="img-container mt-5 d-flex flex-wrap gap-1 justify-content-center">
    <imageList
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
