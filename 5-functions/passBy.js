/**
 * Pass By Value
 */

let myVar = 20;

// function parameter a are local variables to the functions
//numParam = 20
function passBy(numParam) {
    numParam = numParam * 10;
    return numParam;
}

console.log(myVar)
console.log(passBy(myVar)) // 200
console.log(myVar) // 20

let myVar2 = 20

function passBy2(x) {
  x = x * 10
  return x
}

passBy2(myVar2) // 200
console.log(myVar2) // 20


let a = 5
a = 20

let b = a // a gave b the value of itself

a += 5

b += 10

console.log("a: ", a) // 25
console.log("b: ", b) // 30

/**
 * Pass By Reference 
 */

let someObj = { value: 20, type: "Number"} //asd9f87239458735sdf

let anothaObj = someObj // asd9f87239458735sdf

someObj.value *= 5

// these 2 variables point to the same place in memory
console.log(someObj)
console.log(anothaObj)

// Example 2
// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(numArray)
// let newArray = returnEven(numArray)
// console.log(newArray) // not a new array at all, dealing with the same array in reference

// console.log(numArray)


// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     let newArray = []; // new reference

//     array.forEach((element) => {
//         if (element % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(numArray); // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray); // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray); // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]


let numArray = [
  { value: 10 },
  { value: 20 },
  { value: 0 },
  { value: -10 }, 
  { value: 15 }, 
  { value: 28 }, 
  { value: -1000 },
  { value: 42 },
  { value: 7 }
];

function returnEven(array) {
  let newArray = [];

  array.forEach((element) => {
      if (element.value % 2 == 0) {
          newArray.push(element);
      }
  });

  return newArray;
}

let newArray = returnEven(numArray);
console.log("newArray: ", newArray)
console.log("numArray: ", numArray)

newArray[0].value += 10;
console.log(numArray[0])

numArray[3].value = 67;

let myEvenValue = newArray[1].value;
myEvenValue /= 2;

console.log("==========================")
console.log("==========================")

// Array Example
// Assume these variables are reset for each of the examples below.
let numbers = [[1], [2], [3]];
let numbersCopy = [];

// For Loops
for (let i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
}

console.log("numbers: ", numbers)

console.log("numbersCopy: ", numbersCopy)



// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let cell = 1
// let row = 1
// for (let i = 0; i < csvStr.length; i++) {

//     if (csvStr[i] === ','){
//         cell++
//         continue
//     }

//     if (csvStr[i] === "\n") {
//     cell = 1
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//     continue
//     }

//     switch (cell) {
//         case 1:
//             cell1 += csvStr[i]
//         break
//         case 2: 
//             cell2 += csvStr[i]
//         break
//         case 3:
//             cell3 += csvStr[i]
//         break
//         case 4:
//             cell4 += csvStr[i]
//         break
//     }

//     if (cell === 4 && csvStr[i + 1] === `\n`) {
//         console.log(cell1, cell2, cell3, cell4);
//         }
// }
// console.log(cell1, cell2, cell3, cell4);
