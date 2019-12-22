<template>
  <div class="hello">
    <h1>See the Sorting Algos in Action</h1>

    <button class="btn" v-on:click="resetArray()">Reset</button>
    <button class="btn" v-on:click="mergeSort()">Merge Sort</button>
    <button class="btn" onclick="">Bubble Sort</button>
    <button class="btn" onclick="">Quick Sort</button>
    <button class="btn" onclick="">Heap Sort</button>
    <div></div>

    <div class="value-block" v-bind:style="{ height: value + 'px', backgroundColor: 'blue' }" v-bind:key="value[i]" v-for= "value in main_array"></div>
  
  </div>
</template>

<script>
import * as Algos from '../SortingAlgos.js'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default {
  name: 'Sorting',
  component: 'Algos',
  data() {
    return {
      main_array: [],
    }
  },
  created () {
    this.resetArray();
  },
  methods: {
    resetArray () {
      var arr = [];
      for(var i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
        arr.push(this.randomValues(5, 100));
        this.main_array = arr;
      }
    },
    randomValues(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // Sorting Algos

    mergeSort () {
      const animations = Algos.getMergeSortAnimations(this.main_array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('value-block');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }

    },
    bubbleSort () {

    },
    quicksort () {

    },
    heapSort () {

    },
    selectionSort () {

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
  background-color: red;
  display: inline-block;
  margin-left: 2px;
  margin-right: auto;
  text-align: center;
  height: 5px;
  margin-top: 2px;
  border: none;
  width: 5px;
}
.digit {
  color: white;
}
.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
}
</style>
