//Check if a string (first argument, str) ends with the given target string (second argument, target).



//clear
function confirmEnding(str, target) {
  return str.endsWith(n);
}

confirmEnding("Bastian", "n");


//alternative
function confirmEnding(str, target) {
  const end = str.substring(str.length - target.length, str.length);
  return end === target || false;
}

confirmEnding("Bastian", "n");

