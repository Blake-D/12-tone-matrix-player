const zero = new Audio("audio/0.mp3")
const one = new Audio("audio/1.mp3")
const two = new Audio("audio/2.mp3")
const three = new Audio("audio/3.mp3")
const four = new Audio("audio/4.mp3")
const five = new Audio("audio/5.mp3")
const six = new Audio("audio/6.mp3")
const seven = new Audio("audio/7.mp3")
const eight = new Audio("audio/8.mp3")
const nine = new Audio("audio/9.mp3")
const ten = new Audio("audio/10.mp3")
const eleven = new Audio("audio/11.mp3")

let btn0 = {
    clicked: false,
    button: buttonZero
}

let btn1 = {
    clicked: false,
    button: buttonOne
}

let btn2 = {
    clicked: false,
    button: buttonTwo
}

let btn3 = {
    clicked: false,
    button: buttonThree
}

let btn4 = {
    clicked: false,
    button: buttonFour
}

let btn5 = {
    clicked: false,
    button: buttonFive
}

let btn6 = {
    clicked: false,
    button: buttonSix
}

let btn7 = {
    clicked: false,
    button: buttonSeven
}

let btn8 = {
    clicked: false,
    button: buttonEight
}

let btn9 = {
    clicked: false,
    button: buttonNine
}

let btn10 = {
    clicked: false,
    button: buttonTen
}

let btn11 = {
    clicked: false,
    button: buttonEleven
}

let playing = false

let matrixFilled = false

let inputCount = 0

let lastClicked = undefined

let lastClickedOrder = []

let playbackOrder = []

let invPlaybackOrder = []

let primeRow = [null, null, null, null, null, null, null, null, null, null, null, null]

let previewRow = [preview0, preview1, preview2, preview3, preview4, preview5, preview6, preview7, preview8, preview9, preview10, preview11]

const audioArray = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven]

const pitchOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]

const divs = {
    lcButtons: [lcButton0, lcButton1, lcButton2, lcButton3, lcButton4, lcButton5, lcButton6, lcButton7, lcButton8, lcButton9, lcButton10, lcButton11],
    rcButtons: [rcButton0, rcButton1, rcButton2, rcButton3, rcButton4, rcButton5, rcButton6, rcButton7, rcButton8, rcButton9, rcButton10, rcButton11],
    trButtons: [trButton0, trButton1, trButton2, trButton3, trButton4, trButton5, trButton6, trButton7, trButton8, trButton9, trButton10, trButton11],
    brButtons: [brButton0, brButton1, brButton2, brButton3, brButton4, brButton5, brButton6, brButton7, brButton8, brButton9, brButton10, brButton11],
    rows: [[zero0, zero1, zero2, zero3, zero4, zero5, zero6, zero7, zero8, zero9, zero10, zero11],
    [one0, one1, one2, one3, one4, one5, one6, one7, one8, one9, one10, one11],
    [two0, two1, two2, two3, two4, two5, two6, two7, two8, two9, two10, two11],
    [three0, three1, three2, three3, three4, three5, three6, three7, three8, three9, three10, three11],
    [four0, four1, four2, four3, four4, four5, four6, four7, four8, four9, four10, four11],
    [five0, five1, five2, five3, five4, five5, five6, five7, five8, five9, five10, five11],
    [six0, six1, six2, six3, six4, six5, six6, six7, six8, six9, six10, six11],
    [seven0, seven1, seven2, seven3, seven4, seven5, seven6, seven7, seven8, seven9, seven10, seven11],
    [eight0, eight1, eight2, eight3, eight4, eight5, eight6, eight7, eight8, eight9, eight10, eight11],
    [nine0, nine1, nine2, nine3, nine4, nine5, nine6, nine7, nine8, nine9, nine10, nine11],
    [ten0, ten1, ten2, ten3, ten4, ten5, ten6, ten7, ten8, ten9, ten10, ten11],
    [eleven0, eleven1, eleven2, eleven3, eleven4, eleven5, eleven6, eleven7, eleven8, eleven9, eleven10, eleven11]]
}

function cueAnims() {
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            divs.rows[i][j].style.webkitAnimationPlayState = "running"
            divs.rows[i][j].style.oAnimationPlayState = "running"
            divs.rows[i][j].style.mozAnimationPlayState = "running"
            divs.rows[i][j].style.msAnimationPlayState = "running"
        }
    }
}

function getPlaybackOrder() {
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            if (divs.rows[0][i].innerText === pitchOptions[j]) {
                playbackOrder[i] = audioArray[j]
            }
        }
    }
}

function getInvPlaybackOrder() {
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            if (divs.rows[i][0].innerText === pitchOptions[j]) {
                invPlaybackOrder[i] = audioArray[j]
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function convertToPos(int) {
    let posInt = 12 + int
    return posInt
}

function fillMatrix() {
    let temp = null
    let temp2 = null
    for (let i = 0; i < 12; i++) {
        divs.rows[0][i].innerText = primeRow[i]
    }
    for (let i = 1; i < 12; i++) {
        temp = primeRow[0] - primeRow[i]
        if (temp < 0) {
            temp = convertToPos(temp)
        }
        divs.lcButtons[i].innerText = "p" + temp
        divs.rcButtons[i].innerText = "r" + temp
        divs.trButtons[i].innerText = "i" + (12 - temp)
        divs.brButtons[i].innerText = "ri" + (12 - temp)
        for (let x = 0; x < 12; x++) {
            temp2 = primeRow[x] + temp
            if (temp2 > 11) {
                divs.rows[i][x].innerText = temp2 - 12
            } else {
                divs.rows[i][x].innerText = temp2
            }
        }
    }
    matrixFilled = true
}

document.getElementById('buttonZero').addEventListener('click', () => {
    if (inputCount < 12 && btn0.clicked === false) {
        let i = inputCount
        primeRow[i] = 0
        lastClicked = btn0
        lastClickedOrder[i] = btn0
        previewRow[i].innerText = "0"
        inputCount++
        btn0.clicked = true
        buttonZero.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonOne').addEventListener('click', () => {
    if (inputCount < 12 && btn1.clicked === false) {
        let i = inputCount
        primeRow[i] = 1
        lastClicked = btn1
        lastClickedOrder[i] = btn1
        previewRow[i].innerText = "1"
        inputCount++
        btn1.clicked = true
        buttonOne.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonTwo').addEventListener('click', () => {
    if (inputCount < 12 && btn2.clicked === false) {
        let i = inputCount
        primeRow[i] = 2
        lastClicked = btn2
        lastClickedOrder[i] = btn2
        previewRow[i].innerText = "2"
        inputCount++
        btn2.clicked = true
        buttonTwo.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonThree').addEventListener('click', () => {
    if (inputCount < 12 && btn3.clicked === false) {
        let i = inputCount
        primeRow[i] = 3
        lastClicked = btn3
        lastClickedOrder[i] = btn3
        previewRow[i].innerText = "3"
        inputCount++
        btn3.clicked = true
        buttonThree.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonFour').addEventListener('click', () => {
    if (inputCount < 12 && btn4.clicked === false) {
        let i = inputCount
        primeRow[i] = 4
        lastClicked = btn4
        lastClickedOrder[i] = btn4
        previewRow[i].innerText = "4"
        inputCount++
        btn4.clicked = true
        buttonFour.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonFive').addEventListener('click', () => {
    if (inputCount < 12 && btn5.clicked === false) {
        let i = inputCount
        primeRow[i] = 5
        lastClicked = btn5
        lastClickedOrder[i] = btn5
        previewRow[i].innerText = "5"
        inputCount++
        btn5.clicked = true
        buttonFive.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonSix').addEventListener('click', () => {
    if (inputCount < 12 && btn6.clicked === false) {
        let i = inputCount
        primeRow[i] = 6
        lastClicked = btn6
        lastClickedOrder[i] = btn6
        previewRow[i].innerText = "6"
        inputCount++
        btn6.clicked = true
        buttonSix.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonSeven').addEventListener('click', () => {
    if (inputCount < 12 && btn7.clicked === false) {
        let i = inputCount
        primeRow[i] = 7
        lastClicked = btn7
        lastClickedOrder[i] = btn7
        previewRow[i].innerText = "7"
        inputCount++
        btn7.clicked = true
        buttonSeven.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonEight').addEventListener('click', () => {
    if (inputCount < 12 && btn8.clicked === false) {
        let i = inputCount
        primeRow[i] = 8
        lastClicked = btn8
        lastClickedOrder[i] = btn8
        previewRow[i].innerText = "8"
        inputCount++
        btn8.clicked = true
        buttonEight.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonNine').addEventListener('click', () => {
    if (inputCount < 12 && btn9.clicked === false) {
        let i = inputCount
        primeRow[i] = 9
        lastClicked = btn9
        lastClickedOrder[i] = btn9
        previewRow[i].innerText = "9"
        inputCount++
        btn9.clicked = true
        buttonNine.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonTen').addEventListener('click', () => {
    if (inputCount < 12 && btn10.clicked === false) {
        let i = inputCount
        primeRow[i] = 10
        lastClicked = btn10
        lastClickedOrder[i] = btn10
        previewRow[i].innerText = "10"
        inputCount++
        btn10.clicked = true
        buttonTen.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('buttonEleven').addEventListener('click', () => {
    if (inputCount < 12 && btn11.clicked === false) {
        let i = inputCount
        primeRow[i] = 11
        lastClicked = btn11
        lastClickedOrder[i] = btn11
        previewRow[i].innerText = "11"
        inputCount++
        btn11.clicked = true
        buttonEleven.style.backgroundColor = "white"
        if (inputCount === 12) {
            fillMatrix()
            getPlaybackOrder()
            getInvPlaybackOrder()
            cueAnims()
        }
    }
})

document.getElementById('undo').addEventListener('click', () => {
    if (inputCount > 0 && inputCount < 12) {
        let i = inputCount
        primeRow[i] = null
        previewRow[i - 1].innerText = ""
        lastClicked.button.style.backgroundColor = ""
        lastClicked.clicked = false
        lastClickedOrder[i] = null
        lastClicked = lastClickedOrder[i - 2]
        inputCount--
    }
})

document.getElementById('primePlayback').addEventListener('click', () => {
    if (playing === false) {
        playing = true
        playbackOrder[0].play()
        sleep(300).then(() => { playbackOrder[1].play() })
        sleep(600).then(() => { playbackOrder[2].play() })
        sleep(900).then(() => { playbackOrder[3].play() })
        sleep(1200).then(() => { playbackOrder[4].play() })
        sleep(1500).then(() => { playbackOrder[5].play() })
        sleep(1800).then(() => { playbackOrder[6].play() })
        sleep(2100).then(() => { playbackOrder[7].play() })
        sleep(2400).then(() => { playbackOrder[8].play() })
        sleep(2700).then(() => { playbackOrder[9].play() })
        sleep(3000).then(() => { playbackOrder[10].play() })
        sleep(3300).then(() => { playbackOrder[11].play() })
        sleep(3600).then(() => { playing = false })
    }
})

document.getElementById('retroPlayback').addEventListener('click', () => {
    if (playing === false) {
        playing = true
        playbackOrder[11].play()
        sleep(300).then(() => { playbackOrder[10].play() })
        sleep(600).then(() => { playbackOrder[9].play() })
        sleep(900).then(() => { playbackOrder[8].play() })
        sleep(1200).then(() => { playbackOrder[7].play() })
        sleep(1500).then(() => { playbackOrder[6].play() })
        sleep(1800).then(() => { playbackOrder[5].play() })
        sleep(2100).then(() => { playbackOrder[4].play() })
        sleep(2400).then(() => { playbackOrder[3].play() })
        sleep(2700).then(() => { playbackOrder[2].play() })
        sleep(3000).then(() => { playbackOrder[1].play() })
        sleep(3300).then(() => { playbackOrder[0].play() })
        sleep(3600).then(() => { playing = false })
    }
})

document.getElementById('invPlayback').addEventListener('click', () => {
    if (playing === false) {
        playing = true
        invPlaybackOrder[0].play()
        sleep(300).then(() => { invPlaybackOrder[1].play() })
        sleep(600).then(() => { invPlaybackOrder[2].play() })
        sleep(900).then(() => { invPlaybackOrder[3].play() })
        sleep(1200).then(() => { invPlaybackOrder[4].play() })
        sleep(1500).then(() => { invPlaybackOrder[5].play() })
        sleep(1800).then(() => { invPlaybackOrder[6].play() })
        sleep(2100).then(() => { invPlaybackOrder[7].play() })
        sleep(2400).then(() => { invPlaybackOrder[8].play() })
        sleep(2700).then(() => { invPlaybackOrder[9].play() })
        sleep(3000).then(() => { invPlaybackOrder[10].play() })
        sleep(3300).then(() => { invPlaybackOrder[11].play() })
        sleep(3600).then(() => { playing = false })
    }
})

document.getElementById('retroInvPlayback').addEventListener('click', () => {
    if (playing === false) {
        playing = true
        invPlaybackOrder[11].play()
        sleep(300).then(() => { invPlaybackOrder[10].play() })
        sleep(600).then(() => { invPlaybackOrder[9].play() })
        sleep(900).then(() => { invPlaybackOrder[8].play() })
        sleep(1200).then(() => { invPlaybackOrder[7].play() })
        sleep(1500).then(() => { invPlaybackOrder[6].play() })
        sleep(1800).then(() => { invPlaybackOrder[5].play() })
        sleep(2100).then(() => { invPlaybackOrder[4].play() })
        sleep(2400).then(() => { invPlaybackOrder[3].play() })
        sleep(2700).then(() => { invPlaybackOrder[2].play() })
        sleep(3000).then(() => { invPlaybackOrder[1].play() })
        sleep(3300).then(() => { invPlaybackOrder[0].play() })
        sleep(3600).then(() => { playing = false })
    }
})