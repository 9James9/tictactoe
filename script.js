const gameBoard = (function () {
    
    squares = () => {
        let tiles = ["","","","","","","","",""]
        const eachSquare = document.querySelectorAll('.boardSquare')
        let gameBoard = Array.from(eachSquare)
        gameBoard.forEach(square => {
            square.addEventListener('click', () => {
                square.textContent = 'O'
            })
        })
    
        
        /*eachSquare.forEach(square => {
            document.addEventListener('click', () => {
                square.textContent = 'O'
            } )
            
        })
        */
    }
    })()
squares()
