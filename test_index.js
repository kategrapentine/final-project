var expect = chai.expect;

describe('My Functions', () => {
    describe('#CreateSuit', () => {
        it('Should create a suit of 13 cards', () => {
            deck = [];
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
            length === x.length;
        });
        it('Should not return in the same order', () => {
            let x = [1, 2, 3, 4];
            shuffle(x);
            x != [1, 2, 3, 4];
        })
    });
});