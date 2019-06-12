//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//I tried with for loop which only half worked, had to google/use hint on this one
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }

  return newArr;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)