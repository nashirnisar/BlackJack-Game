let player =
{
    name: "Player",
    chips: 200
}
let sum = 0
let cards =[]

let hasBlackjack = false;
let isAlive = false;
let message = ""

let messageEL = document.getElementById("h1")
let sumEL = document.getElementById("h3")
let cardsEL = document.getElementById("h2")
let playerEl = document.getElementById("h4")
playerEl.textContent = player.name + ": $"+ player.chips

function getRandomCard()
{
        let randomCard = Math.floor(Math.random()*13)+1
        if(randomCard===1)
        {
            return 11
        }
        else if(randomCard > 10)
        {
            return 10
        }
        else
        {
            return randomCard
        }        
   
}
function startGame()
{
    isAlive = true
     let firstDraw = getRandomCard()
     let SecondDraw = getRandomCard()
     cards =[firstDraw, SecondDraw]
     sum = firstDraw + SecondDraw
     renderGame()
}
function renderGame()
{
    cardsEL.textContent ="Cards :"
    for(let i = 0; i<cards.length;i++)
    {
        cardsEL.textContent += cards[i] + " "
    } 
    
    
     sumEL.textContent = "Sum : "+ sum;
     
     
     if(sum<20)
        {
        message = "Do you want to draw a new card?"  
        isAlive = true; 
        }
        else if(sum===21)
        {
        message = "You've got the BlackJack!!!" 
        hasBlackjack = true;  
        }
        else
        {
        message = "You've lost the game"
        isAlive = false;
        }
         messageEL.textContent = message;
       
}

function newCard()
{
 if(isAlive===true && hasBlackjack===false){
 let card = getRandomCard()
 sum += card
 cards.push(card)
 renderGame();
 }   
}
