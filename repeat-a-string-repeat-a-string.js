//clean solution
function repeatStringNumTimes(str, num) {
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);


//alternative
function repeatStringNumTimes(str, num) {
  const arr = [];

  for(var i = 0; i < num; i++){
    arr.push(str)
  }

  return arr.join("");
}

repeatStringNumTimes("abc", 3);