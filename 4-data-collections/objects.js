console.log("Objects!")

// Object Syntax

const vehicle = {
    color: "blue",
    hp: 4000,
    year: 1989,
    "brand-name": "Alfa Romeo",
    "active registration": true
}

// Accesssing object keys
console.log(vehicle.hp)

let key = "color"

console.log(vehicle[key])

console.log(vehicle["brand-name"])

// Unique Keys

const borough = {
    name: "Brooklyn",
    name: "The Bronx"
}

console.log(borough)// will only have 1 name property taking the value of the last value listed


//Changing Object Properties and Values
vehicle.color = "red" // changing an existing prop
vehicle.make = "stelvio" // adding a new key:value pair
delete vehicle["active registration"] // remove an existing prop

vehicle.doors = 2

vehicle.year = 2025

console.log(vehicle)

/**
 * Iterating through Objects
 */

const wizard = {
    name: "Gandalf the Grey",
    weapon: "staff",
    hair: "grey",
    power: 9001
}

for (let key in wizard) {
    console.log(`${key}: ${wizard[key]}`)
}


/**
 * Nested Objects
 */

const vehicle2 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
        cylinders: 6,
        hp: 4000,
        size: "3.2L"
    }
}

console.log(vehicle2.engine.size)

/**
 * Reference Types
 */

let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

console.log(myMovies === yourMovies); // false

const vehicle1 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2
    }
}

const vehicle3 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2
    }
}

console.log(vehicle1 === vehicle3); // false

// Pass by Reference
const car = vehicle1
console.log(car === vehicle1) // true

// Pass by value
// Primitive types
console.log(1 === 1) // true
console.log("hello" === "hello") // true
console.log(true === true) // true

// Pass by Reference
// Reference Types
// console.log({} === {}) // false 
// console.log([] === []) // false
// function nameOffn () {}

// }

// Primitive vs Reference Types
// const age = 28; // primitive
// const name = "Tyler"; // primitive
// const loading = false; // primitive
// const user = undefined; // primitive
// const response = null; // primitive
// const counter = Symbol("counter"); // primitive

// const user = { name: "Tyler" }; // reference
// const friends = ["Jake", "Mikenzi"]; // reference
// const doThing = () => ({}); // reference

/**
 * Manipulating Objects and Arrays Declared as const
 */
const mogwai = {};

mogwai.name = "Gizmo";
mogwai.age = 19;
// delete mogwai.age
mogwai.age = null;
mogwai.pet = {
    type: "cat",
    name: "Dash"
}

console.log(mogwai)

//NOT allowed

// mogwai = "Gizmo"

/**
 * Object Properties and Conditionals
 */
const obj = {
    salutation: "hi",
    count: 4
}

if (obj.salutation === "hi") {
    console.log("ok")
}

const user = {
    email: "test@test.com",
    password: "123"
}

const credentials = ["test@test.com", "1234"]

if (user.email === credentials[0] && user.password === credentials[1]) {
    console.log("Logged In!")
} else {
    console.log("Get out of my site!")
}

for (let i = 0; i < obj.count; i++) {
    console.log(i)
}

const obj2 = {
    something: 'wuttt'
}

if (obj2.something) {
    console.log('ok');
}

obj2.anotherthing = -0 // falsy
obj2.anotherthing = "hi" //truthy

if (obj2.anotherthing) {
    console.log('ok');
} else {
    console.log("that property doesn't exist");
}