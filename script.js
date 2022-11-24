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
                }else if(counter % 2 == 1 && gameBoardObj.gameboard[i] == ""){
                    content.innerText = "o"
                    gameBoardObj.gameboard[i] = "o"
                    counter++
                }if(counter == 9){
                    console.log(gameBoardObj)
                    checkWin()
                }
            })


  


        }

        }

        function checkWin(){
                if(gameBoardObj.gameboard[0] == "x" && gameBoardObj.gameboard[1] == "x" && gameBoardObj.gameboard[2] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[3] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[5] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[6] == "x" && gameBoardObj.gameboard[7] == "x" && gameBoardObj.gameboard[8] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[0] == "x" && gameBoardObj.gameboard[3] == "x" && gameBoardObj.gameboard[6] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[1] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[7] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[2] == "x" && gameBoardObj.gameboard[5] == "x" && gameBoardObj.gameboard[8] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[0] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[8] == "x"){
                    console.log("x wins")
                }else if(gameBoardObj.gameboard[2] == "x" && gameBoardObj.gameboard[4] == "x" && gameBoardObj.gameboard[6] == "x"){
                    console.log("x wins")
                }
        



    createGame()
    




})();



