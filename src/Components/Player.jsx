import React, { useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';
import './Player.css'
import Card from '../Components/Card';
import {checkPlayable} from '../cardHandler';


function Player(props) {
    const {active} = useContext(GameContext);
    var cards = []
    props.cards.forEach(card => {
        var playable = {playable: checkPlayable(active, card)}
        card = {...card, ...playable}
        cards.push(card)
    })
    console.log(cards)
    return (
        <div className="player">
            {
                cards.map((card, key)=>{
                    return <Card text={card.value} 
                                 color={card.color} 
                                 zIndex={key}
                                 key = {key}
                            />
                  })
            }
        </div>
    );
}

export default Player;