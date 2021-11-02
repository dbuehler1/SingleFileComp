<template>
  <div class="searchBar">

    <div class="search input-group mb-3 ">

      <label class="input-group-text" for="search"><i class="fas fa-search"></i></label>
      <input class="form-control col-md-2" id="search" type="text" v-model="searchTerm">
      <button class="btn btn-primary" type="button" @click="$emit('searchList', searchTerm.toLowerCase())">Search</button>
    </div>
    <h1 id="inventoryHeader">Inventory</h1><br><br>

  </div>


</template>

<script>

export default {
name: "SearchBar",
  data(){
    return{
      searchTerm: '',
    }
  }
}

</script>

<style scoped>
.searchBar{


}
</style>