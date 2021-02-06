import React from 'react'
import Card from './Card';

function ActiveCard(props) {
    const card = props.activeCard;
    if (card.value === null && card.color === null) {
        card.value = ""
        card.color = "#aeaeae";
    }
    const deg = (Math.round(Math.random()*(15)) * (Math.round(Math.random()) ? 1:-1)).toString()+"deg"

    return (
        <div className="activeCardcontainer">
            <Card text={card.value} color={card.color} zIndex={1} rotation={deg}/>
        </div>
    )
}

export default ActiveCard
