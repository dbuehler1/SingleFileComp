<template>
  <div class="card col-md-2" :class="item.isAvailable() ? 'border-success' : 'border-warning'" style="border-width: 3px;">

    <p>{{item.type}}</p>
    <!--                <h3 class="card-title">{{item.title}}</h3>-->
    <!--                <p class="card-text" v-if="item.constructor.name == 'Book'">Pages: {{item.pages}}</p>-->
    <!--                <p class="card-text" v-if="item.runningTime">Running Time: {{item.runningTime}}</p>-->
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
<!--      <button @click="item.checkOut()" class="btn btn-secondary">Check Out</button>-->
<!--      <button @click="item.checkIn()" class="btn btn-secondary">Check In</button>-->
      <button @click="$emit('removeMedia', item)" class="btn btn-danger" v-if="elemName ==='bag'">Remove</button>
      <button @click="$emit('checkIn', item)" class="btn btn-info" v-if="elemName ==='library' && item.status === 'out'">Check In</button>
<!--      <button @click="removeFunction(item)" class="btn btn-warning">Remove Me</button>-->
      <button @click="$emit('addToCart', item)" class="btn btn-success" v-if="elemName ==='library' && item.status === 'in'">Add To Cart</button>
      <button @click="item.favoriteToggle()" class="btn btn-warning" :class="item.isFavorite() ? 'border-success' : 'border-danger'">Favorite</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";
import Song from "@/components/Song";

export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album,
    Song
  },
  props: {
    elemName: String,
    item: Object,
    removeFunction: Function,
  },
  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

</style>