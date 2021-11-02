<template>
  <div>


  <div class="row">
    <library-item v-for="(item, i) in cart"
                  v-on:removeMedia="$emit('removeMediaObj', $event)"
                  :elem-name="'bag'"
                  :item="item"
                  :key="i"
    ></library-item>

  </div>
    <div class=" checkOutBtn ">
      <button @click="$emit('checkOut', items)" class="btn btn-primary">Check Out
        <span class="badge bg-secondary">{{items.length}}</span>
      </button>
    </div>
    <br>

  </div>
</template>

<script>

import LibraryItem from "@/components/LibraryItem";
export default {
name: "Bag",
  props:{
    items: Array,
  },
  components: {
    LibraryItem
  },
  data() {
    return {
      //library: libraryCollection
      cart: this.items,
    }
  },
}
</script>

<style scoped>
.checkOutBtn{
  float: right;
  padding-bottom: 2rem;
}
</style>