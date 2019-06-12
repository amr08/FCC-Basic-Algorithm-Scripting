//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  const newArr = arr.concat(num);
  
  const sorted = newArr.sort((a,b) => {
    return a - b;
  });

  return sorted.indexOf(num);
}

getIndexToIns([40, 60], 50);