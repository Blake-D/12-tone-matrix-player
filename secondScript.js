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

let pitchClass = [null, null, null, null, null, null, null, null, null, null, null, null]
let intervalSequence = [null, null, null, null, null, null, null, null, null, null, null]

function getIntervalSequence(){
    intervalSequence[0] = pitchClass[0] - pitchClass[1]
    intervalSequence[1] = pitchClass[0] - pitchClass[2]
    intervalSequence[2] = pitchClass[0] - pitchClass[3]
    intervalSequence[3] = pitchClass[0] - pitchClass[4]
    intervalSequence[4] = pitchClass[0] - pitchClass[5]
    intervalSequence[5] = pitchClass[0] - pitchClass[6]
    intervalSequence[6] = pitchClass[0] - pitchClass[7]
    intervalSequence[7] = pitchClass[0] - pitchClass[8]
    intervalSequence[8] = pitchClass[0] - pitchClass[9]
    intervalSequence[9] = pitchClass[0] - pitchClass[10]
    intervalSequence[10] = pitchClass[0] - pitchClass[11]
}

document.getElementById('buttonZero').addEventListener('click', () => {
    if(inputCount < 12 && zeroClicked === false){
        let i = inputCount
        pitchClass[i] = 0
        inputCount++
        zeroClicked = true
        buttonZero.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonOne').addEventListener('click', () => {
    if(inputCount < 12 && oneClicked === false){
        let i = inputCount
        pitchClass[i] = 1
        inputCount++
        oneClicked = true
        buttonOne.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonTwo').addEventListener('click', () => {
    if(inputCount < 12 && twoClicked === false){
        let i = inputCount
        pitchClass[i] = 2
        inputCount++
        twoClicked = true
        buttonTwo.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonThree').addEventListener('click', () => {
    if(inputCount < 12 && threeClicked === false){
        let i = inputCount
        pitchClass[i] = 3
        inputCount++
        threeClicked = true
        buttonThree.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonFour').addEventListener('click', () => {
    if(inputCount < 12 && fourClicked === false){
        let i = inputCount
        pitchClass[i] = 4
        inputCount++
        fourClicked = true
        buttonFour.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonFive').addEventListener('click', () => {
    if(inputCount < 12 && fiveClicked === false){
        let i = inputCount
        pitchClass[i] = 5
        inputCount++
        fiveClicked = true
        buttonFive.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonSix').addEventListener('click', () => {
    if(inputCount < 12 && sixClicked === false){
        let i = inputCount
        pitchClass[i] = 6
        inputCount++
        sixClicked = true
        buttonSix.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonSeven').addEventListener('click', () => {
    if(inputCount < 12 && sevenClicked === false){
        let i = inputCount
        pitchClass[i] = 7
        inputCount++
        sevenClicked = true
        buttonSeven.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonEight').addEventListener('click', () => {
    if(inputCount < 12 && eightClicked === false){
        let i = inputCount
        pitchClass[i] = 8
        inputCount++
        eightClicked = true
        buttonEight.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonNine').addEventListener('click', () => {
    if(inputCount < 12 && nineClicked === false){
        let i = inputCount
        pitchClass[i] = 9
        inputCount++
        nineClicked = true
        buttonNine.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonTen').addEventListener('click', () => {
    if(inputCount < 12 && tenClicked === false){
        let i = inputCount
        pitchClass[i] = 10
        inputCount++
        tenClicked = true
        buttonTen.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})

document.getElementById('buttonEleven').addEventListener('click', () => {
    if(inputCount < 12 && elevenClicked === false){
        let i = inputCount
        pitchClass[i] = 11
        inputCount++
        elevenClicked = true
        buttonEleven.innerText = ""
        if(inputCount === 12){
            console.log(pitchClass)
            getIntervalSequence()
            console.log(intervalSequence)
        }
    }
})