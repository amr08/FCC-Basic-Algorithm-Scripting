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