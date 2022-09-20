
export const creatDeck = () => {
    const arrCards = [];
    for (let i = 0; i < 4; i++) {
        for (let y = 2; y <= 14; y++) {
          arrCards.push(y);
        }
      }
    return arrCards;
}