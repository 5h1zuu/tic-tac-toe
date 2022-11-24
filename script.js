const gameBoard = (function() {
    let gameBoardObj = {gameboard:["","","","","","","","",""]}
    player1 = {} //factory function needed for both players
    player2 = {}

   
    

    function createGame(){
        let counter = 0
        const gameContent = document.getElementById("container")
        for(let i = 0; i < gameBoardObj.gameboard.length; i++){
            let content = document.createElement("div")
            content.innerText = gameBoardObj.gameboard[i]
            content.style.width = "100px"
            content.style.height = "100px"
            content.classList.add("square")
            gameContent.append(content) 
            content.addEventListener("click", () =>{
                if(counter % 2 == 0 && gameBoardObj.gameboard[i] == ""){
                    gameBoardObj.gameboard[i] = "x"
                    content.innerText = "x"
                    counter++
                    checkWin()
                }else if(counter % 2 == 1 && gameBoardObj.gameboard[i] == ""){
                    content.innerText = "o"
                    gameBoardObj.gameboard[i] = "o"
                    counter++
                    checkWin()
                }if(counter == 9){
                    console.log(gameBoardObj)
                    checkWin()
                }
            })


  


        }

        }

        function checkWin(){
            let winner = document.getElementById('winner')
            let score = document.createElement("p")
            winner.appendChild(score)
                if(gameBoardObj.gameboard[0] == "x" && gameBoardObj.gameboard[1] == "x" && gameBoardObj.gameboard[2] == "x"){
                    score.innerText = "x wins"
                    
                }else if(gameBoardObj.gameboard[3] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[5] == "x"){
                    score.innerText = "x wins"
                }else if(gameBoardObj.gameboard[6] == "x" && gameBoardObj.gameboard[7] == "x" && gameBoardObj.gameboard[8] == "x"){
                    score.innerText = "x wins"
                }else if(gameBoardObj.gameboard[0] == "x" && gameBoardObj.gameboard[3] == "x" && gameBoardObj.gameboard[6] == "x"){
                    score.innerText = "x wins"
                }else if(gameBoardObj.gameboard[1] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[7] == "x"){
                    score.innerText = "x wins"
                }else if(gameBoardObj.gameboard[2] == "x" && gameBoardObj.gameboard[5] == "x" && gameBoardObj.gameboard[8] == "x"){
                    score.innerText = "x wins"
                }else if(gameBoardObj.gameboard[0] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[8] == "x"){
                    score.innerText = "x wins"
                }else if(gameBoardObj.gameboard[2] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[6] == "x"){
                    score.innerText = "x wins"
                }

                else if(gameBoardObj.gameboard[0] == "o" && gameBoardObj.gameboard[1] == "o" && gameBoardObj.gameboard[2] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[3] == "o" && gameBoardObj.gameboard[4] == "o" && gameBoardObj.gameboard[5] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[6] == "o" && gameBoardObj.gameboard[7] == "o" && gameBoardObj.gameboard[8] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[0] == "o" && gameBoardObj.gameboard[3] == "o" && gameBoardObj.gameboard[6] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[1] == "o" && gameBoardObj.gameboard[4] == "o" && gameBoardObj.gameboard[7] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[2] == "o" && gameBoardObj.gameboard[5] == "o" && gameBoardObj.gameboard[8] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[0] == "o" && gameBoardObj.gameboard[4] == "o" && gameBoardObj.gameboard[8] == "o"){
                    score.innerText = "o wins"
                }else if(gameBoardObj.gameboard[2] == "o" && gameBoardObj.gameboard[4] == "o" && gameBoardObj.gameboard[6] == "o"){
                    score.innerText = "o wins"
                }else{
                    console.log("draw")
                }
            }
           

    createGame()
    




})();



