import { ref } from 'vue'

export default function () {
  const isToggled = ref(false)

  function toggle() {
    isToggled.value = !isToggled.value
  }

  return {
    isToggled,
    toggle
  }
}
