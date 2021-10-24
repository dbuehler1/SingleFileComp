
function BagCollection(){
    let arr = [];

    arr.addItem = function(item){
        if(arr.indexOf(item) < 0){
            arr.push(item);
        }

        // allows us to chain methods
        return arr;
    }

    arr.removeItems = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);
        return this;
    }
    arr.checkOut = function(items){
        items.forEach(item => item.checkOut());
        items.forEach(item => items.removeItems(item));
        return arr;
    }
    return arr;
}
export default BagCollection;