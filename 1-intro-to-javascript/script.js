// Intro to JavaScript!!! Woot Woot!

/**
 * 
 * this is my mutli-line/block comment
 * 
 */

console.log("Js is connected!!!")

//Data Types

// Primitive Types
/////////////////////
// Numbers
100
50
1.5

//Strings
{ 'JavaScript is cool' }; "2024-Rtt-13 is cooler";
`These are backticks.`;

//Booleans
true
false

//falsey types
null
undefined
////////////////////////

// Reference Types
//Objects & Arrays
{
    //key/value pairs
}
[]; // a list of values

//Variable Declarations
//var
var myVariable = "Some value"

//let
let mySecond = true

// const
const PI = 3.141592653589793

// USE camelCase!!!! refernece lines 41 & 44
//Other Cases
// snake_case
//kebbo-case
//Pascasl Case

//SCOPE
let x = 10;
let y = 6;
y = 6.5;
console.log(y);

{
    //totally different scope
    let x = 2;
    console.log(x); //2
}

console.log(x);

//const
const foo = 'bar';
// foo = 7; not allowed!!!
{
    const foo = 'whatever';
    console.log(foo); // whatever
}
console.log(foo); //bar

////////////////////////////////
// Why we don't use var

var counter = 1;

{
    var counter = 2;
    console.log(counter); 2;
}

console.log(counter); // this will be 2

{
    let a = 135;
}

{
    var a = 77;
}

{
    const a = 20
}

console.log(a); // 77, because var doesn't abide ny bock-scoped

/////////////////////////////////

//tpeof 
let myVar = 'Something';

console.log(typeof myVar);
////////////////////////////

//Arthmetic Operators
// +
console.log(3 + 4); //7
// -
console.log(3 - 2); //1
// *
console.log(6 * 4); //24
// /
console.log(16 / 8) //2
// modulo this provides th remainder, returns the remainder of the division
console.log(10 % 3) //1

// Arithemtic shortcuts
let newNumber = 9;
newNumber = newNumber + 1; //10
// newNumber += 1// this is shorthand for the line above

newNumber *= 5; //50
newNumber++; //51 // single increment
newNumber--; //50 // single decrement
console.log(newNumber);

///// The two ways to use ++ and --

let currentNumber = newNumber++ // returns old value(50) and then after that it increments the newNumber variable. The ++ after the variable will not return the incremented value
console.log(currentNumber, newNumber);

newNumber = 50;

currentNumber = ++newNumber; // this WILL return the incremented value

console.log(currentNumber, newNumber);

// Comparsion Operators 
// >
console.log(3 > 4)
// <
console.log(5 < 10)
// >=
console.log(78 >= 78)
// <=
console.log(56 <= 44)
// == "loose equals"
console.log(10 == 10)
// !=
console.log(10 != 20);

const ageRequirment = 18;
let userage = 14;

console.log(userage < ageRequirment);

// The loose equals behavior
console.log(3 == 3);
console.log(3 == '3');
console.log('3' == '3');
console.log(0 == false);

// === strictly equals, going to check the value and the data type
console.log(3 === '3');
console.log(3 === 3);

// truthy and falsy
// falsy
0
"";
false;
null;
undefined;
NaN;
// all other values are truthy

// Logical Operators
// &&
let thisLogic1 = 3 > 2 && 6 == 6; // thisLogic is true
let thisLogic2 = 3 > 2 && 6 == 7; // thisLogic is false

// ||
let thisLogic3 = 3 > 2 || 6 == 6; // thisLogic is true
let thisLogic4 = 3 > 2 || 6 == 7; // thisLogic is true

// !, this turns it to whatever is it not
let thisLogic5 = !(3 > 2 && 6 == 6); // thisLogic is false
let thisLogic6 = !(3 > 2 || 6 == 7); // thisLogic is false

// String Concatentation
console.log('Hello' + ' World')
console.log('This is' + ' a String');
console.log('THe number is' + 5);
// console.log('hello' - 'world'); // does not work, gives NaN
let firstName = "Olga"
console.log("My name is " + firstName)

//String Acess 
const fullName = "Injgo Montoya"

console.log(fullName[2]);// J
console.log("Hello World"[4]); //O

fullName[2] = "X";

console.log(fullName);
// Example of case sensitivity
console.log('I' === 'i');

//String Comparsion
const a1 = 'a';
const b = 'b';

console.log(a1 > b);

console.log("Hey" === "Hey"); // true
console.log("Hey" == "hey"); // false

// Long Literal Strings 
const frost =
    "Nature’s first green is gold, " +
    "Her hardest hue to hold. " +
    "Her early leaf’s a flower; " +
    "But only so an hour. " +
    "Then leaf subsides to leaf. " +
    "So Eden sank to grief, " +
    "So dawn goes down to day. " +
    "Nothing gold can stay. ";

console.log(frost);

const frost2 =
    "Nature’s first green is gold, \
Her hardest hue to hold. \
Her early leaf’s a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost2);

//Escape Sequences 
\0 = null character (U+0000 NULL)
\' = single quote (U+0027 APOSTROPHE)
/'' = double quote (U+0022 QUOTATION MARK)
\\ = backslash (U+005C REVERSE SOLIDUS)
\n = newline (U+000A LINE FEED; LF)
\r = carriage return (U+000D CARRIAGE RETURN; CR)
\v = vertical tab (U+000B LINE TABULATION)
\t = tab (U+0009 CHARACTER TABULATION)
\b = backspace (U+0008 BACKSPACE)
\f = form feed (U+000C FORM FEED)

// By using single quotes to create the string, we allow the use of double quotes within (and vice versa). If we needed to use both types of quotes within the string, however, we would need to use the escape sequences as necessary:
console.log('They said, "this string doesn\'t need an escape," but that isn\'t true.');
// They said, "this string doesn't need an escape," but that isn't true.

// Template Literals
const num1 = 5;
const num2 = 10;

// The most used feature of template literals, however, is string interpolation. Consider the following:
// Remmeber, Template literals characters sequence to insert JS experssion: -->${}<--
console.log("'a' is assigned a value of \"" + num1 + ",\" and 'num2' is assigned a value of \"" + num2 + ".\"\n" +
"Therefore, 'num1' plus 'mum2' is equal to " + (num1 + num2) + ".");


// Template literals provide a placeholder for JavaScript expressions to be embedded within strings through the use of the syntax ${expression}. Any valid JavaScript expression can be included within this placeholder.
console.log
(`'num1' is assigned a value of "${num1}," and 'num2' 
is assgined a value of "${num2}".
Therefore, 'num1' plus 'num2' is equal to ${num1 + num2}`
);
//Do note, however, that this means if you want to use dollar signs as part of the actual string within a template literal, they need to be escaped (\$).

