<template>
  <div class="movie">
    <img :src="item.img" class="card-img-top">
    <p>Movie</p>
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Running Time: {{item.runningTime}} Minutes</p>

  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "Movie",
  props: {
    item: Movie
  },
}
</script>

<style scoped>

</style>