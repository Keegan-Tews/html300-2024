import { ref } from 'vue'

export default function toggleMixin(initialLength) {
  const isToggled = ref(new Array(initialLength).fill(false))

  function toggle(index) {
    isToggled.value[index] = !isToggled.value[index]
  }
  return {
    isToggled,
    toggle
  }
}
