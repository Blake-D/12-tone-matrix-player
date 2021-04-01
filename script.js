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

let num0 = null
let num1 = null
let num2 = null
let num3 = null
let num4 = null
let num5 = null
let num6 = null
let num7 = null
let num8 = null
let num9 = null
let num10 = null
let num11 = null

document.getElementById('buttonZero').addEventListener('click', () => {
    if(inputCount < 12 && zeroClicked == false){
        if(inputCount === 0){
            num0 = 0
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            zeroOne.innerText = 0
        } else if(inputCount === 2){
            zeroTwo.innerText = 0
        } else if(inputCount === 3){
            zeroThree.innerText = 0
        } else if(inputCount === 4){
            zeroFour.innerText = 0
        } else if(inputCount === 5){
            zeroFive.innerText = 0
        } else if(inputCount === 6){
            zeroSix.innerText = 0
        } else if(inputCount === 7){
            zeroSeven.innerText = 0
        } else if(inputCount === 8){
            zeroEight.innerText = 0
        } else if(inputCount === 9){
            zeroNine.innerText = 0
        } else if(inputCount === 10){
            zeroTen.innerText = 0
        } else if(inputCount === 11){
            zeroEleven.innerText = 0
        }
        inputCount++
        zeroClicked = true
        buttonZero.innerText = ""
    }
})

document.getElementById('buttonOne').addEventListener('click', () => {
    if(inputCount < 12 && oneClicked == false){
        if(inputCount === 0){
            num0 = 1
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 1
            zeroOne.innerText = num1
            let temp = num0 - num1
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeOneB.innerText = "P" + posTemp
            retroOneB.innerText = "R" + posTemp
            invOneB.innerText = "I" + posTemp2
            retroInvOneB.innerText = "RI" + posTemp2
        } else if(inputCount === 2){
            zeroTwo.innerText = 0
        } else if(inputCount === 3){
            zeroThree.innerText = 0
        } else if(inputCount === 4){
            zeroFour.innerText = 0
        } else if(inputCount === 5){
            zeroFive.innerText = 0
        } else if(inputCount === 6){
            zeroSix.innerText = 0
        } else if(inputCount === 7){
            zeroSeven.innerText = 0
        } else if(inputCount === 8){
            zeroEight.innerText = 0
        } else if(inputCount === 9){
            zeroNine.innerText = 0
        } else if(inputCount === 10){
            zeroTen.innerText = 0
        } else if(inputCount === 11){
            zeroEleven.innerText = 0
        }
        inputCount++
        oneClicked = true
        buttonOne.innerText = ""
    }
})