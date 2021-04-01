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
    zero0.innerText = matrix.p0[0]
    zero1.innerText = matrix.p0[1]
    zero2.innerText = matrix.p0[2]
    zero3.innerText = matrix.p0[3]
    zero4.innerText = matrix.p0[4]
    zero5.innerText = matrix.p0[5]
    zero6.innerText = matrix.p0[6]
    zero7.innerText = matrix.p0[7]
    zero8.innerText = matrix.p0[8]
    zero9.innerText = matrix.p0[9]
    zero10.innerText = matrix.p0[10]
    zero11.innerText = matrix.p0[11]

    let temp = matrix.p0[0] - matrix.p0[1]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton1.innerText = "P" + temp
    rcButton1.innerText = "R" + temp
    trButton1.innerText = "I" + (12 - temp)
    brButton1.innerText = "RI" + (12 - temp)
    let temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        one0.innerText = temp2 - 12
    } else{
        one0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        one1.innerText = temp2 - 12
    } else{
        one1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        one2.innerText = temp2 - 12
    } else{
        one2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        one3.innerText = temp2 - 12
    } else{
        one3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        one4.innerText = temp2 - 12
    } else{
        one4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        one5.innerText = temp2 - 12
    } else{
        one5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        one6.innerText = temp2 - 12
    } else{
        one6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        one7.innerText = temp2 - 12
    } else{
        one7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        one8.innerText = temp2 - 12
    } else{
        one8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        one9.innerText = temp2 - 12
    } else{
        one9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        one10.innerText = temp2 - 12
    } else{
        one10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        one11.innerText = temp2 - 12
    } else{
        one11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[2]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton2.innerText = "P" + temp
    rcButton2.innerText = "R" + temp
    trButton2.innerText = "I" + (12 - temp)
    brButton2.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        two0.innerText = temp2 - 12
    } else{
        two0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        two1.innerText = temp2 - 12
    } else{
        two1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        two2.innerText = temp2 - 12
    } else{
        two2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        two3.innerText = temp2 - 12
    } else{
        two3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        two4.innerText = temp2 - 12
    } else{
        two4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        two5.innerText = temp2 - 12
    } else{
        two5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        two6.innerText = temp2 - 12
    } else{
        two6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        two7.innerText = temp2 - 12
    } else{
        two7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        two8.innerText = temp2 - 12
    } else{
        two8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        two9.innerText = temp2 - 12
    } else{
        two9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        two10.innerText = temp2 - 12
    } else{
        two10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        two11.innerText = temp2 - 12
    } else{
        two11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[3]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton3.innerText = "P" + temp
    rcButton3.innerText = "R" + temp
    trButton3.innerText = "I" + (12 - temp)
    brButton3.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        three0.innerText = temp2 - 12
    } else{
        three0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        three1.innerText = temp2 - 12
    } else{
        three1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        three2.innerText = temp2 - 12
    } else{
        three2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        three3.innerText = temp2 - 12
    } else{
        three3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        three4.innerText = temp2 - 12
    } else{
        three4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        three5.innerText = temp2 - 12
    } else{
        three5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        three6.innerText = temp2 - 12
    } else{
        three6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        three7.innerText = temp2 - 12
    } else{
        three7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        three8.innerText = temp2 - 12
    } else{
        three8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        three9.innerText = temp2 - 12
    } else{
        three9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        three10.innerText = temp2 - 12
    } else{
        three10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        three11.innerText = temp2 - 12
    } else{
        three11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[4]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton4.innerText = "P" + temp
    rcButton4.innerText = "R" + temp
    trButton4.innerText = "I" + (12 - temp)
    brButton4.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        four0.innerText = temp2 - 12
    } else{
        four0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        four1.innerText = temp2 - 12
    } else{
        four1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        four2.innerText = temp2 - 12
    } else{
        four2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        four3.innerText = temp2 - 12
    } else{
        four3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        four4.innerText = temp2 - 12
    } else{
        four4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        four5.innerText = temp2 - 12
    } else{
        four5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        four6.innerText = temp2 - 12
    } else{
        four6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        four7.innerText = temp2 - 12
    } else{
        four7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        four8.innerText = temp2 - 12
    } else{
        four8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        four9.innerText = temp2 - 12
    } else{
        four9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        four10.innerText = temp2 - 12
    } else{
        four10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        four11.innerText = temp2 - 12
    } else{
        four11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[5]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton5.innerText = "P" + temp
    rcButton5.innerText = "R" + temp
    trButton5.innerText = "I" + (12 - temp)
    brButton5.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        five0.innerText = temp2 - 12
    } else{
        five0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        five1.innerText = temp2 - 12
    } else{
        five1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        five2.innerText = temp2 - 12
    } else{
        five2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        five3.innerText = temp2 - 12
    } else{
        five3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        five4.innerText = temp2 - 12
    } else{
        five4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        five5.innerText = temp2 - 12
    } else{
        five5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        five6.innerText = temp2 - 12
    } else{
        five6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        five7.innerText = temp2 - 12
    } else{
        five7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        five8.innerText = temp2 - 12
    } else{
        five8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        five9.innerText = temp2 - 12
    } else{
        five9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        five10.innerText = temp2 - 12
    } else{
        five10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        five11.innerText = temp2 - 12
    } else{
        five11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[6]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton6.innerText = "P" + temp
    rcButton6.innerText = "R" + temp
    trButton6.innerText = "I" + (12 - temp)
    brButton6.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        six0.innerText = temp2 - 12
    } else{
        six0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        six1.innerText = temp2 - 12
    } else{
        six1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        six2.innerText = temp2 - 12
    } else{
        six2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        six3.innerText = temp2 - 12
    } else{
        six3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        six4.innerText = temp2 - 12
    } else{
        six4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        six5.innerText = temp2 - 12
    } else{
        six5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        six6.innerText = temp2 - 12
    } else{
        six6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        six7.innerText = temp2 - 12
    } else{
        six7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        six8.innerText = temp2 - 12
    } else{
        six8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        six9.innerText = temp2 - 12
    } else{
        six9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        six10.innerText = temp2 - 12
    } else{
        six10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        six11.innerText = temp2 - 12
    } else{
        six11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[7]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton7.innerText = "P" + temp
    rcButton7.innerText = "R" + temp
    trButton7.innerText = "I" + (12 - temp)
    brButton7.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        seven0.innerText = temp2 - 12
    } else{
        seven0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        seven1.innerText = temp2 - 12
    } else{
        seven1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        seven2.innerText = temp2 - 12
    } else{
        seven2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        seven3.innerText = temp2 - 12
    } else{
        seven3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        seven4.innerText = temp2 - 12
    } else{
        seven4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        seven5.innerText = temp2 - 12
    } else{
        seven5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        seven6.innerText = temp2 - 12
    } else{
        seven6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        seven7.innerText = temp2 - 12
    } else{
        seven7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        seven8.innerText = temp2 - 12
    } else{
        seven8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        seven9.innerText = temp2 - 12
    } else{
        seven9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        seven10.innerText = temp2 - 12
    } else{
        seven10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        seven11.innerText = temp2 - 12
    } else{
        seven11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[8]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton8.innerText = "P" + temp
    rcButton8.innerText = "R" + temp
    trButton8.innerText = "I" + (12 - temp)
    brButton8.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        eight0.innerText = temp2 - 12
    } else{
        eight0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        eight1.innerText = temp2 - 12
    } else{
        eight1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        eight2.innerText = temp2 - 12
    } else{
        eight2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        eight3.innerText = temp2 - 12
    } else{
        eight3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        eight4.innerText = temp2 - 12
    } else{
        eight4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        eight5.innerText = temp2 - 12
    } else{
        eight5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        eight6.innerText = temp2 - 12
    } else{
        eight6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        eight7.innerText = temp2 - 12
    } else{
        eight7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        eight8.innerText = temp2 - 12
    } else{
        eight8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        eight9.innerText = temp2 - 12
    } else{
        eight9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        eight10.innerText = temp2 - 12
    } else{
        eight10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        eight11.innerText = temp2 - 12
    } else{
        eight11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[9]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton9.innerText = "P" + temp
    rcButton9.innerText = "R" + temp
    trButton9.innerText = "I" + (12 - temp)
    brButton9.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        nine0.innerText = temp2 - 12
    } else{
        nine0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        nine1.innerText = temp2 - 12
    } else{
        nine1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        nine2.innerText = temp2 - 12
    } else{
        nine2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        nine3.innerText = temp2 - 12
    } else{
        nine3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        nine4.innerText = temp2 - 12
    } else{
        nine4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        nine5.innerText = temp2 - 12
    } else{
        nine5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        nine6.innerText = temp2 - 12
    } else{
        nine6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        nine7.innerText = temp2 - 12
    } else{
        nine7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        nine8.innerText = temp2 - 12
    } else{
        nine8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        nine9.innerText = temp2 - 12
    } else{
        nine9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        nine10.innerText = temp2 - 12
    } else{
        nine10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        nine11.innerText = temp2 - 12
    } else{
        nine11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[10]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton10.innerText = "P" + temp
    rcButton10.innerText = "R" + temp
    trButton10.innerText = "I" + (12 - temp)
    brButton10.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        ten0.innerText = temp2 - 12
    } else{
        ten0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        ten1.innerText = temp2 - 12
    } else{
        ten1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        ten2.innerText = temp2 - 12
    } else{
        ten2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        ten3.innerText = temp2 - 12
    } else{
        ten3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        ten4.innerText = temp2 - 12
    } else{
        ten4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        ten5.innerText = temp2 - 12
    } else{
        ten5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        ten6.innerText = temp2 - 12
    } else{
        ten6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        ten7.innerText = temp2 - 12
    } else{
        ten7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        ten8.innerText = temp2 - 12
    } else{
        ten8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        ten9.innerText = temp2 - 12
    } else{
        ten9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        ten10.innerText = temp2 - 12
    } else{
        ten10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        ten11.innerText = temp2 - 12
    } else{
        ten11.innerText = temp2
    }

    temp = matrix.p0[0] - matrix.p0[11]
    if(temp < 0){
        temp = convertToPos(temp)
    } 
    lcButton11.innerText = "P" + temp
    rcButton11.innerText = "R" + temp
    trButton11.innerText = "I" + (12 - temp)
    brButton11.innerText = "RI" + (12 - temp)
    temp2 = matrix.p0[0] + temp
    if(temp2 > 11){
        eleven0.innerText = temp2 - 12
    } else{
        eleven0.innerText = temp2
    }
    temp2 = matrix.p0[1] + temp
    if(temp2 > 11){
        eleven1.innerText = temp2 - 12
    } else{
        eleven1.innerText = temp2
    }
    temp2 = matrix.p0[2] + temp
    if(temp2 > 11){
        eleven2.innerText = temp2 - 12
    } else{
        eleven2.innerText = temp2
    }
    temp2 = matrix.p0[3] + temp
    if(temp2 > 11){
        eleven3.innerText = temp2 - 12
    } else{
        eleven3.innerText = temp2
    }
    temp2 = matrix.p0[4] + temp
    if(temp2 > 11){
        eleven4.innerText = temp2 - 12
    } else{
        eleven4.innerText = temp2
    }
    temp2 = matrix.p0[5] + temp
    if(temp2 > 11){
        eleven5.innerText = temp2 - 12
    } else{
        eleven5.innerText = temp2
    }
    temp2 = matrix.p0[6] + temp
    if(temp2 > 11){
        eleven6.innerText = temp2 - 12
    } else{
        eleven6.innerText = temp2
    }
    temp2 = matrix.p0[7] + temp
    if(temp2 > 11){
        eleven7.innerText = temp2 - 12
    } else{
        eleven7.innerText = temp2
    }
    temp2 = matrix.p0[8] + temp
    if(temp2 > 11){
        eleven8.innerText = temp2 - 12
    } else{
        eleven8.innerText = temp2
    }
    temp2 = matrix.p0[9] + temp
    if(temp2 > 11){
        eleven9.innerText = temp2 - 12
    } else{
        eleven9.innerText = temp2
    }
    temp2 = matrix.p0[10] + temp
    if(temp2 > 11){
        eleven10.innerText = temp2 - 12
    } else{
        eleven10.innerText = temp2
    }
    temp2 = matrix.p0[11] + temp
    if(temp2 > 11){
        eleven11.innerText = temp2 - 12
    } else{
        eleven11.innerText = temp2
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