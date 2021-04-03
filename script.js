let inputCount = 0
let matrixFilled = false

let zeroClicked = false
let oneClicked = false
let twoClicked = false
let threeClicked = false
let fourClicked = false
let fiveClicked = false
let sixClicked = false
let sevenClicked = false
let eightClicked = false
let nineClicked = false
let tenClicked = false
let elevenClicked = false

let primeRow = [null, null, null, null, null, null, null, null, null, null, null, null]

const divs = {
    lcButtons: [lcButton0, lcButton1, lcButton2, lcButton3, lcButton4, lcButton5, lcButton6, lcButton7, lcButton8, lcButton9, lcButton10, lcButton11],
    rcButtons: [rcButton0, rcButton1, rcButton2, rcButton3, rcButton4, rcButton5, rcButton6, rcButton7, rcButton8, rcButton9, rcButton10, rcButton11],
    trButtons: [trButton0, trButton1, trButton2, trButton3, trButton4, trButton5, trButton6, trButton7, trButton8, trButton9, trButton10, trButton11],
    brButtons: [brButton0, brButton1, brButton2, brButton3, brButton4, brButton5, brButton6, brButton7, brButton8, brButton9, brButton10, brButton11],
    rows: [[zero0, zero1, zero2, zero3, zero4, zero5, zero6, zero7, zero8, zero9, zero10, zero11], [one0, one1, one2, one3, one4, one5, one6, one7, one8, one9, one10, one11], [two0, two1, two2, two3, two4, two5, two6, two7, two8, two9, two10, two11], [three0, three1, three2, three3, three4, three5, three6, three7, three8, three9, three10, three11], [four0, four1, four2, four3, four4, four5, four6, four7, four8, four9, four10, four11], [five0, five1, five2, five3, five4, five5, five6, five7, five8, five9, five10, five11], [six0, six1, six2, six3, six4, six5, six6, six7, six8, six9, six10, six11], [seven0, seven1, seven2, seven3, seven4, seven5, seven6, seven7, seven8, seven9, seven10, seven11], [eight0, eight1, eight2, eight3, eight4, eight5, eight6, eight7, eight8, eight9, eight10, eight11], [nine0, nine1, nine2, nine3, nine4, nine5, nine6, nine7, nine8, nine9, nine10, nine11], [ten0, ten1, ten2, ten3, ten4, ten5, ten6, ten7, ten8, ten9, ten10, ten11], [eleven0, eleven1, eleven2, eleven3, eleven4, eleven5, eleven6, eleven7, eleven8, eleven9, eleven10, eleven11]]
}

function convertToPos(int){
    let posInt = 12 + int
    return posInt
}

function fillMatrix(){
    let temp = null
    let temp2 = null
    for(let i = 0; i < 12; i++){
        divs.rows[0][i].innerText = primeRow[i]
    }
    for(let i = 1; i < 12; i++){
        temp = primeRow[0] - primeRow[i]
        if(temp < 0){
            temp = convertToPos(temp)
        }
        divs.lcButtons[i].innerText = "P" + temp
        divs.rcButtons[i].innerText = "R" + temp
        divs.trButtons[i].innerText = "I" + (12 - temp)
        divs.brButtons[i].innerText = "RI" + (12 - temp)
        for(let x = 0; x < 12; x++){
            temp2 = primeRow[x] + temp
            if(temp2 > 11){
              divs.rows[i][x].innerText = temp2 - 12
            } else{
              divs.rows[i][x].innerText = temp2
            }
        }
    }
    matrixFilled = true
}

document.getElementById('buttonZero').addEventListener('click', () => {
    if(inputCount < 12 && zeroClicked === false){
        let i = inputCount
        primeRow[i] = 0
        inputCount++
        zeroClicked = true
        buttonZero.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonOne').addEventListener('click', () => {
    if(inputCount < 12 && oneClicked === false){
        let i = inputCount
        primeRow[i] = 1
        inputCount++
        oneClicked = true
        buttonOne.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonTwo').addEventListener('click', () => {
    if(inputCount < 12 && twoClicked === false){
        let i = inputCount
        primeRow[i] = 2
        inputCount++
        twoClicked = true
        buttonTwo.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonThree').addEventListener('click', () => {
    if(inputCount < 12 && threeClicked === false){
        let i = inputCount
        primeRow[i] = 3
        inputCount++
        threeClicked = true
        buttonThree.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonFour').addEventListener('click', () => {
    if(inputCount < 12 && fourClicked === false){
        let i = inputCount
        primeRow[i] = 4
        inputCount++
        fourClicked = true
        buttonFour.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonFive').addEventListener('click', () => {
    if(inputCount < 12 && fiveClicked === false){
        let i = inputCount
        primeRow[i] = 5
        inputCount++
        fiveClicked = true
        buttonFive.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonSix').addEventListener('click', () => {
    if(inputCount < 12 && sixClicked === false){
        let i = inputCount
        primeRow[i] = 6
        inputCount++
        sixClicked = true
        buttonSix.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonSeven').addEventListener('click', () => {
    if(inputCount < 12 && sevenClicked === false){
        let i = inputCount
        primeRow[i] = 7
        inputCount++
        sevenClicked = true
        buttonSeven.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonEight').addEventListener('click', () => {
    if(inputCount < 12 && eightClicked === false){
        let i = inputCount
        primeRow[i] = 8
        inputCount++
        eightClicked = true
        buttonEight.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonNine').addEventListener('click', () => {
    if(inputCount < 12 && nineClicked === false){
        let i = inputCount
        primeRow[i] = 9
        inputCount++
        nineClicked = true
        buttonNine.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonTen').addEventListener('click', () => {
    if(inputCount < 12 && tenClicked === false){
        let i = inputCount
        primeRow[i] = 10
        inputCount++
        tenClicked = true
        buttonTen.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})

document.getElementById('buttonEleven').addEventListener('click', () => {
    if(inputCount < 12 && elevenClicked === false){
        let i = inputCount
        primeRow[i] = 11
        inputCount++
        elevenClicked = true
        buttonEleven.innerText = ""
        if(inputCount === 12){
            fillMatrix()
        }
    }
})