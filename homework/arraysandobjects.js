console.log("Ready to TakeOff!!!")
// The Climb towards greatness requires a single step 

// Part 1: Refactoring Old Code 

let column1 = ["id", "firstname", "occupation", "age"];
let column2 = [42, "Bruce", "DarkKnight", 39];
let column3 = [57, "Clark", "Man of Steel", 33];
let column4 = [63, "Tony", "Ironman", 38];
let column5 = [98, "Peter", "Friendly Neighborhood", 27];

const data2 = [column1, column2, column3, column4, column5];

for (const cell2 of data2) {
    console.log(`| ${cell2[0]} | ${cell2[1]} ${cell2[2]} ${cell2[3]} `);
}

console.log("........................................")
//////////////////////////////////////

// Part 2: Expanding Functionality 

let csvStr = "ID,firstname,occupation,age\n42,Bruce,DarkKnight,39\n57,Clark,Man of Stell,33\n63,Tony,IronMan,38\n98,Peter,Friendly Neighborhood,27"

lines=[]
cells=[]
savedArray=[]

let columQuantity 

lines=csvStr.split("\n")

cells=lines[0].split(",")

columQuantity=cells.length
console.log(`${columQuantity}`)

for(i=0;i<lines.length;i++){
    cells=lines[i].split(",")
    if(cells.length>columQuantity){
        cells.length=columQuantity
    }
    savedArray.push(cells)
}
console.log(`This is the 2D array`)
console.log(savedArray)

console.log("........................................")
//////////////////////////////////////

// Part 3: Transforming Data

let columnheader=savedArray[0]
let objectArray=[]


for(i=1;i<savedArray.length;i++){
    objectArray[i-1]={}
    for(j=0;j<columQuantity;j++){
        objectArray[i-1][columnheader[j].toLowerCase()]=savedArray[i][j]
    }
}

console.log(objectArray)


console.log("........................................")
//////////////////////////////////////

// Part 4: Sorting and Manipulating Data

objectArray.pop()
objectArray.splice(1,0,{id: "48", firstname: "Barry", occupation: "Runner", age: "25"})
objectArray.push({ id: "7", firstname: "Bilbo" , occupation: "None", age: "111"})

console.log(objectArray)

let averageAge=0;
for(i=0;i<objectArray.length;i++){
    averageAge+=parseInt(objectArray[i].age)
}


