				
console.log("Up and running!");

var cards = [
    {
    	card: 'queen',
    	suit: 'hearts',
    	cardImage: 'images/queen-of-hearts.png'
    },
    {
    	card: 'queen',
    	suit: 'diamonds',
    	cardImage: 'images/queen-of-diamonds.png'
    },
    {
    	card: 'king',
    	suit: 'hearts',
    	cardImage: 'images/king-of-hearts.png'
    },
    {
    	card: 'king',
    	suit: 'diamonds',
    	cardImage: 'images/king-of-diamonds.png'
    }
    ];
    
// tis array store cards in play.
var cardsInPlay = [];

// function to check for match
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("you found a match!");
}   else { 
	  alert("sorry, try again.");
  }
};
// function user flipping card!
var flipCard = function () {

    cardId = this.getAttribute('data-id');

    console.log(cardId);

   cardsInPlay.push(cards[cardId].card);   
                  // - -
   this.setAttribute('src', cards[cardId].cardImage);

   if (cardsInPlay.length === 2) {

        checkForMatch();

        cardsInPlay = [];
     }
};     //----------

var createBoard = function () {

for (var i - 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', 'images/back.png');

    cardElement.setAtrribute('data-id', i);

    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);
}
}
// to call createboard function & create board.
createBoard();





 









