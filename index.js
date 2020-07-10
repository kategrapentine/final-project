//sets up blank array for the deck:
let deck = [];

//The card class creates an object for every card, assigning it's value as well as keeping track of it's suit:
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suite = suit;

        switch (value) {
            case 10:
                this.face = `J of ${suit}`;
                break;
            case 11:
                this.face = `Q of ${suit}`;
                break;
            case 12:
                this.face = `K of ${suit}`;
                break;
            case 13:
                this.face = `A of ${suit}`;
                break;
            case 'N':
                this.face = '';
                break;
            default:
                this.face = `${value + 1} of ${suit}`;;
                break
       }
    }
}

const blankCard = new Card('N', ''); // This variable creates a blank card to display in the menu.

class Player {
    constructor(name, score, card, deck) {
        this.name = name;
        this.score = score;
        this.card = card;
        this.deck = deck;
    }
}
let playerOne = new Player('Player 1', 0, [blankCard], []);
let playerTwo = new Player('Player 2', 0, [blankCard], []);

//The menu class provides a menu to navagate through the game.
class Menu {
    start() {
            let selection = this.showMenu()

            while (selection != 'Q') {
                switch (selection) {
                    case 'D':
                        this.drawCards();
                        break;
                    case 'N':
                        this.newGame();
                        break;
                    case 'R':
                        alert(`\n War Rules:` +
                            `\n - Both players get drawn 26 cards from a standard playing card deck.` +
                            `\n - Both players draw and whoever has the higher card gets the point.` +
                            `\n - Ace beats King in this game.` +
                            `\n - If a match is tied, no one gets a point.
                        `);
                    break;
            }
                selection = this.showMenu();
            
        }
        alert('Thanks for playing!');  
    }

    showMenu(){
        if (playerOne.deck.length > 0){
            return prompt(`
            ${playerOne.name}'s card: ${playerOne.card[0].face} 
            ${playerTwo.name}'s card: ${playerTwo.card[0].face}
            Draws Left: ${playerOne.deck.length}
            ----------------------------
            Scores: 
            ${playerOne.name} - ${playerOne.score} | ${playerTwo.name} - ${playerTwo.score}
            ----------------------------
            D) Draw  |  N) New Game  |  R) Rules  |  Q) Quit
            `).toUpperCase();
        } else if (playerOne.deck.length == 0) { //For when the score needs to be alerted.
            return prompt(`
            ${playerOne.name}'s card: ${playerOne.card[0].face} 
            ${playerTwo.name}'s card: ${playerTwo.card[0].face}
            Draws Left: ${playerOne.deck.length}
            ----------------------------
            Scores: 
            ${playerOne.name} - ${playerOne.score} | ${playerTwo.name} - ${playerTwo.score}
            ----------------------------
            D) Show Final Score  |  N) New Game  |  R) Rules  |  Q) Quit
            `).toUpperCase();
        }
    }

//drawCards will splice a card from the top of each payer deck, if there are no cards left it will display the final score:
    drawCards(){
        if (playerOne.deck.length > 0) {
            playerOne.card = playerOne.deck.splice(0, 1);
            playerTwo.card = playerTwo.deck.splice(0, 1);
    
            if (playerOne.card[0].value > playerTwo.card[0].value) {
                playerOne.score += 1;
                } else if (playerOne.card[0].value < playerTwo.card[0].value) {
                playerTwo.score += 1;
                }
    
        } else if (playerOne.deck.length <= 0 && playerOne.score > playerTwo.score) {
            alert(`
            ${playerOne.name} wins!
            ${playerOne.name} - ${playerOne.score} | ${playerTwo.name} - ${playerTwo.score}`);
    
        } else if (playerOne.deck.length <= 0 && playerOne.score < playerTwo.score) {
            alert(`
            ${playerTwo.name} wins!
            ${playerOne.name} - ${playerOne.score} | ${playerTwo.name} - ${playerTwo.score}`);
    
        } else if (playerOne.deck >= 0 && playerOne.score == playerTwo.score){
            alert(`
            Tie! 
            ${playerOne.name} - ${playerOne.score} | ${playerTwo.name} - ${playerTwo.score}`);
    
        }
    }

/*newGame makes sure the deck is clear of elements and clears score, player names, and display. Then it creates, shuffles, and deals a new deck.
If the user doesn't provide a name for the players, then it will assign a name to the players.
*/
    newGame() {
        playerOne.deck = [];
        playerTwo.deck = [];
    
        playerOne.name = prompt('Please enter player 1 name:');
        playerTwo.name = prompt('Please enter player 2 name:');
    
        if (playerOne.name === '') {
            playerOne.name = 'Player 1';
        }
    
        if (playerTwo.name === '') {
            playerTwo.name = 'Player 2';
        }
    
        playerOne.card[0] = blankCard;
        playerTwo.card[0] = blankCard;
    
        deck = [];
        playerOne.score = 0;
        playerTwo.score = 0;
    
        createSuit('spades');
        createSuit('clubs');
        createSuit('hearts');
        createSuit('diamonds');
        shuffle(deck);
    
        playerOne.deck = deck.splice(0, 26);
        playerTwo.deck = deck;
    }
    
}

//this function creates 13 cards and assigns a suit name:
function createSuit(suit) {
    for (let i = 1; i <= 13; i++) {
        deck.push(new Card(i, suit));
    } 
}

/*
to shuffle the deck I found an algorithm called the Fisher-Yates shuffle
I found this algorthim here: "https://javascript.info/task/shuffle".
This algorithm iterates through an array backwards, then replaces the element with one that goes before it:
*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}



let menu = new Menu;

// menu.newGame();
// menu.start();
