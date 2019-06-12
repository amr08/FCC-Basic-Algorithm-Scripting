function findLongestWordLength(str) {
  const arr = str.split(" ");  
  let longestWord = 0;
  for(var i = 0; i < arr.length; i++){  
    if(arr[i].length > longestWord){     
      longestWord = arr[i].length;
    }
  }

  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");