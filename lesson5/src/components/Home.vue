<script setup>
import { ref } from 'vue'

const name = ref('Home')
</script>

<template>
  <div>
    <h1 class="nav">{{ name }}</h1>
  </div>
</template>

<style scoped>
.nav {
  color: blue;
  font-size: 20px;
  text-align: center;
}
</style>
