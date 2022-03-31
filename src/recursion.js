/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if ( n < 0 ){
    return null;
  }
  if (n === 0 ) {
    return 1;
  } else {
    return n * factorial( n - 1 );
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    if (Array.isArray(array[0])) {
      return arraySum(array[0]) + arraySum(array.slice(1));
    } else {
      return array[0] + arraySum(array.slice(1));
    }
  }

};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  if ( n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven( n - 2 );
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if ( n === 0) {
    return 0;
  } else if (n > 0 ) {
    return n - 1 + sumBelow(n - 1);
  } else {
    return n + 1 + sumBelow( n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var step = y - x;
  if (Math.abs(step) <= 1) {
    return [];
  } else {
    return [x + Math.sign(step)].concat(range(x + Math.sign(step),y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp > 0) {
    if (exp % 2) {
      return base * exponent(base, exp - 1);
    } else {
      return exponent(base, exp / 2) ** 2;
    }
  } else if (exp < 0 ) {
    return exponent(base, exp + 1) / base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if ( n === 1 ) {
    return true;
  } else if (n < 1 ) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 1) {
    return string;
  } else {
    return reverse(string.substring(1)) + string[0];
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length <= 1) {
    return true;
  } else if ( string[0] === string[string.length - 1]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if ( y === 0) {
    return NaN;
  }
  if (x >= 0 && y > 0) {
    if (x < y ) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  } else if (x < 0 && y > 0) {
    if (-x < y ) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  } else if (x >= 0 && y < 0) {
    if (x < -y ) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  } else {
    if (x > y ) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return - x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (x >= y) {
      return 1 + divide(x - y, y);
    } else {
      return 0;
    }
  } else if (x < 0 && y > 0) {
    if ( -x >= y ) {
      return -1 + divide( x + y, y);
    } else {
      return 0;
    }
  } else if (x > 0 && y < 0) {
    if (x >= -y) {
      return -1 + divide(x + y, y);
    } else {
      return 0;
    }
  } else {
    if (x <= y) {
      return 1 + divide(x - y, y);
    } else {
      return 0;
    }
  }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0 || y === 0) {
    return (Math.max(x,y));
  }
  return gcd(Math.min(x,y),Math.max(x,y) % Math.min(x,y));
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] === str2[0]) {
    if (str1 === '') {
      return true;
    }
    return compareStr(str1.substring(1),str2.substring(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  } else {
    return [str[0]].concat(createArray(str.substring(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return reverseArr(array.slice(1)).concat(array[0]);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  } else {
    return [value].concat(buildList(value,length-1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      return fizzBuzz(n-1).concat(['FizzBuzz']);
    } else if (n % 3 === 0) {
      return fizzBuzz(n-1).concat(['Fizz']);
    } else if (n % 5 === 0) {
      return fizzBuzz(n-1).concat(['Buzz']);
    } else {
      return fizzBuzz(n-1).concat([n.toString()]);
    }
  }
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  } else {
    return (array[0] === value) + countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    return [callback.call(null,array[0])].concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if (!Array.isArray(obj) && typeof obj === 'object'){
    var entries = Object.entries(obj);
  } else {
    var entries = obj;
  }
  if (entries.length > 1) {
    if (typeof entries[0][1] === 'object') {
      return (entries[0][0] === key) + countKeysInObj(entries[0][1], key) + countKeysInObj(entries.slice(1), key);
    } else {
      return (entries[0][0] === key) + countKeysInObj(entries.slice(1), key);
    }
  } else {
    if (typeof entries[0][1] === 'object') {
      return (entries[0][0] === key) + countKeysInObj(entries[0][1], key);
    } else {
      return (entries[0][0] === key);
    }
  }
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (Array.isArray(obj)) {
    if (obj.length > 1){
      if (typeof obj[0] === 'object') {
        return countValuesInObj(Object.values(obj[0]), value) + countValuesInObj(obj.slice(1), value);
      } else {
        return (obj[0] === value) + countValuesInObj(obj.slice(1), value);
      }
    } else {
      if (typeof obj[0] === 'object') {
        return countValuesInObj(Object.values(obj[0]), value);
      } else {
        return (obj[0] === value);
      }
    }
  } else if (typeof obj === 'object') {
    return countValuesInObj(Object.values(obj), value);
  } else if (typeof obj[0] === 'object') {
    return countValuesInObj(Object.values(obj[0]), value);
  } else if (obj.length === 1) {
    return (obj === value);
  } else {
    return (obj[0] === value) + countValuesInObj(obj.slice(1));
  }
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (typeof obj === 'object') {
    if (obj[oldKey] !== undefined) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    var entries = Object.entries(obj);
    for ([k, v] of entries){
      if (typeof v === 'object'){
        obj[k] = replaceKeysInObj(v, oldKey, newKey);
      }
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  } else {
    var a = fibonacci(n-1)
    var b = a.length;
    return a.concat(a[b-1]+a[b-2]);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n <= 1) {
    return n;
  } else {
    return nthFibo(n-1) + nthFibo(n-2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 1) {
    return [array[0].substring(0,1).toUpperCase().concat(array[0].substring(1))];
  } else {
    return [array[0].substring(0,1).toUpperCase().concat(array[0].substring(1))].concat(capitalizeFirst(array.slice(1)));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;

  if (!Array.isArray(obj) && typeof obj === 'object') {
    var entries = Object.entries(obj);
    for (var [k, v] of entries) {
      sum += nestedEvenSum(v);
    }
  }

  if (typeof obj === 'number') {
    return (obj % 2 ? 0 : obj);
  } else if (typeof obj === 'string') {
    return 0;
  }

  return sum;

};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (Array.isArray(array[0])) {
    return flatten(array[0]).concat(flatten(array.slice(1)));
  } else {
    return [array[0]].concat(flatten(array.slice(1)));
  }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    var obj = {};
  }
  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]]++;
  }
  if (str.length > 1) {
    obj = letterTally(str.substring(1),obj);
  }
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  }
  if (list.length === 1) {
    return list;
  }

  if (list[0] === list[1]) {
    list.splice(1, 1);
    list = compress(list);
  } else {
    list = [list[0]].concat(compress(list.slice(1)));
  }

  return list;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  array[0].push(aug);
  return [array[0]].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }

  if (array[0] === array[1] && array[0] === 0) {
    array.splice(1, 1);
    array = minimizeZeroes(array);
  } else {
    array = [array[0]].concat(minimizeZeroes(array.slice(1)));
  }

  return array;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (this.sign === undefined) {
    this.sign = -1;
  }
  this.sign *= -1;
  return [this.sign*Math.abs(array[0])].concat(alternateSign(array.slice(1)));

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var trans = ['zero','one','two','three','four','five','six','seven','eight','nine'];

  if (!Array.isArray(str)) {
    var words = str.split(' ');
  } else {
    var words = str;
  }
  if (words.length === 0) {
    return [];
  }

  var n = parseInt(words[0]);

  if (!(Number.isNaN(n))) {
    words[0] = trans[n];
  }

  return [words[0]].concat(numToText(words.slice(1))).join(' ');

};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if (node === undefined) {
    node = document.body;
  }
  if (node === null) {
    return 0;
  }
  var count = 0;
  if (node.tagName.toLowerCase() === tag.toLowerCase()) {
    count = 1;
  }
  if (node.hasChildNodes()) {
    count = count + tagCount(tag, node.firstElementChild);
  }
  var next = node.nextElementSibling;
  if (next !== null) {
    count = count + tagCount(tag, next);
  }

  return count;

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (array.length === 0) {
    return null;
  }
  var index = Math.floor(array.length / 2);
  if (array[index] === target) {
    return index;
  }
  if (array[index] > target) {
    return binarySearch(array.slice(0, index), target);
  }
  if (array[index] < target) {
    var index2 = binarySearch(array.slice(index + 1), target);
    if (index2 === null) {
      return null;
    } else {
      return index2 + index + 1;
    }

  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  }
  var q = Math.floor(array.length / 2);
  var array1 = mergeSort(array.slice(0, q));
  var array2 = mergeSort(array.slice(q));
  var j = 0;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] <= array2[0]) {
      array2.unshift(array1[i]);
    } else if (array1[i] >= array2[array2.length - 1]) {
      array2.push(array1[i]);
    } else {
      for (j; j < array2.length - 1; j++) {
        if (array1[i] >= array2[j] && array1[i] <= array2[j + 1]) {
          array2.splice(j + 1, 0, array1[i]);
          break;
        }
      }
    }
  }
  return array2;

};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var theClone = [];
    for (var i = 0; i < input.length; i++) {
      theClone.push(clone(input[i]));
    }
    return theClone;
  } else if (typeof input === 'object') {
    var theClone = {};
    var entries = Object.entries(input)
    for (var i = 0; i < entries.length; i++) {
      theClone[entries[i][0]] = clone(input[entries[i][0]]);
    }

    return theClone;
  } else {
    return input;
  }
};
