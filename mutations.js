//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {

  const firstWord = arr[0].toLowerCase().split("");
  const secondWord = arr[1].toLowerCase().split("");

  let isTrue;
  let isFalse;
  
  secondWord.map(word => {
    if(firstWord.includes(word)){
      isTrue = true;
    } else {
      isFalse = true;
    }
  });

  return isFalse ? false : true;
}

mutation(["Mary", "Army"])