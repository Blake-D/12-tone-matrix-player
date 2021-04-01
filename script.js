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

let intervalSequence = []

function getIntervalSequence(){
    intervalSequence[0] = num0 - num1
    intervalSequence[1] = num0 - num2
    intervalSequence[2] = num0 - num3
    intervalSequence[3] = num0 - num4
    intervalSequence[4] = num0 - num5
    intervalSequence[5] = num0 - num6
    intervalSequence[6] = num0 - num7
    intervalSequence[7] = num0 - num8
    intervalSequence[8] = num0 - num9
    intervalSequence[9] = num0 - num10
    intervalSequence[10] = num0 - num11
}

document.getElementById('buttonZero').addEventListener('click', () => {
    if(inputCount < 12 && zeroClicked == false){
        if(inputCount === 0){
            num0 = 0
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 0
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
            num2 = 0
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 0
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 0
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 0
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 0
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 0
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 0
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 0
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 0
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 0
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
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
            num2 = 1
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 1
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 1
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 1
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 1
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 1
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 1
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 1
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 1
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 1
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        oneClicked = true
        buttonOne.innerText = ""
    }
})

document.getElementById('buttonTwo').addEventListener('click', () => {
    if(inputCount < 12 && twoClicked == false){
        if(inputCount === 0){
            num0 = 2
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 2
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
            num2 = 2
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 2
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 2
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 2
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 2
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 2
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 2
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 2
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 2
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 2
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        twoClicked = true
        buttonTwo.innerText = ""
    }
})

document.getElementById('buttonThree').addEventListener('click', () => {
    if(inputCount < 12 && threeClicked == false){
        if(inputCount === 0){
            num0 = 3
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 3
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
            num2 = 3
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 3
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 3
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 3
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 3
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 3
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 3
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 3
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 3
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 3
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        threeClicked = true
        buttonThree.innerText = ""
    }
})

document.getElementById('buttonFour').addEventListener('click', () => {
    if(inputCount < 12 && fourClicked == false){
        if(inputCount === 0){
            num0 = 4
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 4
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
            num2 = 4
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 4
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 4
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 4
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 4
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 4
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 4
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 4
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 4
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 4
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        fourClicked = true
        buttonFour.innerText = ""
    }
})

document.getElementById('buttonFive').addEventListener('click', () => {
    if(inputCount < 12 && fiveClicked == false){
        if(inputCount === 0){
            num0 = 5
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 5
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
            num2 = 5
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 5
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 5
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 5
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 5
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 5
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 5
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 5
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 5
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 5
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        fiveClicked = true
        buttonFive.innerText = ""
    }
})

document.getElementById('buttonSix').addEventListener('click', () => {
    if(inputCount < 12 && sixClicked == false){
        if(inputCount === 0){
            num0 = 6
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 6
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
            num2 = 6
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 6
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 6
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 6
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 6
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 6
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 6
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 6
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 6
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 6
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        sixClicked = true
        buttonSix.innerText = ""
    }
})

document.getElementById('buttonSeven').addEventListener('click', () => {
    if(inputCount < 12 && sevenClicked == false){
        if(inputCount === 0){
            num0 = 7
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 7
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
            num2 = 7
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 7
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 7
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 7
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 7
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 7
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 7
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 7
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 7
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 7
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        sevenClicked = true
        buttonSeven.innerText = ""
    }
})

document.getElementById('buttonEight').addEventListener('click', () => {
    if(inputCount < 12 && eightClicked == false){
        if(inputCount === 0){
            num0 = 8
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 8
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
            num2 = 8
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 8
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 8
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 8
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 8
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 8
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 8
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 8
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 8
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 8
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        eightClicked = true
        buttonEight.innerText = ""
    }
})

document.getElementById('buttonNine').addEventListener('click', () => {
    if(inputCount < 12 && nineClicked == false){
        if(inputCount === 0){
            num0 = 9
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 9
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
            num2 = 9
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 9
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 9
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 9
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 9
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 9
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 9
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 9
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 9
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 9
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        nineClicked = true
        buttonNine.innerText = ""
    }
})

document.getElementById('buttonTen').addEventListener('click', () => {
    if(inputCount < 12 && tenClicked == false){
        if(inputCount === 0){
            num0 = 10
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 10
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
            num2 = 10
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 10
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 10
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 10
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 10
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 10
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 10
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 10
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 10
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 10
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        tenClicked = true
        buttonTen.innerText = ""
    }
})

document.getElementById('buttonEleven').addEventListener('click', () => {
    if(inputCount < 12 && elevenClicked == false){
        if(inputCount === 0){
            num0 = 11
            zeroZero.innerText = num0
        } else if(inputCount === 1){
            num1 = 11
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
            num2 = 11
            zeroTwo.innerText = num2
            let temp = num0 - num2
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTwoB.innerText = "P" + posTemp
            retroTwoB.innerText = "R" + posTemp
            invTwoB.innerText = "I" + posTemp2
            retroInvTwoB.innerText = "RI" + posTemp2
        } else if(inputCount === 3){
            num3 = 11
            zeroThree.innerText = num3
            let temp = num0 - num3
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeThreeB.innerText = "P" + posTemp
            retroThreeB.innerText = "R" + posTemp
            invThreeB.innerText = "I" + posTemp2
            retroInvThreeB.innerText = "RI" + posTemp2
        } else if(inputCount === 4){
            num4 = 11
            zeroFour.innerText = num4
            let temp = num0 - num4
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFourB.innerText = "P" + posTemp
            retroFourB.innerText = "R" + posTemp
            invFourB.innerText = "I" + posTemp2
            retroInvFourB.innerText = "RI" + posTemp2
        } else if(inputCount === 5){
            num5 = 11
            zeroFive.innerText = num5
            let temp = num0 - num5
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeFiveB.innerText = "P" + posTemp
            retroFiveB.innerText = "R" + posTemp
            invFiveB.innerText = "I" + posTemp2
            retroInvFiveB.innerText = "RI" + posTemp2
        } else if(inputCount === 6){
            num6 = 11
            zeroSix.innerText = num6
            let temp = num0 - num6
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSixB.innerText = "P" + posTemp
            retroSixB.innerText = "R" + posTemp
            invSixB.innerText = "I" + posTemp2
            retroInvSixB.innerText = "RI" + posTemp2
        } else if(inputCount === 7){
            num7 = 11
            zeroSeven.innerText = num7
            let temp = num0 - num7
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeSevenB.innerText = "P" + posTemp
            retroSevenB.innerText = "R" + posTemp
            invSevenB.innerText = "I" + posTemp2
            retroInvSevenB.innerText = "RI" + posTemp2
        } else if(inputCount === 8){
            num8 = 11
            zeroEight.innerText = num8
            let temp = num0 - num8
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeEightB.innerText = "P" + posTemp
            retroEightB.innerText = "R" + posTemp
            invEightB.innerText = "I" + posTemp2
            retroInvEightB.innerText = "RI" + posTemp2
        } else if(inputCount === 9){
            num9 = 11
            zeroNine.innerText = num9
            let temp = num0 - num9
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeNineB.innerText = "P" + posTemp
            retroNineB.innerText = "R" + posTemp
            invNineB.innerText = "I" + posTemp2
            retroInvNineB.innerText = "RI" + posTemp2
        } else if(inputCount === 10){
            num10 = 11
            zeroTen.innerText = num10
            let temp = num0 - num10
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeTenB.innerText = "P" + posTemp
            retroTenB.innerText = "R" + posTemp
            invTenB.innerText = "I" + posTemp2
            retroInvTenB.innerText = "RI" + posTemp2
        } else if(inputCount === 11){
            num11 = 11
            zeroEleven.innerText = num11
            let temp = num0 - num11
            let posTemp = null
            if(temp < 0){
                posTemp = 12 + temp
            } else{
                posTemp = temp
            }
            let posTemp2 = 12 - posTemp
            primeElevenB.innerText = "P" + posTemp
            retroElevenB.innerText = "R" + posTemp
            invElevenB.innerText = "I" + posTemp2
            retroInvElevenB.innerText = "RI" + posTemp2
            getIntervalSequence()
        }
        inputCount++
        elevenClicked = true
        buttonEleven.innerText = ""
    }
})