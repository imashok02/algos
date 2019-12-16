<template>
  <div id="app">
   <Sorting/>
  </div>
</template>

<script>
import Sorting from './components/Sorting.vue'

export default {
  name: 'app',
  components: {
    Sorting
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
