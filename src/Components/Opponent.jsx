import React from 'react'
import './Player.css'

function Opponent(props) {

    return (
        <div className="opponent">
        {
            Array.from(Array(props.length), (_,x)=>x).map((key) => {
                return(
                    <div className="opponentCard" key={key} style={{zIndex: key}}>
                        <div>UNO!</div>
                    </div>
                )
            })
        }      
        </div>
    );
}

export default Opponent
