const playGame = (function () {
    chooseTeam = () => {
        const chooseX = document.querySelector('#chooseX')
        const chooseO = document.querySelector('#chooseO')
        chooseX.addEventListener('click', () => {
            console.log('X')
            return team = 'X'  
        })
        chooseO.addEventListener('click', () => {
            console.log("O")
             return team = "O"
        })
    }
    squares = () => {
        let tiles = ["","","","","","","","",""]
        const eachSquare = document.querySelectorAll('.boardSquare')
        let gameBoard = Array.from(eachSquare)
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].addEventListener('click', () => {
                if (gameBoard[i].textContent == "") {
                console.log(i)
                gameBoard[i].textContent = team
                tiles.splice(i, 1 , team)
                console.log(tiles)
                } else alert('you must pick another')
            })
        }
        return gameBoard
    }
    reset = () => {
        document.querySelector('#reset').addEventListener('click', () => {
        tiles = ["","","","","","","","",""]
        let allItems = document.querySelectorAll('.boardSquare')
        for (let i in allItems) {
            allItems[i].textContent = ""
        }
        return
        })
    }
    
    return chooseTeam(), reset()
    })()
squares()



