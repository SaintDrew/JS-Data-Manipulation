console.log("We Live!!! and In the Building!!!")

let x = 10;
let y = 5;

// var pollution = "sucks" // pollutes window object
let pollution = "avoided"

// (let and const) vs. var
{
    var x = 1;
    {
        var x = 2;  // same variable!
        // console.log(x);  // 2
    }
    // console.log(x);  // 2
    {
        var x = 100
    }
    var x = "im disrespectful"
    console.log(x)
}

{
    let x = 1;
    {
        let x = 2;  // different variable
        console.log(x);  // 2
        {
            console.log(`line 27: inner inner scope ${x}`) // 2
        }
    }

    {
        const x = "cool"
        console.log(x) // cool
    }
    console.log(x);  // 1
}

let x1 = 10;

{
    let y = 5;
    {
        let z = x1 + y;

    }
    //console.log(z); // will give a Refernece Error
}

// If statments 
const num = 10
if (num === 10) {
    console.log("the number is 10")

} else {
    console.log("The number is not 10")
}
// Code is typically run in order from the first line in a file to the last, 
//unless the computer runs across structures that change the control flow, such as conditionals 
//(and loops, which we will cover in the next lesson).

if (x == 10) {
    // do this
} else {
    // do this
}

// if...else statements are just one type of conditional, but they are the most 
// common. The syntax of an if...else statement is shown above; if the expression 
// within the if portion evaluates to true, it will execute the block of code that 
// follows. If it evaluates to false, it will execute the else portion.

//"Truthy" and "Flasy" w/ if statements
// will it excute?
if { 42} { }  // yes
if { "0"} { } //yes
if { "false"} { } //yes
if {- 42} { } // yes
if { Infinity } { } // yes
if { false} { } // no 
if { ""} { } // no
if { 0} { } // no

const variable = ""

if (variable) {
    console.log("It exists!")
}

const response = "data"

if (response) {
    console.log("process data")
} else {
    console.log("Failed to teach resource")
}
let someVar; // undefined = falsy
// ! Not operator negates the falsy value to truthy

if (!someVar) {
    someVar = "something"
}
console.log(someVar)


// Exercise 1

let num2 = 10;
if (num2 > 0) {
    console.log(num2 + "positive number")
} else {
    console.log(num2 + "negative number")
}

// Exercise 2
let age = 18;
if (age >= 18) {
    console.log("Access Granted!")
} else {
    console.log("Access Denied :(")
}

// Nested if.. else statements 
let age1 = 18
let hungry = true

if (age >= 18) {
    if (age1 >= 21) {
        console.log("Hand is unmarked")
    } else {
        console.log("Big Ole X")
    }
} else {
    if (hungry) {
        if (perference === "Dine in") {
            console.log("Chessecake Factory")
        } else {
            console.log("Go to McDonalds")
        }
    } else {
        console.log("Go rollerskating")
    }
}

// chained if... else 
const x5 = 10
if (x5 > 10) {
    console.log("greater")
    //do this
} else if (x5 < 10) {
    console.log("less")
    //do this
} else {
    console.log("equal")
    //do this
}


// Exercise 3 
let number = 109;
if (number < 0) {
    console.log("number is negative")
} else if (number <= 99) {
    console.log("number is positive but less 100")
}


// Exercise 4

let grade = 100

if (grade >= 90) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 70) {
    console.log("C")
} else if (grade >= 55) {
    console.log("D")
} else if (grade >= 0) {
    console.log("F")
} else {
    console.log("Please enter valid grade")
}

// Switch Statement
let x7 = "0";
switch (7) {
    case '1':
        // do something...
        break;
    case '2':
        // do something...
        break;
    default:
        // do soemthing...
        break;
}

// Switch Example
let x10 = 5
let y10 = 4
let operand = "/"
switch (operand) {
    case "+":
        console.log(x10 + y10);
        break;
    case "-":
        console.log(x10 - y10);
        break;
    case "*":
        console.log(x10 * y10);
        break
    case "/":
        console.log(x10 / y10);
        break;
    default:
        console.log("Invalid Operand")
        break;
}

// Ternary Operators
// let x = 10;
// let isTen;

// if (x == 10) {
// 	isTen = true;
// } else {
// 	isTen = false;
// }

// VS. the code below

let x11 = 10
let isTen = x11 == 10 ? true : false;