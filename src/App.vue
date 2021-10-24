<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br><br><br><br><br>

    <h1>Inventory</h1><br><br><br>
    <library v-on:passToCart="myCart.addItem($event)" ></library>
    <h1>Cart</h1><br><br><br>
    <bag :items="myCart" v-on:removeMediaObj="myCart.removeItems($event)"
         v-on:checkOut="myCart.checkOut($event), myCart.Empty"></bag>
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
</style>
