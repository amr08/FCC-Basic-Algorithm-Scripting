function factorialize(num) {
  let numArr = [];

  for(var i = 0; i <= num; i++){
    i === 0 ? numArr.push(1) : numArr.push(i);
  }

  const fact = numArr.reduce((a,b) => {
    return a * b;
  });

  return fact;
}

factorialize(5);