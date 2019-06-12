
function getIndexToIns(arr, num) {
  const newArr = arr.concat(num);
  
  const sorted = newArr.sort((a,b) => {
    return a - b;
  });

  return sorted.indexOf(num);
}

getIndexToIns([40, 60], 50);