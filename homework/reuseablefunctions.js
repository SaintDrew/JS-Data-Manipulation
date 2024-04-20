console.log("Ready to TakeOff!!!")
// The Climb towards greatness requires a single step 

// Part 1: Thinking Functionally 
// Take an array of numbers and return the sum
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const arr = [2,4,6,8];
let sum = 0 
let i = -1;
while(++i < arr.length) { 
    sum +=arr[i];
}
let avg = sum / arr.length
console.log(sum);
console.log(avg);

// Shows and compares the length of the string with
// the other strings and return it if 
// it is greater than the rest

let newArr = ["BMW", "Mercedes", "Audi", "Porsche"]
function gfg_Run() {
    let longestString = "";
    for (let i = 0; i < newArr.length; i++){
        if (
            typeof newArr[i] === "string" &&
            newArr[i].length > longestString.length
        ) {
            longestString = newArr[i];
        }
    }
    return longestString;
}

console.log(gfg_Run());

// 


// create a function with two arguments 
// where num is 8 and print "currentValue"
// if condition is met then returns and ends the recursion
// if not print curentValue nad clal the function to recursivley by increasing by 1

function printRecursiveNum(num, currentValue){
    if (currentValue>num) {
        return;
    }
    console.log(currentValue);
    printRecursiveNum(num,currentValue +1);
}
const num = 8;
printRecursiveNum(num,1);

