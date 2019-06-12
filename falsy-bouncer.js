//Remove all falsy values from an array.

function bouncer(arr) {
  let newArr = [];

  arr.map(value => {
    if(value){
      newArr.push(value);
    }
  });

  return newArr;
}

bouncer([7, "ate", "", false, 9]);