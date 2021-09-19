function playHuman() {
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
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {
            once: true
        })
    })

    function handleClick(e) {
        const cell = e.target

        placeMark(cell)
        computerPlay()
        checkWinner()
    }

    function placeMark(cell) {
        cell.textContent = 'X'
    }

    function computerPlay() {
        let available = []
        
        if (document.querySelector('.boardSquare.one').textContent == '') {
            available.push(document.querySelector('.boardSquare.one'))
        }
        if (document.querySelector('.boardSquare.two').textContent == '') {
            available.push(document.querySelector('.boardSquare.two'))
        } 
        if (document.querySelector('.boardSquare.three').textContent == '') {
            available.push(document.querySelector('.boardSquare.three'))
        } 
        if (document.querySelector('.boardSquare.four').textContent == '') {
            available.push(document.querySelector('.boardSquare.four'))
        } 
        if (document.querySelector('.boardSquare.five').textContent == '') {
            available.push(document.querySelector('.boardSquare.five'))
        } 
        if (document.querySelector('.boardSquare.six').textContent == '') {
            available.push(document.querySelector('.boardSquare.six'))
        } 
        if (document.querySelector('.boardSquare.seven').textContent == '') {
            available.push(document.querySelector('.boardSquare.seven'))
        } 
        if (document.querySelector('.boardSquare.eight').textContent == '') {
            available.push(document.querySelector('.boardSquare.eight'))
        } 
        if (document.querySelector('.boardSquare.nine').textContent == '') {
            available.push(document.querySelector('.boardSquare.nine'))
        } 
        console.log(random(available.length))
        console.log(available)
        let theChoice = random(available.length)
        available[theChoice].textContent = 'O'
        
    }
    function checkWinner() {
        let one = (document.querySelector('.boardSquare.one').textContent)
        let two = (document.querySelector('.boardSquare.two').textContent)
        let three = (document.querySelector('.boardSquare.three').textContent)
        let four = (document.querySelector('.boardSquare.four').textContent)
        let five = (document.querySelector('.boardSquare.five').textContent)
        let six = (document.querySelector('.boardSquare.six').textContent)
        let seven = (document.querySelector('.boardSquare.seven').textContent)
        let eight = (document.querySelector('.boardSquare.eight').textContent)
        let nine = (document.querySelector('.boardSquare.nine').textContent)
        if (one == two && two == three) {
            //horizontals
            if (one == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (one == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        if (four == five && five == six) {
            if (four == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (four == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        if (seven == eight && eight == nine) {
            if (seven == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (seven == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        //verticals
        if (one == four && four == seven) {
            if (one == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (one == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        if (two == five && five == eight) {
            if (two == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (two == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        if (three == six && six == nine) {
            if (three == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (three == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        //diagonals
        if (one == five && five == nine) {
            if (one == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (one == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
        if (three == five && six == nine) {
            if (three == 'X') {
                alert('You win')
                //assignWinner('X')
            } else if (three == 'O') {
                alert('You lose')
                //assignWinner('O')
            }
            
        }
    }
    function assignWinner(lastMove) {
        let endingMessage = document.querySelector('#announcement')
        
        if (lastMove == 'X') {
            return endingMessage.textContent = `You win!`
        } else if (lastMove == 'O') {
            return endingMessage.textContent = `The computer wins`
        } else {
            return endingMessage.textContent = `Draw`
        }
    }
    function random(num) {
        return Math.floor(Math.random() * num)
    }
})()

const startMenu = (function () {
    document.querySelector('.startGame').addEventListener('click', playHuman)
})()