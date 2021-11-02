<template>
  <div id="app">
    <div class="body col-md-8">
      <img alt="Vue logo" src="./assets/logo.png"><br><br><br><br><br>


      <library v-on:passToCart="myCart.addItem($event)"
               v-on:checkIn="$emit(myCart.checkIn($event))"></library>
      <h1>Cart</h1><br><br><br>
      <bag :items="myCart" v-on:removeMediaObj="myCart.removeItems($event)"
           v-on:checkOut="myCart.checkOut($event), myCart.Empty"
      ></bag>
    </div>



  </div>
</template>

<script>

import Library from "@/components/Library";
import Bag from "@/components/Bag";
import BagCollection from "@/models/Bag";



export default {
  name: 'App',
  data(){
    return {
      myCart: new BagCollection,
    }

  },
  components: {
    Library,
    Bag,
  }
}
</script>

<style>
h1 {
  float: left;
  margin-left: 2rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.body{
  margin-left: auto;
  margin-right: auto;
  background-color: #f1f3f4;
  border-radius: 15px;
}
</style>
