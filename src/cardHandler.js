export const checkPlayable = (activeCard, currentCard) => {
    console.log(activeCard[0], currentCard)
    var clickable = false;
    if(activeCard[0].value === currentCard.value || activeCard[0].color === currentCard.color) {

        clickable = true;
    }

    return clickable;
}