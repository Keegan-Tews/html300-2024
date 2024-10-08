<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Variable to make the title dynamic
const title = ref('Dog Parks')
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <router-link to="/" class="navbar-brand text-white d-flex justify-content-center ml-2">{{
        title
      }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-center py-3" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/images" class="nav-link text-white">Images</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/accordion" class="nav-link text-white">Accordion</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/grid" class="nav-link text-white">Grid</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  color: black;
}
.nav-link {
  color: black;
  font-size: 2em;
}
</style>
