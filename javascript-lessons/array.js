// Method - function that belongs to an object(array)
// .at(index) - access an element using its index.
console.log("Fruit:", fruits.at(4));
console.log("Fruit:", fruits.at(7));

// .join(seperator) - combine all the elements in a string
const joinedFruits = fruits.join("-");
console.log("Joined Fruits:", joinedFruits);

// indexOf = case sensitive
// lastIndexof = finds the last index of a duplicated element
// includes = case sensitive

// push = adds element to first index
// unshift = adds el to last index

// pop = removes the last element
// shift = removes the first element
// splice
// slice

// Sorting Elements
// .sort() - sort the array in alphabetical order/numerical order.
fruits.sort();
console.log("Fruits:", fruits);

// .sort().reverse() - sort in alphabetical order/numerical order first then reverse it.
fruits.sort().reverse();
console.log("Fruits:", fruits);

// .reverse() - sort them in reverse order.
let numbers = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
numbers.reverse();
console.log("Numbers:", numbers);

let array = ["sd", 1, { id: 2 }];
console.log(array);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

// typeof - check the data type of a variable
console.log("Data Type of Odd:", typeof odd);

// .concat() - create a new array by merging two array
let oddEvenCombined = odd.concat(even);
console.log("Odd and Even:", oddEvenCombined);

// .toString() - convert an array to a comma-seperated string
console.log("Odd and Even in String", oddEvenCombined.toString());

// .forEach() - iterate over an array, and in each iteration execute a function.
console.log("Even:", even);
even.forEach(function (number) {
  console.log("Number:", number);
});

// .map() - create a new array by applying a function to the original array.
console.log("Even:", even);
let squaredEvenArray = even.map(function (number) {
  return number * number;
});
console.log("Squared Even Numbers:", squaredEvenArray);

let newEvenNum = oddEvenCombined.filter((num)=> num %2 === 0)
console.log(newEvenNum)

// .filter() - create a new array with elements that passed the test condition.
console.log("Numbers:", numbers);
numbers.sort();
console.log("Sorted Numbers:", numbers);
// Modulo/Modulus = %
console.log(9 % 2 == 0);
// Even = False/0
// Odd = True/1
let filteredEvenNumbers = numbers.filter(function (number){
    return number % 2 == 0
});
console.log("Filtered Even Numbers:", filteredEvenNumbers)

let oddEvenNumbers = numbers.filter(function (number){
    return number % 2 == 1
});
console.log("Filtered Odd Numbers:", oddEvenNumbers)

// .every() - return true if all elements pass the test condition.
console.log("Numbers:", numbers);
let isEveryElementGreaterThanOrEqualToZero = numbers.every(function (number){
    return number >= 0
});
console.log("Is every element greater than or equal to 0?", isEveryElementGreaterThanOrEqualToZero);

// .some() - return true if atleast one element passed the test condition.
let result = numbers.some(function (number){
    return number == 5
});
console.log("Is there a 5 inside of the numbers array?", result);

// .reduce() - combine elements into a single value.
// accumulator - total
let total = numbers.reduce(function (accumulator, currentElement){
    return accumulator + currentElement
}, 0)
// accumulator = 45
// currentElement = 9
console.log("Total:", total)

// .fill() - replace all the element in an array
let numbers_v2 = ["One", "Two", "Three"];
let arrayOfNumber10 = numbers_v2.fill(10);
console.log("Array of 10:", arrayOfNumber10)

// .flat() - remove the nesting
let nestedNumbers = [[1, 2, 3], [4, 5, 6]];
console.log(nestedNumbers);
console.log("Not Nested Number:", nestedNumbers.flat());

// .find() - return the first element that pass the test condition.
let firstNumberGreaterThanFive = numbers.find(function (number){
    return number > 5;
})
console.log("First number greater than five" , firstNumberGreaterThanFive);

// .findIndex() - return the first index of the element that pass the test condition.
console.log(numbers)
let findIndexResult = numbers.findIndex(function (number){
    return number > 5;
})
console.log("Index of the first number greater than five is", findIndexResult);