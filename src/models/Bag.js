
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
        console.log(item);
        arr.splice(arr.indexOf(item), 1);
        return arr;
    }
    arr.checkOut = function(items){
        console.log(arr);
        items.forEach(item => item.checkOut());
        items.forEach(item => arr.splice(item), 1);
        return arr;
    }
    return arr;
}
export default BagCollection;