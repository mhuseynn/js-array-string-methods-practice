console.log("*********Array tasks**********")
// Write a function that takes an array and returns a new array with the last item removed.
function remove(arr)
{
    arr.pop()
    return arr;
}
console.log(remove([1,2,3]));

// Write a function that takes an array and returns the length of items it has.
function mylength(arr)
{
    return arr.length;
}
console.log(mylength([1,2,3]));

// Write a function that takes an array and an item, returns the array with the item added to the end of array.
function add(arr,item)
{
    arr.push(item)
    return arr;
}
console.log(add([1,2,3],4));

// Write a function that takes an array and an item, returns the array with the item added to the beginning of array.
function addbegin(arr,item)
{
    arr.unshift(item);
    return arr;
}
console.log(addbegin([1,2,3],4));

// Write a function that takes an array of words and returns a string of the words seperated by ,
function myseperate(arr)
{ 
    return arr.join(",");
}
console.log(myseperate(["salam","dunya"]));

// Write a function that takes an array and two indexes (start and end). Return an array consisting of items between the given indexes.
function start(arr,start,end)
{
    return arr.slice(start,end);
}
console.log(start([1,2,3,4,5,6,7,8],1,4));

// Write a function that takes an array and an index, returns the item at given index.
function myindex(arr,index)
{
    return arr[index];
}
console.log(myindex([1,2,3,4,5,6,7,8],4));

// Write a function that takes an array and an item, removes that item from the array without leaving undefined items, returns the new array.
function remove_item(arr,item)
{
    let index=arr.indexOf(item);
    arr.splice(1,1);
    return arr;
}
console.log(remove_item([1,2,3],2));


