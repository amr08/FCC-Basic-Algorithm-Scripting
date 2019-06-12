
function titleCase(str) { 
  const words = str.toLowerCase().split(" "); 

  const newWords = words.map(word => {   
    let upper = word.charAt(0).toUpperCase();  
    return word.replace(word.charAt(0), upper) 
  }); 

  return newWords.join(" ");
}

titleCase("I'm a little tea pot");