<template>
  <div>
    <ul class="menu" @mousemove="mousemove">
      <li v-for="page in pages" @click="singleClick" @dblclick="router.push(page.name)" :key="page.name" class="selection" :id="page.name" @mousedown="mousedown" @mouseup="mouseup" :style="page.css" :ref="page.name">
        <img src="../assets/folder.png" alt="folder" class="image">
        <p>{{ page.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  data() {
    return {
      pages: [
        {
          name: "resume", 
          css: "left: 300px; top: 200px;"
        }, 
        {
          name: "projects", 
          css: "left: 0px; top: 200px;"
        },
        {
          name: "blog", 
          css: "left: 150px; top: 0px;"
        }],
      selected: null,
      offsetX: null,
      offsetY: null
    }
  },
  methods: {
    mousemove(e) {
      if (this.selected) { 
        this.selected.style.left = `${e.clientX - this.offsetX}px`
        this.selected.style.top = `${e.clientY - this.offsetY}px`
        console.log(this.selected.style.left, this.selected.style.top)
      }
    },
    mousedown(e) {
      this.selected = e.target
      this.offsetX = e.clientX - parseInt(this.selected.style.left.replace('px', ''))
      this.offsetY = e.clientY - parseInt(this.selected.style.top.replace('px', ''))
      console.log(this.selected.style, "selected at", e.clientX, e.clientY)
    },
    mouseup(e) {
      console.log(this.selected, "let go at", e.clientX, e.clientY)
      this.selected = null
      this.offsetX = null
      this.offsetY = null
    },
    singleClick(e) {
      e.path[1].children[0].style.outline = ''
      e.path[1].children[0].style.zIndex = ''
      e.path[1].children[1].style.outline = ''
      e.path[1].children[1].style.zIndex = ''
      e.path[1].children[2].style.outline = ''
      e.path[1].children[2].style.zIndex = ''

      e.target.style.outline = 'dashed thick'
      e.target.style.zIndex = '9'

      console.log(e.target.style)
    }
  },
  setup() {
    const router = useRouter()

    return { router }
  }
}
</script>

<style scoped>
ul, li {
  all: unset;
  display: block;
}
.menu {
  background-color: orange;
}
.selection {
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
  position: absolute;
}
.image {
  width: 10rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}
</style>