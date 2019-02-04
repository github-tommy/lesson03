let suit = 'hearts';
for (let i = 0; i < 4; i++) {
  if (i === 0) {
    suit = 'hearts';    
  } else if (i === 1) {
    suit = 'diamonds';
  } else if (i === 2) {
    suit = 'spades';
  } else if (i === 3) {
    suit = 'clubs';
  }
  let number = 'aces';
  for (let x = 1; x < 14; x++) {
    if(x === 1) {
      number = 'aces'; 
   } else if (x === 2) {
     number = 'two';
   } else if (x === 3) {
     number = 'three';
   } else if (x === 4) {
     number = 'four';
   } else if (x === 5) {
     number = 'five';
   } else if (x === 6) {
     number = 'six';
   } else if (x === 7) {
     number = 'seven';
   } else if (x === 8) {
     number = 'eight';
   } else if (x === 9) {
     number = 'nine';
   } else if (x === 10) {
     number = 'ten';
   } else if (x === 11) {
     number = 'jack';
   } else if (x === 12) {
     number = 'queen';
   } else if (x === 13) {
     number = 'king';
   } console.log(suit, number);
}
}
// hearts,1, 2, etc
//spades, 1, 2, etc