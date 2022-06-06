<template>
  <div>
    <ul class="menu" @mousemove="mousemove">
      <li @click="router.push(page)" v-for="page in pages" :key="page" class="selection" :id="page">
        <img src="../assets/folder.png" alt="folder" class="image">
        <p>{{ page }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const pages = ref(["resume", "projects", "blog"])
const router = useRouter()

const mousemove = (e) => {
  console.log(e.clientX, e.clientY)
}
</script>

<style scoped>
ul, li {
  all: unset;
  display: block;
}
.menu {
  background-color: orange;
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-flow: row nowrap;
  /* animation: spin 10s infinite linear; */
}
.selection {
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
  margin: 2rem 2rem;
  background-color: paleturquoise;
  /* animation: spin 10s infinite linear reverse; */
}
.image {
  width: 10rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}
#resume {
  align-self: center;
}
#projects {
  align-self: flex-end;
}
#blog {
  align-self: center
}

@keyframes spin {
  100% {
    transform: rotate(-360deg);
  }
}
</style>