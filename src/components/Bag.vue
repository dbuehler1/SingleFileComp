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
    <button @click="$emit('checkOut', items)">Check Out</button>
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

</style>