<template>
  <div class="song">
    <img :src="item.img" class="card-img-top">
    <p>Audio</p>
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Artist: {{item.artist}}</p>
    <p class="card-text">{{item.type}}</p>

  </div>
</template>

<script>
import {Song} from "@/models/LibraryItems";

export default {
name: "Song",
  props: {
    item: Song
  },
}
</script>

<style scoped>

</style>