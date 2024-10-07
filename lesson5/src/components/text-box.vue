<script setup>
import { ref } from 'vue'

const title = ref('Dog fan')
const body = ref('You like dogs!.')
</script>

<template>
  <div class="text-box">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<style scoped></style>
