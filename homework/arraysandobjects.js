console.log("Ready to TakeOff!!!")
// The Climb towards greatness requires a single step 

// Part 1: Refactoring Old Code 

const id = [ 42, 57, 63, 98]
const firstname = ["Bruce", "Clark", "Tony", "Peter"]
const occupation = ["DarkKnight","Man of Steel", "IronMan", "Friendly Neighborhood"]
const age = [39, 33, 38, 27]

console.log("ID", "FirstName", "occupation", "Age")

for (let i = 0; i < id.length; i++) {
    console.log(id[i] ,  firstname[i] ,  occupation[i] , age[i])
}

console.log("...............")
//////////////////////////////////////

// Part 2: Expanding Functionality 

let csvStr = "ID,firstname,occupation,age\n42,Bruce,DarkKnight,39\n57,Clark,Man of Stell,33\n63,Tony,IronMan,38\n98,Peter,Friendly Neighborhood,27"

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cell = 1
let row = 1
for (let i = 0; i < csvStr.length; i++) {

    if (csvStr[i] === ','){
        cell++
        continue
    }

    if (csvStr[i] === "\n") {
    cell = 1
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    continue
    }

    switch (cell) {
        case 1:
            cell1 += csvStr[i]
        break
        case 2: 
            cell2 += csvStr[i]
        break
        case 3:
            cell3 += csvStr[i]
        break
        case 4:
            cell4 += csvStr[i]
        break
    }

    if (cell === 4 && csvStr[i + 1] === `\n`) {
        console.log(cell1, cell2, cell3, cell4);
        }
}
console.log(cell1, cell2, cell3, cell4);
