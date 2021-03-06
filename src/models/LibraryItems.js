function LibraryItem(media, removeFunction){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;
    media.favorite = false;
    media.favoriteToggle = function(){
        this.favorite = !this.favorite;
    }
    media.isFavorite = function(){
        return this.favorite === true;
    }

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }



    //if(removeFunction){
    // option 1
    // media.remove = function(){
    //     removeFunction(this);
    // }

    //}

    // option 2 or 3
    //media.remove = removeFunction || (() => {});
    //                             || in case a function wasn't provided
    media.remove = removeFunction || function(){};

    return media;
}

function Book(title, pages, img){
    this.img = img;
    this.pages = pages;
    this.title = title || 'Default Title';
    this.id = Math.floor(Math.random() * 10e16);
}

// same as above using class syntax
class Movie{
    constructor(title, runningTime, img){
        this.img = img;
        this.runningTime = runningTime;
        this.title = title || 'Default Title';
        this.id = Math.floor(Math.random() * 10e16);
    }
}

class Album{
    constructor(title, artist, trackCount, img){
        this.img = img;
        this.artist = artist;
        this.trackCount = trackCount;
        this.title = title || 'Default Title';
        this.id = Math.floor(Math.random() * 10e16);
    }
}

class Song{
    constructor(title, artist, img){
        this.img = img;
        this.artist = artist;
        this.title = title;
        this.id = Math.floor(Math.random() * 10e16);
    }
}


// export multiple classes/functions/objects/etc
export {LibraryItem, Book, Movie, Album, Song}