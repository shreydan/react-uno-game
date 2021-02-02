import React, { useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';
import './Player.css'
import Card from '../Components/Card';
import {checkPlayable} from '../cardHandler';

function Player(props) {
    var cards = props.cards;
    const {active} = useContext(GameContext);
    return (
        <div className="player">
            {
                cards.map((card, key)=>{
                    return <Card text={card.value} 
                                 color={card.color} 
                                 zIndex={key}
                                 
                            />
                  })
            }
        </div>
    );
}

export default Player;