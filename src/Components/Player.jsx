import React, { useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';
import './Player.css'
import Card from '../Components/Card';
import {checkPlayable} from '../cardHandler';


function Player(props) {
    const {active, turn} = useContext(GameContext);
    var cards = []
    props.cards.forEach(card => {
        var playable = {playable: checkPlayable(active, card)}
        card = {...card, ...playable} // combines 2 objects
        cards.push(card)
    })

    const playCard = card => {
        if(card.playable && turn.playerTurn === 1) {
            console.log('playable')
            active.setActiveCard(card)
        }
        else {
            console.log('not playable')
        }
    }

    console.log(cards)
    return (
        <div className="player">
            {
                cards.map((card, key)=>{
                    return <Card text={card.value} 
                                 color={card.color} 
                                 zIndex={key}
                                 key = {key}
                                 playCard={playCard(card)}
                            />
                  })
            }
        </div>
    );
}

export default Player;