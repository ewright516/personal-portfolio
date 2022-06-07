<template>
  <div>
    <ul class="menu" @mousemove="mousemove">
      <li v-for="page in pages" :key="page" class="selection" :id="page" @mousedown="mousedown" @mouseup="mouseup">
        <img src="../assets/folder.png" alt="folder" class="image">
        <p>{{ page }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  data() {
    return {
      pages: ["resume", "projects", "blog"],
      selected: null,
      currentX: null,
      currentY: null,
    }
  },
  methods: {
    mousemove(e) {
      if (this.selected) {
        let displX = e.clientX - this.currentX
        let displY = e.clientY - this.currentY
        console.log(displX, displY)
        this.selected.style.left = `${parseInt(this.selected.style.left - "px") + displX}px`
        this.selected.style.top = `${parseInt(this.selected.style.top - "px") + displY}px`
        this.currentX = e.clientX
        this.currentY = e.clientY
      }
    },
    mousedown(e) {
      this.selected = e.target
      this.currentX = e.clientX
      this.currentY = e.clientY
      console.log(this.selected.style, "selected at", e.clientX, e.clientY)
    },
    mouseup(e) {
      console.log(this.selected, "let go at", e.clientX, e.clientY)
      this.selected = null
      this.currentX = null
      this.currentY = null
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
  width: 50rem;
  height: 50rem;
/*   display: flex;
  flex-flow: row nowrap; */
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
  position: absolute;
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
  left: 300px;
  top: 200px;
}
#projects {
  left: 0px;
  top: 200px;
}
#blog {
  left: 150px;
  top: 0px
}
/* #resume {
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
} */
</style>