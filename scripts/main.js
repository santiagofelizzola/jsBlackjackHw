const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

// declaring deal button
const dealButton = document.getElementById("deal-button")
// declaring variables with <img> tags
const card1 = document.createElement("img")
const card2 = document.createElement("img")
const card3 = document.createElement("img")
const card4 = document.createElement("img")
// Event listener for deal button click
dealButton.addEventListener("click", () => {
  // card1.setAttribute("src", "./images/10_of_clubs.png");
  // card2.setAttribute("src", "./images/10_of_clubs.png");
  // card3.setAttribute("src", "./images/10_of_clubs.png");
  // card4.setAttribute("src", "./images/10_of_clubs.png");
  // dealerHand.appendChild(card1);
  // dealerHand.appendChild(card2);
  // playerHand.appendChild(card3);
  // playerHand.appendChild(card4);
  buildDeck("10","hearts")
})
// Declaring hit Button
const hitButton = document.getElementById("hit-button")

const card5 = document.createElement("img")
const card6 = document.createElement("img")

// Event Listener for Hit button click
hitButton.addEventListener("click", () => {
  card5.setAttribute("src", "./images/10_of_clubs.png");
  card6.setAttribute("src", "./images/10_of_clubs.png");
  playerHand.appendChild(card5);
  dealerHand.appendChild(card6);
})

// Dont Understand the hint

//Build Deck
function buildDeck(rank,suit){
  const newImg = document.createElement("img");
  newImg.setAttribute("src", `./images/${rank}_of_${suit}.png`)
  dealerHand.appendChild(newImg)
}



window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});