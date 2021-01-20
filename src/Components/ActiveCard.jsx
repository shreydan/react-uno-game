import React from 'react'
import Card from './Card';

function ActiveCard(props) {
    const card = props.activeCard;
    if (card.value === null && card.color === null) {
        card.value = ""
        card.color = "#aeaeae";
    }

    return (
        <div className="activeCardcontainer">
            <Card text={card.value} color={card.color} zIndex={1}/>
        </div>
    )
}

export default ActiveCard
