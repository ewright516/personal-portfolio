<template>
  <div @click="router.push(page)" class="selection" :id="page" ref="folder" :style="css">
    <img src="../assets/folder.png" alt="folder" class="image">
    <p>{{ page }}</p>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
 page: String
})

const folder = ref(null)
const position = ref({
  x: 0,
  y: 0,
})
const positionUser = ref({
  x: 0,
  y: 0,
})
const css = computed(() => {
  return `left: ${position.value.x}px; top: ${position.value.y}px;`
})
</script>

<style scoped>
.selection {
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
  position: absolute;
  margin: 2rem 2rem;
  background-color: paleturquoise;
}
.image {
  width: 10rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}
</style>