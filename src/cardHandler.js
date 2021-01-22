export const checkPlayable = (activeCard, currentCard) => {
    const [activeValue, activeColor] = activeCard;
    const [currentValue, currentColor] = currentCard;

    var clickable = false;

    if(activeValue === currentValue || activeColor === currentColor) {
        clickable = true;
    }

    return clickable;
}