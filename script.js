let theArray = ["","","","","","","","",""]
const playGame = (function () {
    const cellElements = document.querySelectorAll('.boardSquare')
    let circleTurn
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
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
    function switchTurns () {
        circleTurn = !circleTurn
    }
    function addToArray () {
        let boardArray = Array.from(cellElements)
        for (let i = 0; i < boardArray.length; i++) {
            if (boardArray[i].textContent !== "")
            theArray.splice(i,1,boardArray[i].textContent)
        
        }
        return theArray
    }
    function checkWinner () {
        let winningScreen = document.querySelector('#end')
        if (theArray[0] == theArray[1] && theArray[1] == theArray[2] && theArray[0] !== "") {
            alert('horizontal win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
            
            
        } else if (theArray[3] == theArray[4] && theArray[4] == theArray[5] && theArray[3]  !== "") {
            alert('horizontal win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        } else if (theArray[6] == theArray[7] && theArray[7] == theArray[8] && theArray[6] !== "") {
            alert('horizontal win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        }
        //vertical
        if (theArray[0] == theArray[3] && theArray[3] == theArray[6] && theArray[0] !== "") {
            alert('vertical win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        } else if (theArray[1] == theArray[4] && theArray[4] == theArray[7] && theArray[1] !== "") {
            alert('vertical win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        } else if (theArray[2] == theArray[5] && theArray[5] == theArray[8] && theArray[2] !== "") {
            alert('vertical win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        }
        //diagonal
        if (theArray[0] == theArray[4] && theArray[4] == theArray[8] && theArray[0] !== "") {
            alert('diagonal win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        } else if (theArray[2] == theArray[4] && theArray[4] == theArray[6] && theArray[2] !== "") {
            alert ('diagonal win')
            winningScreen.classList.remove('endScreen')
            winningScreen.classList.add('showEndScreen')
        }
    }
})()