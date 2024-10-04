<script setup>
import { ref } from 'vue'

// Prop with type validator and default value
const prop = defineProps({
  scr: string,
  alt: string,
  title: string,
  class: string,
  index: number
})

let hasBoarder = ref(false)
function toggleBoarder(i, index) {
  this.hasBoarder = !this.hasBoarder
  if (this.hasBoarder === true) {
    console.log(index + 'is active')
    i.target.style.border = '2px solid red'
  } else {
    console.log(index + 'is not active')
    i.target.style.border = 'none'
  }
}
</script>

<template>
  <div class="col-3">
    <img
      :key="index"
      :src="prop.src"
      :alt="prop.alt"
      :title="prop.title"
      :class="prop.class"
      @click="toggleBoarder($event, index)"
    />
  </div>
</template>

<style scoped></style>
