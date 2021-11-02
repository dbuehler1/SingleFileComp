<template>
  <div class="p-4">
    <div class="search">

      <search-bar class="col-md-10 " v-on:searchList="library.searchMedia($event)"></search-bar><br>
    </div>
    <div class="row">



      <library-item class="p-2" v-for="(item, i) in library"
                    :item="item"
                    :elem-name="'library'"
                    v-on:addToCart="$emit('passToCart', $event)"
                    v-on:checkIn="library.checkIn($event)"
                    :remove-function="function(item){library.removeItem(item)}"
                    :key="i"
      ></library-item>
      <!--    <div class="card">-->
      <!--      <p>Checked out: {{library.checkedOutItems().length}}</p>-->
      <!--    </div>-->

    </div>
</div>

</template>

<script>
import LibraryCollection from "@/models/Library";
import {Book, Movie, Album} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";
import SearchBar from "@/components/SearchBar";


export default {
  name: "Library",
  components: {
    LibraryItem,
    SearchBar
  },
  data() {
    return {
      //library: libraryCollection
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 200))
          .addItem(new Movie('Paw Patrol!', 78))
          .addItem(new Movie('Harriet', 122))
          .addItem(new Book('Brown Bear, Brown Bear', 90))
          .addItem(new Album('Killjoy', 'Fox Stevenson', 13))
    }
  },

}
</script>

<style scoped>

</style>