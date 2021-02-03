import './Card.css';

function Card(props) {
    

    var cardchars = props.text.split('');
    return(
        <div className="card"
            style={{"backgroundColor": props.color, "zIndex": props.zIndex}}>
            {
                cardchars.map((letter, key) => {
                return <div key={key}>{letter}</div>
                })
            }
        </div>
    );

}
export default Card;