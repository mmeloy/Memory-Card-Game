// Restart Game Function button - resets and re-shuffles cards, 
//a nice to have would be a "are you sure prompt"

//Turn counter function to keep track of number of turns in current game
//function for best score denotes lowest number of turns in a game during current session (nice to have)



//all side one of cards should have same image / pic
//side 2 of cards should have matching pairs of letters, numbers, images, etc.

//need event listener for each card , "onclick" to flip card to side 2
// second card is flipped, and function compares result of two flipped cards, if they are equal, clear the 2 card spaces and loop back to 

//function to display / shuffle cards randomly into the grid array, two cards side 1 and side 2 will need to display in the same area


//SILVER ideas
//allow user to select difficulty level
//easy
//hard
//expert
//are you crazy





//GOLD
//let user select number of cards for a game - mults of 2
//successfully solving all matches reveals a picture, saying. etc on background behind cards
//add CSS3 flip card animation

//allow for 2 players with alternating turns  
const boxes = document.querySelectorAll('.box');
const resetButton = document.querySelector('#reset')

console.log(boxes)


let gameState = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let side2card = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let counter = 0
//console.log(gameState.length)
resetButton.addEventListener("click", resetGame);

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
    counter = 0

    function boxEventListener() {
        gamestate["#id0"] = "X";
        counter++
        winLogic();
        console.log(gameState);

        this.innerHTML = currentPlayer;

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

    
}    
}

