<template>
  <div>
    <ul class="menu">
      <li v-for="page in pages" :key="page" class="selection" :id="page">
        <router-link :to="`/${page}`">{{ page }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: ["resume", "projects", "blog"]
    }
  }
}
</script>

<style scoped>
li {
  all: unset;
  display: block;
}

.selection {
  background-color: aqua;
}
</style>