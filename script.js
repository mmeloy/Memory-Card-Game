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

let counter = 0
let playermoves = [];
let playerMoveElements = [];
document.querySelector("title");
const memcards = document.querySelectorAll('.cards')
function clickCard() {
    // counter++
    playermoves.push(this.getAttribute("data-image"))
    this.lastElementChild.classList.add('hideHerky');
    
    playerMoveElements.push(this.lastElementChild);
    console.log(playermoves, playerMoveElements);
    if (playermoves.length == 2 && playermoves[0] === playermoves[1]) {
        console.log("found match")
        this.removeEventListener("click", clickCard);
        playermoves = [];
        playerMoveElements = [];

    } else if (playermoves.length == 2) {
        
        console.log("unClickCards")
        unClickCards();
        
    } else {
        return;

    }
            
            
        


}
function unClickCards() {
    
    
        playerMoveElements[0].classList.remove('hideHerky');
        playerMoveElements[1].classList.remove('hideHerky');
        playerMoveElements = [];
        playermoves = [];
    }


function addListenerToCards() {
    for (let i = 0; i < memcards.length; i++) {
        let card = memcards[i] 
        card.addEventListener("click", clickCard)
        
    }

}
addListenerToCards();



console.log(memcards)
// const resetButton = document.querySelector('#reset')
// const front = document.querySelectorAll('.front')
// const back = document.querySelectorAll('.back')
// console.log(boxes)

// console.log(front)
// console.log(back)


// let firstC, secondC;
// let cardFlipped = false;
// let freeze = false;


function flip() {
    if (freeze) return;
    if (this === firstC) return;

    this.classList.add('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstC = this;

        return;

    

    }
}
(function shuffle() {
    memcards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();



// let gameState = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
// let side2card = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]

//console.log(gameState.length)
// resetButton.addEventListener("click", resetGame);

// function resetGame() {
    // gameState = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
    // counter = 0

    // function boxEventListener() {
    //     gamestate[this.id] = currentPlayer;
    //     counter++
    //     winLogic();
    //     console.log(gameState);

    //     this.innerHTML = currentPlayer;

    //     if (currentPlayer === "X") {
    //         currentPlayer = "O";
    //     } else {
    //         currentPlayer = "X";
    //     }

       //function snippet from:  https://jsfiddle.net/james2doyle/qsQun/
    