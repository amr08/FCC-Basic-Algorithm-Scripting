function reverseString(str) {
  const reversedString = str.toString().split("").reverse().join("");
  return reversedString;
}

reverseString("hello");