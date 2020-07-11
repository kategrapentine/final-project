var expect = chai.expect;

describe('My Functions', () => {
    describe('#CreateSuit', () => {
        it('Should create a suit of 13 cards', () => {
            deck = []; //making sure deck is empty
            createSuit('swords');
            expect(deck.length).to.equal(13);
        });
        it('Should contain an Ace, Jack, Queen, and King cards', () => {
            deck = [];
            createSuit('cups');
            expect(deck[9].face).to.equal('J of cups');
            expect(deck[10].face).to.equal('Q of cups');
            expect(deck[11].face).to.equal('K of cups');
            expect(deck[12].face).to.equal('A of cups');
            
        });
    });
    describe('#Shuffle', () => {
        it('Should contain the same amount of elements', () => {
            let x = [1, 2, 3, 4];
            length = x.length;
            shuffle(x);
            expect(length).to.equal(x.length);
        });
        it('Should not return in the same order', () => {
            let x = [1, 2, 3, 4];
            shuffle(x);
            expect(x).to.not.equal([1, 2, 3, 4]);
        });
    });
});

describe('My Class Methods', () => {
    describe('#NewGame', () => {
        it('Should deal both players 26 cards', () => {
            menu.newGame();
            expect(playerOne.deck.length && playerTwo.deck.length).to.equal(26);
        });
        it('Players should have a name', () => {
            expect(playerOne.name && playerTwo.name).to.be.a('string');
        });
        it('Players should have a blank card', () => {
            expect(playerOne.card[0].face || playerTwo.card[0].face).to.equal('');
        });
    });
    describe('#DrawCards', () => {
        it('Should splice a card from both player decks', () => {
            menu.drawCards();
            expect(playerOne.deck.length && playerTwo.deck.length).to.equal(25);
        });
        it('Should increase player scores', () => {
            //running method a few more times in case of ties
            menu.drawCards();
            menu.drawCards();
            menu.drawCards();
            expect(playerOne.score || playerTwo.score).to.be.above(0);
        });
    });
    describe('#ShowMenu', () => {
        it('Should return a string', () => {
            let x = menu.showMenu();
            expect(x).to.be.a('string');
        });
    });
});
