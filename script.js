const gameBoard = (function() {
    let gameBoardObj = {gameboard:["x","o","x","x","o","x","x","o","x"]}
    player1 = {}
    player2 = {}

   
    

    function createGame(){
        const gameContent = document.getElementById("container")
        for(let i = 0; i < gameBoardObj.gameboard.length; i++){
            let content = document.createElement("div")
            content.innerText = gameBoardObj.gameboard[i]
            content.style.width = "100px"
            content.style.height = "100px"
            content.classList.add("square")
            gameContent.append(content) 
            content.addEventListener("click", ()=>{
                if(content.innerText == "x"){
                    content.innerText= "o"
                }else if(content.innerText == "o"){
                    content.innerText = "x"
                }            
            })
        }
    }

    createGame()

    




})();



