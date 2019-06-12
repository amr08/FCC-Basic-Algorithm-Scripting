
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }

  return newArr;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)