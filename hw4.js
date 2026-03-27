
// HW4 JavaScript Foundations



// ------------------------------------------------------------
// Section 1: Basic Rules and Data Types
// ----------------------------------------------------------

// Exercise 1: Formatting and Naming
// Fixed: variable renamed to camelCase, proper indentation, semicolons added
let thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  // code block
}

console.log(thisIsANewVariable);


// Exercise 2: Defining Core Data Types

// A string using backtick template literal
let myName = `Ahmad`;

// A float number
let myFloat = 3.14;

// A boolean value of true
let isActive = true;

console.log(myName);
console.log(myFloat);
console.log(isActive);


// Exercise 3: Single-Line Comments

// currentScore stores the player's current score in the game
let currentScore = 95;
console.log(currentScore);


// Exercise 4: Equality Comparison

// == checks value equality only
console.log('100' == 100);   // true  - same value, different type

// === checks strict equalityy
console.log('100' === 100);  // false - same value, but different types


// ------------------------------------------------------------
// Section 2: Conditionals and Control Flow
// ------------------------------------------------------------

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule;

// Ternary: condition ? valueIfTrue : valueIfFalse
schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule); // "Work day"


// Exercise 6: If/Else Structure
let userAge = 16;

if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}


// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;

// Both condition must be true for the block to execute
if (hasPermission === true && itemCount < 5) {
  console.log("Ready to process");
}


// Exercise 8: For Loop (runs exactly 5 times)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Exercise 9: Loop Control with break
for (let i = 0; i <= 9; i++) {
  if (i === 7) {
    break; // terminates the loop when i reaches 7
  }
  console.log(i);
}


// Exercise 10: do while Loop (runs at least once, never repeats)
let counter = 10;

do {
  console.log("Running once");
} while (counter < 10); // the condition is false from the start so loop only runs once


// ------------------------------------------------------------
// Section 3: Functions and Data Structures
// ---------------------------------------------------------

// Exercise 11: Function Definition
function calculateArea(width, height) {
  return width * height;
}

let resultArea = calculateArea(5, 10);
console.log(resultArea); // 50


// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];

// Add 'Grape' to the end of the array
fruitList.push('Grape');

// Remove the first item ('Apple') from the array
fruitList.shift();

// Log the index number of 'Banana' (now at index 0 after shift)
console.log(fruitList.indexOf('Banana')); // 0


// Exercise 13: Array Copying
// slice() performs a SHALLOW copy of the array.
// i should be awar that objects inside array are still shared

let originalData = [1, 2, 3, 4, 5];

// slice() with no arguments copies the entir array
let clonedData = originalData.slice();

console.log(clonedData); //  [1, 2, 3, 4, 5]


// Exercise 14: Object Constructor
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

console.log(new Animal("Canine", "Woof")); // for Animal { species: 'Canine', sound: 'Woof' }


// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");

// Store both instances inside an array
let animalArray = [dog, cat];

console.log(animalArray);
console.log(animalArray[0].species); // "for Canine"
console.log(animalArray[1].sound);   // "for Meow"