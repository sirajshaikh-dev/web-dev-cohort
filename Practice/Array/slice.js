const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 4)); // [20, 30, 40] (excludes index 4)
console.log(numbers.slice(2));    // [30, 40, 50] (extracts from index 2 to end)
console.log(numbers.slice(-3));   // [30, 40, 50] (negative index starts from end)
console.log(numbers.slice(1, -1)); // [20, 30, 40] (excludes last element)
console.log(numbers.slice());     // [10, 20, 30, 40, 50] (copies entire array)
