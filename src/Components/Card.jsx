import './Card.css';
import React, { useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';
import {checkPlayable} from '../cardHandler';

function Card(props) {
    
    const {_,__,active} = useContext(GameContext);


    var playable = checkPlayable(active, [props.text, props.color]);

    var cardchars = props.text.split('');
    console.log(cardchars);
    return(
    <div className="card"
        style={{"backgroundColor": props.color, "zIndex": props.zIndex}}
        onClick={()=>  playable ? 
                        active.setActiveCard({ "value": props.text, "color": props.color })
                         : console.log("unplayable")}>
        {
            cardchars.map((letter) => {
            return <div>{letter}</div>
              })
        }
    </div>
    );

}
export default Card;