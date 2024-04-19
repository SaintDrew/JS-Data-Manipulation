console.log("Functions!!!!")
/**
 * Defining Functions
 */

// Three ways 
// sayHello()

// 1) Function Declaration
// Function declarations are hoisting to the top of their scope in runtime. 
function sayHello() {
    console.log('Hello!');
}

sayHello()

//Hoisting example
// fnDeclaration();  // thank you function declarations :)
// fnExpression();  // TypeError: fnExpression is not a function

function fnDeclaration() {
    console.log("I'm coming from a function declaration.");
}

const fnExpression = function () {
    console.log("I'm coming from a function expression.");
};

// 2) Function Expression DO NOT HOIST
const sayHola = function (name) {
    console.log("Hola " + name + " !")
}

sayHola("Isiah")

// 3) Arrow Functions DO NOT HOIST
// shorthand implicit return 
const add = (a, b) => a + b

// when you have curly brackets, you need to have a "return" keyword
const add2 = (a, b) => {
    return a + b;
}

// Calling Functions
const sum = add(25, 100) // returns 125
const sum2 = add2(100, 500)

console.log(sum2)

// Exercise 1

function areBothEven(n1, n2) {
    // Error Handling
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        console.log("Invalid Parameter Type")
        return
    }

    return !(n1 % 2) && !(n2 % 2)
}
// console.log is going to log to the console whatever "areBothEven" returns
console.log(areBothEven(8, 2))

// Practice Activity 1
function computeArea(width, height) {
    let area = width * height
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

const area = computeArea(5, 10)
console.log(area)

// Practice Activity 2
const planetHasWater = function (planet) {
    //Error Handling 
    if (typeof planet !== "string") {
        return "Input must be a string"
    }

    if (planet.toUpperCase() === "EARTH" || planet.toUpperCase() === "MARS") {
        return true
    } else {
        return false
    }
}
console.log(planetHasWater("Earth"))


// If fewer arguments are passed than parameters defined, then the parameter variables without a matching argument would be set to undefined.

const addThree = (n1, n2, n3) => {
    return n1 + n2 + n3
}

// parameter "n3" will be undefined
console.log(addThree(9, 10)) // returns NaN because of not giving proper amount of arguments.

/**
 * Infinite Parameters
 */


// 1)arguments keyword
// NOT best practice
function getDevObject(name) {
    let skills = [];
    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i]);
    }
    return {
        devName: name,
        jobSkills: skills
    };
}
const rodney = getDevObject("Rodney", "HTML", "CSS", "JS", "PHP", "React")

console.log(rodney)

// 2) Rest Parameters
// BEST practice
// give TRUE array

function getDeveloperObject(name, ...skills) {
    return {
        devName: name,
        jobSkills: skills
    };
}

const dionte = getDeveloperObject("Dionte", "HTML", "CSS", "JS", "PHP", "React", "MongoDB")


console.log(dionte)

// Default Parameters
// OLD WAY 
// function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }

// const bike = {
//   brand: "Marin"
// }
// // setColor(bike, 'blue');  // sets color to blue

// setColor(bike);  // sets color to purple by default

// console.log(bike)

// NEW WAY, BEST PRACTICE
function setColor(bicycle, color = "purple") {
    bicycle.color = color
}

const bike = {
    brand: "Marin"
}
setColor(bike, 'blue');  // sets color to blue

// setColor(bike);  // sets color to purple by default

console.log(bike)


/**
 * Functions as Arguments
 */

const colors = ["red", "green", "blue"];

const callbackFn = (color) => {
    console.log(color)
}

// colors.forEach(callbackFn)

// Anonymous function is given to the forEach method
colors.forEach((color) => {
    console.log(color)
})

// Gabriel's Q

const colorObj = {}

colors.forEach((color, i) => {
    colorObj[color] = color
})

console.log(colorObj)

// Example 

const names = ["Gabriel", "Hom", "Monika", "Shayla"]
const isCools = [true, true, true, true]
const jobs = ["Developer", "Developer", "Developer", "Developer"]

const people = []

names.forEach((n, i) => {
    people.push(
        {
            name: n,
            isCool: isCools[i],
            occupation: jobs[i]
        }
    )
})

console.log(people);


/**
 * IIFE (iffy)
 */
(function () {
    const num = 1;
    console.log("hi")
})();



/**
 * Hoisting
 */

// var hoising
var x = "hello"
// Var is Type 2 Behavior
// function hoistVar () {
//   console.log(x)// outputs undefined, not a ReferenceError
//   var x = 25
//   console.log(x)
// }
// hoistVar()

function hoistLetOrConst() {
    console.log(x)
    let x = 25;
    console.log(x)
}

// hoistLetOrConst()

// Type 3 Behavior

// Example 1
// let x = 5;

// {
//   let y = 6
//   console.log(x)
// }

// console.log(y) // ReferenceError: y is not defined

// Example 2

// let x = 5;

// {
//   console.log(x)
//   let x = 6;
// }

/**
 * Hoisting Functions
 */
/** 
 * |THE CODE BELOW WILL NOT WORK IF COMMENT BACK IN|
 * 
  const val = { data: [...], type: ..., dateTime: ..., ... };
  const transformedData = populateValue(val);
  const response = sendRequest(data, {
    someValue: ...,
    otherConfigOption: ...,
  }, {
    moreData: ...
  });
  const success = processResponse(response);

  console.log(success);

  function populateValue(val) {
    /**
     * Do a bunch of logic in here.
    
  }

  function sendRequest(data, config, ...) {
    /**
     * More function logic.
    
  }

  function processResponse(res) {
    /**
     * Dozens of lines of code.
    
  }
*/

/**
 * Nested Functions
 */
function globalFn() {
    console.log("Mr. Worldwide")
}

function openNewAccount() {
    let acctNum = generateAcctNum()
    globalFn()// this works :)

    // this function is accessible from anywhere within it's SAME scope
    function generateAcctNum() {
        return Date.now()
    }
}

openNewAccount()
// generateAcctNum() // RefereenceError :(



// Prompt 1 

// - Write a function named charCount that accepts a single string argument and 
//   returns an object that represents the count of each character in the string.
//   - The returned object should have keys representing the character with its 
//     value set to the number of times the character appears in the string argument.
//   - Upper and lower case characters should be counted separately.
//   - Space characters should be counted too.
//   Examples:
//   charCount('hello') 
//   //=> { h: 1, e: 1, l: 2, o: 1 }
//   charCount('Today is fantastic!') 
//   //=> { 
//     T: 1, 
//     o: 1, 
//     d: 1, 
//     a: 3, 
//     y: 1, 
//     ' ': 2, 
//     i: 2, 
//     s: 2, 
//     f: 1, 
//     n: 1, 
//     t: 2, 
//     c: 1, 
//     '!': 1

function charCount(stringtoCount) {
    // create the array
    const charObject = {}
    //we go from first letter to the last one 
    for (i = 0; i < stringtoCount.length; i++) {
        //console.log(stringtoCount[i])
        //U ask if exist in the object a key with the name of the letter
        if (charObject[stringtoCount[i]]) {//iff exist i add a +1}
            charObject[stringtoCount[i]] + 1
        }
        else { // if not exist create a key with the letter and a value of 1
            charObject[stringtoCount[i]] = 1
        }
    }
    return charObject
}
console.log(charCount("Today is Fantastic"))




///////////////////////////////////////////////

// Prompt 2 

// Write a function called reverseUpcaseString that accepts a single string 
// argument, then returns the string with its characters in reverse order and
// converts all characters to uppercase.

// Examples:

// reverseUpcaseString("SEI Rocks!") //=> "!SKCOR IES" 

function reverseUpcaseString(singlestring) {
    const reverseString = singlestring.split("").reverse().join("");
    return reverseString.toUpperCase();
}
console.log(reverseUpcaseString("Today is Fantastic"))
