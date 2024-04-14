console.log("Ready to TakeOff")

// Doing the rest of the work from this point forward // 
////////////////////////////////////////////////////////

const PI = 3.1415;
const radius = 5; 
const area = 78.5375;
const spaceReq = 0.8;
const plants = 20;

// Plant Growth
const week1 = plants;
const week2 = plants * 2;
const week3 = week2 * 2;

// Control Flow 
let space1 = spaceReq * plants;
let space2 = spaceReq * week2;
let space3 = spaceReq * week3;

console.log(space3)