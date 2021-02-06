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

    const cardPlayable = card => {
        if(card.playable && turn[0] === 1) {
            console.log('playable')
            return true;
        }
        else {
            console.log('not playable')
            return false
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
                                 cardPlayable={cardPlayable(card)}
                                 rotation={'0deg'}
                            />
                  })
            }
        </div>
    );
}

export default Player;