const gameBoard = (function () {
    
    squares = () => {
        let tiles = ["","","","","","","","",""]
        let team = 'O'
        const eachSquare = document.querySelectorAll('.boardSquare')
        let gameBoard = Array.from(eachSquare)
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].addEventListener('click', () => {
                console.log(i)
                tiles.splice(i, 1 , team)
                console.log(tiles)
            })
        }
        gameBoard.forEach(square => {
            square.addEventListener('click', () => {
                square.textContent = 'O'
                
            })
        })
    checkIndex = (event) => {
        console.log(Array.from(event).indexOf(event,target))
    }
        
        /*eachSquare.forEach(square => {
            document.addEventListener('click', () => {
                square.textContent = 'O'
            } )
            
        })
        */
        return tiles
    }
    
    })()
squares()
