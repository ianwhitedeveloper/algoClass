//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function toZero(n) {
  while (n >= 0) {
    console.log(n);
    n -= 1;
  }
}

toZero(10);
//2. Next, try looping just like above except using recursion
function toZero(n) {
  console.log(n);
  if (n === 0) {
    return 0;
  }
  return toZero(n - 1);
}
toZero(10);
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, value) {
  let result = 1;
  while(base > 0) {
    result *= value;
    base -= 1;
  }
console.log(result);
}

exponent(3, 2);
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentiate(x, n) {
  if(n == 0) {
        return 1;
    }
    return x * exponentiate(x, n - 1);
}
// console.log(exponentiate(2,3))
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(array, number) {
  if (array.length === 1) {
    return array[0] * number;
  }
  return [array.splice(0, 1) * number].concat(recursiveMultiplier(array, number));
}
console.log(recursiveMultiplier([2,4,6], 2))
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(array) {
   if (array.length === 1) {
     return array[0];
   }
  return [array.pop()].concat(recursiveReverse(array));
}
console.log(recursiveReverse([2,4,6]));
