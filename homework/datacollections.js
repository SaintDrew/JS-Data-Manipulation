let csvStr = "ID, Name, Occupation, Age \n4, Bruce, Knight, 41\ n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26"
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell = 1
for (let i = 0; i < csvStr.length; i++) {
    if (csvStr[i] === ',') {
        cell++
        continue
    }
    switch (cell) {
        case 1:
            cell1 += csvStr[i]
            break
    }
  case 2:
    cell2 += csvStr[i]let csvStr = "ID, Name, Occupation, Age \n4, Bruce, Knight, 41\ n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26"
    let cell1 = "";
    let cell2 = "";
    let cell3 = "";
    let cell = 1
    for (let i = 0; i < csvStr.length; i++) {
        if (csvStr[i] === ',') {
            cell++
            continue
        }
        switch (cell) {
            case 1:
                cell1 += csvStr[i]
                break
        }
  case 3:
        cell2 += csvStr[i]
    }
}