<template>
  <div class="hello">
    <h1>See the Sorting Algos in Action</h1>

    <div class="value-block" v-bind:key="value[0]" v-for= "value in main_array">
      <li class="digit">{{value}}</li>
      
    </div>

    <button onclick="this.resetArray"></button>
  
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
      for(var i = 0; i < 20; i++){
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
.value-block {
  width: 200px;
  background-color: red;
  display: block;
  margin-left: 10px;
  margin-right: auto;
  text-align: center;
  height: 30px;
  margin-top: 10px;
}
.digit {
  color: white;
}
</style>
