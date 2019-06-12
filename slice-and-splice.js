function frankenSplice(arr1, arr2, n) {
  const newArr = arr2.slice();
  const firstArr = arr1.slice();

  newArr.splice(n, 0, firstArr);
  return newArr.flat();
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);



