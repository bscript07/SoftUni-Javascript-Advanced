function printDeckOfCards(cards) {

    function createCard(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
    
        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            throw new Error("Error");
        }
    

        const infoForCard = {
            face: face,
            suit: suit,
            toString: () => {
                const symbols = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };
                return infoForCard.face + symbols[infoForCard.suit];
            }
        };
        return infoForCard;
    }


    const deck = [];
    for (const card of cards) {
        const face = card.slice(0, -1)
        const suit = card.slice(-1);

        try {
            deck.push(createCard(face, suit));
        } catch (error) {
            console.log("Invalid card: " + card);
            return;
        }

    }
    console.log(deck.join(' '));
}