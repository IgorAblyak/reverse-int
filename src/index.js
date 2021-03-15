module.exports = function reverse (n) {

  let number = n.toString().split("").reverse().join("");
  let reverseNumber = parseInt(number);
  return reverseNumber;
  
}