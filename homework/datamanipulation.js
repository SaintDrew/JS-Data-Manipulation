console.log("We Lit!!!")

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check 1: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50) // true

// Check 2: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd) // true

// Check 3: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25); 

// Check 4: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

///////////////////////////////////////////////////////////
    //HW Problems Part 1

    // Math Problems and Check results 

    // The initial numbers that must be verified.
const m1 = 10;
const m2 = 15;
const m3 = 20;
const m4 = 5;

// Q1 now to check if divisble by 5 
let isDivisibleby5 = true;

if ((m1 % 5) == 0 && (m2 % 5) == 0 && (m3 % 5) == 0 && (m4 % 5) == 0) { // if remanider of dividing by 5 is 0., divides evenly
    isDivisibleby5 = true;
} else {
    isDivisibleby5 = false;
}
console.log(isDivisibleby5);

// Q2 Check if the first number is larger than the last

const a = 10;
const b = 15;
const c = 20;
const d = 5;
if (a >d){
    console.log("First is greater than last")
} else {
    console.log("First is less than last")
}

// Q3 Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

let result = 0;

const a1= 10;
const b1 = 15;
const c1 = 20;
const d1 = 5;

result = a1 - b1; // 10 -15 = -5
result *= c1; // result =-5 * 20 = -100
result /= d1; // result = -100 / 5 = -20
console.log(result); // -20

// Q4 Change the way that isOver25 calculates so that we do need to use the NOT operator (!) in other logic comparisons. Rename the varirable as appropriate. 

const myIsOver25 = !((a1 > 25) || ( b1 > 25) || (c1 > 25) || (d1 > 25)); // Now it seems if ANY of the numbers are abover 25, return true, then with (!) here, it'll return false, since we want
// to make sure that NONE of the numbers are above 25. 

console.log(myIsOver25); // Orginally will print out 'true,' because none of the numbers are above 25 currently. Once a number is changed to be over 25, will become false.

////////////////////////////////////////////////
// Part 2 : Practical Math //

let distance = 1500 

let mph1= 55 // 55 miles per hour
let mph2 = 60 // 60 miles per hour
let mph3 = 75 // 75 miles per hour


let mph55 = 30 // 30 miles per gallon at 55 mph
let mph60 = 28 // 28 miles per gallon at 60 mph
let mph75 = 23 // 23 miles per gallon at 75 mph

let budget = 175
let avgcost = 3

let gal1 = (distance / mph55) // gallons for entire trip at 55 mph
let gal2 = (distance / mph60) // gallons for entire trip at 60 mph
let gal3 = (distance / mph75) // gallons for entire trip at 75 mph 

let time1 = (distance / mph1 && mph55) // time of trip when driving at this speed 55 miles per hour
let time2 = (distance / mph2 && mph60) // time of trip when driving at this speed 60 miles per hour
let time3 = (distance / mph3 && mph75) // time of trip when driving at this speed 75 miles per hour


// How many gallons of fuel will need for the entrie trip //
console.log('at 55mph, gallons required: ' + gal1 + '. \n' +
'at 60mph, gallons required: ' + gal2 + ' \n'+ 
'at 75mph, gallons required: ' + gal3 + '\n') 


// Will your budget be enough to cover the fuel expense // 
// First we calculate total distance / miles per gallon that gives how many gallons needed .. second step is to calculate total distance /mph that gives time .. both these will give budget estimation for us to compare the result
console.log(' at 55mph, the budget needed: ' + time1 + ' .\n')