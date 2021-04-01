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

function incrementInputCount(){
    inputCount++
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
        }
    }
})

// document.getElementById('buttonZero').addEventListener('click', () => {
//     if(inputCount < 12 && zeroClicked == false){
//         if(inputCount === 0){
//             pitchClass[0] = 0
//         } else if(inputCount === 1){
//             pitchClass[1] = 0
//         } else if(inputCount === 2){
//             pitchClass[2] = 0
//         } else if(inputCount === 3){
//             pitchClass[3] = 0
//         } else if(inputCount === 4){
//             pitchClass[4] = 0
//         } else if(inputCount === 5){
//             pitchClass[5] = 0
//         } else if(inputCount === 6){
//             pitchClass[6] = 0
//         } else if(inputCount === 7){
//             pitchClass[7] = 0
//         } else if(inputCount === 8){
//             pitchClass[8] = 0
//         } else if(inputCount === 9){
//             pitchClass[9] = 0
//         } else if(inputCount === 10){
//             pitchClass[10] = 0
//         } else if(inputCount === 11){
//             pitchClass[11] = 0
//         }
//         inputCount++
//         zeroClicked = true
//         buttonZero.innerText = ""
//     }
// })

// document.getElementById('buttonOne').addEventListener('click', () => {
//     if(inputCount < 12 && oneClicked == false){
//         if(inputCount === 0){
//             pitchClass[0] = 1
//         } else if(inputCount === 1){
//             pitchClass[1] = 1
//         } else if(inputCount === 2){
//             pitchClass[2] = 1
//         } else if(inputCount === 3){
//             pitchClass[3] = 1
//         } else if(inputCount === 4){
//             pitchClass[4] = 1
//         } else if(inputCount === 5){
//             pitchClass[5] = 1
//         } else if(inputCount === 6){
//             pitchClass[6] = 1
//         } else if(inputCount === 7){
//             pitchClass[7] = 1
//         } else if(inputCount === 8){
//             pitchClass[8] = 1
//         } else if(inputCount === 9){
//             pitchClass[9] = 1
//         } else if(inputCount === 10){
//             pitchClass[10] = 1
//         } else if(inputCount === 11){
//             pitchClass[11] = 1
//         }
//         inputCount++
//         oneClicked = true
//         buttonOne.innerText = ""
//     }
// })

// document.getElementById('buttonTwo').addEventListener('click', () => {
//     if(inputCount < 12 && twoClicked == false){
//         if(inputCount === 0){
//             pitchClass[0] = 2
//         } else if(inputCount === 1){
//             pitchClass[1] = 2
//         } else if(inputCount === 2){
//             pitchClass[2] = 2
//         } else if(inputCount === 3){
//             pitchClass[3] = 2
//         } else if(inputCount === 4){
//             pitchClass[4] = 2
//         } else if(inputCount === 5){
//             pitchClass[5] = 2
//         } else if(inputCount === 6){
//             pitchClass[6] = 2
//         } else if(inputCount === 7){
//             pitchClass[7] = 2
//         } else if(inputCount === 8){
//             pitchClass[8] = 2
//         } else if(inputCount === 9){
//             pitchClass[9] = 2
//         } else if(inputCount === 10){
//             pitchClass[10] = 2
//         } else if(inputCount === 11){
//             pitchClass[11] = 2
//         }
//         inputCount++
//         twoClicked = true
//         buttonTwo.innerText = ""
//     }
// })

// document.getElementById('buttonThree').addEventListener('click', () => {
//     if(inputCount < 12 && threeClicked == false){
//         if(inputCount === 0){
//             pitchClass[0] = 3
//         } else if(inputCount === 1){
//             pitchClass[1] = 3
//         } else if(inputCount === 2){
//             pitchClass[2] = 3
//         } else if(inputCount === 3){
//             pitchClass[3] = 3
//         } else if(inputCount === 4){
//             pitchClass[4] = 3
//         } else if(inputCount === 5){
//             pitchClass[5] = 3
//         } else if(inputCount === 6){
//             pitchClass[6] = 3
//         } else if(inputCount === 7){
//             pitchClass[7] = 3
//         } else if(inputCount === 8){
//             pitchClass[8] = 3
//         } else if(inputCount === 9){
//             pitchClass[9] = 3
//         } else if(inputCount === 10){
//             pitchClass[10] = 3
//         } else if(inputCount === 11){
//             pitchClass[11] = 3
//         }
//         inputCount++
//         threeClicked = true
//         buttonThree.innerText = ""
//     }
// })