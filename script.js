let inputCount = 0

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

let matrix = {
    p0: [null, null, null, null, null, null, null, null, null, null, null, null],
    p1: [null, null, null, null, null, null, null, null, null, null, null, null],
    p2: [null, null, null, null, null, null, null, null, null, null, null, null],
    p3: [null, null, null, null, null, null, null, null, null, null, null, null],
    p4: [null, null, null, null, null, null, null, null, null, null, null, null],
    p5: [null, null, null, null, null, null, null, null, null, null, null, null],
    p6: [null, null, null, null, null, null, null, null, null, null, null, null],
    p7: [null, null, null, null, null, null, null, null, null, null, null, null],
    p8: [null, null, null, null, null, null, null, null, null, null, null, null],
    p9: [null, null, null, null, null, null, null, null, null, null, null, null],
    p10: [null, null, null, null, null, null, null, null, null, null, null, null],
    p11: [null, null, null, null, null, null, null, null, null, null, null, null],
    row1Button: null,
    row2Button: null,
    row3Button: null,
    row4Button: null,
    row5Button: null,
    row6Button: null,
    row7Button: null,
    row8Button: null,
    row9Button: null,
    row10Button: null,
    row11Button: null
}

let intervalSequence = [null, null, null, null, null, null, null, null, null, null, null]

function getIntervalSequence(){
    intervalSequence[0] = matrix.p0[0] - matrix.p0[1]
    intervalSequence[1] = matrix.p0[0] - matrix.p0[2]
    intervalSequence[2] = matrix.p0[0] - matrix.p0[3]
    intervalSequence[3] = matrix.p0[0] - matrix.p0[4]
    intervalSequence[4] = matrix.p0[0] - matrix.p0[5]
    intervalSequence[5] = matrix.p0[0] - matrix.p0[6]
    intervalSequence[6] = matrix.p0[0] - matrix.p0[7]
    intervalSequence[7] = matrix.p0[0] - matrix.p0[8]
    intervalSequence[8] = matrix.p0[0] - matrix.p0[9]
    intervalSequence[9] = matrix.p0[0] - matrix.p0[10]
    intervalSequence[10] = matrix.p0[0] - matrix.p0[11]
}

function convertToPos(int){
    let posInt = 12 + int
    return posInt
}

function fillMatrix(){
    let temp = matrix.p0[0] - matrix.p0[1]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row1Button = temp
    } else{
        matrix.row1Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[2]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row2Button = temp
    } else{
        matrix.row2Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[3]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row3Button = temp
    } else{
        matrix.row3Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[4]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row4Button = temp
    } else{
        matrix.row4Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[5]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row5Button = temp
    } else{
        matrix.row5Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[6]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row6Button = temp
    } else{
        matrix.row6Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[7]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row7Button = temp
    } else{
        matrix.row7Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[8]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row8Button = temp
    } else{
        matrix.row8Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[9]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row9Button = temp
    } else{
        matrix.row9Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[10]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row10Button = temp
    } else{
        matrix.row10Button = temp
    }
    temp = matrix.p0[0] - matrix.p0[11]
    if(temp < 0){
        temp = convertToPos(temp)
        matrix.row11Button = temp
    } else{
        matrix.row11Button = temp
    }
}

document.getElementById('buttonZero').addEventListener('click', () => {
    if(inputCount < 12 && zeroClicked === false){
        let i = inputCount
        matrix.p0[i] = 0
        inputCount++
        zeroClicked = true
        buttonZero.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonOne').addEventListener('click', () => {
    if(inputCount < 12 && oneClicked === false){
        let i = inputCount
        matrix.p0[i] = 1
        inputCount++
        oneClicked = true
        buttonOne.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonTwo').addEventListener('click', () => {
    if(inputCount < 12 && twoClicked === false){
        let i = inputCount
        matrix.p0[i] = 2
        inputCount++
        twoClicked = true
        buttonTwo.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonThree').addEventListener('click', () => {
    if(inputCount < 12 && threeClicked === false){
        let i = inputCount
        matrix.p0[i] = 3
        inputCount++
        threeClicked = true
        buttonThree.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonFour').addEventListener('click', () => {
    if(inputCount < 12 && fourClicked === false){
        let i = inputCount
        matrix.p0[i] = 4
        inputCount++
        fourClicked = true
        buttonFour.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonFive').addEventListener('click', () => {
    if(inputCount < 12 && fiveClicked === false){
        let i = inputCount
        matrix.p0[i] = 5
        inputCount++
        fiveClicked = true
        buttonFive.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonSix').addEventListener('click', () => {
    if(inputCount < 12 && sixClicked === false){
        let i = inputCount
        matrix.p0[i] = 6
        inputCount++
        sixClicked = true
        buttonSix.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonSeven').addEventListener('click', () => {
    if(inputCount < 12 && sevenClicked === false){
        let i = inputCount
        matrix.p0[i] = 7
        inputCount++
        sevenClicked = true
        buttonSeven.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonEight').addEventListener('click', () => {
    if(inputCount < 12 && eightClicked === false){
        let i = inputCount
        matrix.p0[i] = 8
        inputCount++
        eightClicked = true
        buttonEight.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonNine').addEventListener('click', () => {
    if(inputCount < 12 && nineClicked === false){
        let i = inputCount
        matrix.p0[i] = 9
        inputCount++
        nineClicked = true
        buttonNine.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonTen').addEventListener('click', () => {
    if(inputCount < 12 && tenClicked === false){
        let i = inputCount
        matrix.p0[i] = 10
        inputCount++
        tenClicked = true
        buttonTen.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})

document.getElementById('buttonEleven').addEventListener('click', () => {
    if(inputCount < 12 && elevenClicked === false){
        let i = inputCount
        matrix.p0[i] = 11
        inputCount++
        elevenClicked = true
        buttonEleven.innerText = ""
        if(inputCount === 12){
            getIntervalSequence()
            fillMatrix()
            console.log(matrix)
        }
    }
})