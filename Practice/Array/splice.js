// array.splice(start, deleteCount, item1, item2, ...);
/* Removing elements */
let numbers = [10, 20, 30, 40, 50];
let removed = numbers.splice(2, 2); // Remove 2 elements starting from index 2

// console.log(numbers); // [10, 20, 50]
// console.log(removed); // [30, 40]

/* Adding elements */
let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(0 ,0,"orange","grapes") // [ 'orange', 'grapes', 'Apple', 'Banana', 'Mango' ]
// fruits.unshift("orange","grapes")  //[ 'orange', 'grapes', 'Apple', 'Banana', 'Mango' ]
fruits.splice(1,0,"kiwi",'straw')  // [ 'Apple', 'kiwi', 'straw', 'Banana', 'Mango' ]
// console.log(fruits)


/* Replacing elements */
let animals = ["Dog", "Cat", "Rabbit"];
const temp= animals.splice(1,1 ,"kutta")
console.log(animals)
console.log(temp)