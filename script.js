function playHuman () {
    document.querySelector('.startScreen').classList.add('startScreenShow')
let theArray = ["", "", "", "", "", "", "", "", ""]
const playGame = (function () {
    const cellElements = document.querySelectorAll('.boardSquare')
    let circleTurn
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {
            once: true
        })
    })

    function handleClick(e) {
        const cell = e.target
        console.log(e.target)
        const currentPlayer = circleTurn ? 'O' : 'X'
        placeMark(cell, currentPlayer)
        addToArray()
        checkWinner()
    }

    function placeMark(cell, currentPlayer) {
        cell.textContent = currentPlayer
        switchTurns()
    }

    function switchTurns() {
        if (circleTurn) {
            circleTurn = false
        } else circleTurn = true
        //circleTurn = true
        //!circleTurn
    }

    function addToArray() {
        let boardArray = Array.from(cellElements)
        for (let i = 0; i < boardArray.length; i++) {
            if (boardArray[i].textContent !== "")
                theArray.splice(i, 1, boardArray[i].textContent)
        }
        return theArray
    }

    function checkWinner() {
        let winningScreen = document.querySelector('#end')
        if (theArray[0] == theArray[1] && theArray[1] == theArray[2] && theArray[0] !== "") {
            assignWinner()
            winningScreen.classList.add('showEndScreen')
            return
        } else if (theArray[3] == theArray[4] && theArray[4] == theArray[5] && theArray[3] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        } else if (theArray[6] == theArray[7] && theArray[7] == theArray[8] && theArray[6] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        }
        //vertical
        if (theArray[0] == theArray[3] && theArray[3] == theArray[6] && theArray[0] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        } else if (theArray[1] == theArray[4] && theArray[4] == theArray[7] && theArray[1] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        } else if (theArray[2] == theArray[5] && theArray[5] == theArray[8] && theArray[2] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        }
        //diagonal
        if (theArray[0] == theArray[4] && theArray[4] == theArray[8] && theArray[0] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        } else if (theArray[2] == theArray[4] && theArray[4] == theArray[6] && theArray[2] !== "") {
            winningScreen.classList.add('showEndScreen')
            assignWinner()
            return
        }
        if (theArray[0] && theArray[1] && theArray[2] && theArray[3] && theArray[4] && theArray[5] && theArray[6] && theArray[7] && theArray[8] !== "") {
            winningScreen.classList.add('showEndScreen')
            draw = true
            return assignWinner(draw)
        }
    }

    function assignWinner(draw) {
        let endingMessage = document.querySelector('#announcement')
        if (draw) {
            return endingMessage.textContent = `It's a draw.`
        }
        if (circleTurn == true) {
            return endingMessage.textContent = `The winner is X`
        } else return endingMessage.textContent = `The winner is O`
    }

    function startOver() {
        window.location.reload()
    }
    let resetBtn = document.querySelector('.restart')
    resetBtn.addEventListener('click', startOver)
})()
}
const playComputer = (function () {
    const cellElements = document.querySelectorAll('.boardSquare')
    let playerTurn
    let computer
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true})
    })
    function handleClick(e) {
        const cell = e.target
        
        placeMark(cell)
    }
    function placeMark(cell) {
        cell.textContent = 'X'
        //addToArray(totalChoices)
        let boardArray = Array.from(cellElements)
        //console.log(boardArray[1].textContent)
        let theArray = ["","","","","","","","",""]
        
        let totalChoices = 9
        for (let i = 0; i < boardArray.length; i++) {
            theArray.splice(i,1,boardArray[i].textContent)
        }
        theArray.map((square, index) => {
            //console.log(square,index)
            if (square !== "") {
                //console.log(`the index is ${index} and square is ${square}`)
                
            } else return false
            for (let i = 0; i < boardArray[i]; i++) {
                if (boardArray[i].textContent == "") {
                    theArray.splice(i,1,'O')
                     boardArray[i].textContent = 'O'
                     break
                } else return
            }
            //boardArray[random(theArray.length)].textContent = 'O'
            //theArray.splice(index,1,'O')
        })

        //console.log(theArray)
        //console.log(totalChoices)
        //return theArray, boardArray
    }
    function random(num) {
        return Math.floor(Math.random() * num)
        
        
    }
})()

const startMenu = (function () {
    document.querySelector('.startGame').addEventListener('click', playHuman)
})()