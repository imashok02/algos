<template>
  <div class="hello">
    <h1>See the Sorting Algos in Action</h1>

    <div class="hello" v-bind:key="value" v-for= "value in main_array">
      <li>{{value}}</li>
      
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Sorting',
  data() {
    return {
      main_array: []
    }
  },
  created () {
    this.resetArray();
  },
  methods: {
    resetArray () {
      for(var i = 0; i < 40; i++){
        this.main_array.push(this.randomValues(5, 100));
      }
    },
    randomValues(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
