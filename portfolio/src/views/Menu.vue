<template>
  <div>
    <ul class="menu">
      <li v-for="page in pages" :key="page">
        <MenuItem :page="page"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import MenuItem from '../components/MenuItem.vue'

const pages = ref(["resume", "projects", "blog"])
const router = useRouter()
</script>

<style scoped>
ul, li {
  all: unset;
  display: block;
}
.menu {
  background-color: orange;
  height: 80vh;
}
</style>