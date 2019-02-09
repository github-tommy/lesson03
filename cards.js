var cards = [['hearts', 'diamonds', 'clubs', 'spades'], ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j <cards[1].length; j++) {
  console.log(cards[1][j]+ ' of '+ cards[0][i]);
}
}

//'ace of hearts'
//' 2 of hearts'

/*

class Deck {
  constructor() {
    this.deck = [];
    
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = ['ace', 2,3,4,5,6,7,8,9,10, 'jack','queen', 'king'];
    
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
    }
   }
  }
}

const deck1 = new Deck();
console.log(deck1.deck);

// ["aces of hearts", "2 of hearts", "3 of hearts" etc......]
*/