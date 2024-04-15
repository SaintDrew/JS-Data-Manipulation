console.log("Ready to TakeOff")

// Doing the rest of the work from this point forward // 
////////////////////////////////////////////////////////

const PI = 3.1415;
const radius = 5; 
const area = 78.5375;
const spaceReq = 0.8;
const plants = 20;

// Plant Growth
// const week1 = plants;
// const week2 = plants * 2;
// const week3 = week2 * 2; 

// Control Flow 
let space1 = spaceReq * plants;
let space2 = spaceReq * week2;
let space3 = spaceReq * week3;

// Part 1 answers // 
let totalArea = 3.1415 * 5 * 5
console.log(totalArea) // 78.53
let TotalCapacity = totalArea/0.8
console.log(TotalCapacity)// 98.17

let week = 1
if (growth = 20 * 2 * week)
{
    console.log(`${growth} : Week 1 Growth`)}

    if ( growth > TotalCapacity * 0.8){
        console.log("Pruned : Week 1")
    } else if (growth > TotalCapacity * 0.5){
        console.log("Monitored : Week 1")
    } else {console.log("Planted : Week 1")}

    let week2 = 2
    if (growth2 = 20 * 2 * week2)
    {
        console.log(`${growth2} : Week 2 Growth`)}
if ( growth2 > TotalCapacity * 0.8 ){
    console.log("Pruned : Week 2")
} else if (growth2 > TotalCapacity * 0.5){
    console.log("Monitored : Week 2")
} else { console.log("Planted : Week 2")}

let week3 = 3
if (growth3 = 20 *2 * week3) {
    console.log(`${growth} : Week 3 Growth`)
}
if (growth3 > TotalCapacity * 0.8){
    console.log("Pruned : Week 3")
} else if (growth2 > TotalCapacity * 0.5){
    console.log("Monitored : Week 3")
} else { console.log("Planted : Week 3")}

////////////////////////////////////////////
// Part 2 // 

const newPlants = 100

const newPlantsWeek2 = newPlants * 2;
console.log(newPlantsWeek2)
// 200 plants

const newPlantsWeek3 = newPlantsWeek2 * 2;
console.log(newPlantsWeek3)
// 400 plants 

const newPlantsWeek4 = newPlantsWeek3 * 2;
console.log(newPlantsWeek3)
// 800 plants 

const newPlantsWeek5 = newPlantsWeek4 * 2;
console.log(newPlantsWeek5)
// 1600 plants 

const newPlantsWeek6 = newPlantsWeek5 * 2;
console.log(newPlantsWeek6)
// 3200 plants 

const newPlantsWeek7 = newPlantsWeek6 * 2;
console.log(newPlantsWeek7)
// 6400 plants 

const newPlantsWeek8 = newPlantsWeek7 * 2;
console.log(newPlantsWeek8)
// 12800 plants 

const newPlantsWeek9 = newPlantsWeek8 * 2;
console.log(newPlantsWeek9)
// 25600 plants 

const newPlantsWeek10 = newPlantsWeek9 * 2;
console.log(newPlantsWeek10)
// 51200 plants 