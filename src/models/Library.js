import {LibraryItem, Song, Movie} from "@/models/LibraryItems";
import axios from "axios";
function LibraryCollection(){
    let arr = [];


    arr.addItem = function(item){
        this.push(new LibraryItem(
            item,

            ((collection) => function(){
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this) // "this" refers to the array/collection
        ));
        // allows us to chain methods
        return this;
    }

    arr.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    arr.removeItem = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);
        return this;
    }
    arr.checkIn = function(item){
        console.log(arr);
        item.checkIn();
        return arr;
    }

    arr.searchMedia = function(searchText){
        arr.splice(0);
        // console.log(searchText);

        let url='https://itunes.apple.com/search';

        let config = {
            params: {
                term: searchText,
                limit: 20,
            }
        }
        axios.get(url, config)
            .then((response) => {
                for(let i = 0; i < response.data.results.length; i++){
                    console.log(response.data.results[i].kind);
                    console.log(response.data.results[i].trackName);
                    if(response.data.results[i].kind==='song'){
                        arr.addItem(new Song(response.data.results[i].trackName, response.data.results[i].artistName, response.data.results[i].artworkUrl100));
                        // console.log(response.data.results[i].trackName);
                    }
                    else if(response.data.results[i].kind==='feature-movie'){
                        arr.addItem(new Movie(response.data.results[i].trackName, Math.round(response.data.results[i].trackTimeMillis / 60000),
                            response.data.results[i].artworkUrl100));
                        console.log(response.data.results[i].trackTimeMillis);
                    }
                }
            })



    }

    return arr;
}

export default LibraryCollection;