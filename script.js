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

function fillMatrix(){
    console.log('hi')
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
        }
    }
})