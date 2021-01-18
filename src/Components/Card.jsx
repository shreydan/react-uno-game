import './Card.css';


function Card(props) {
    
    

    var cardchars = props.text.split('');
    console.log(cardchars);
    return(
    <div className="card" style={{"backgroundColor": props.color, "zIndex": props.zIndex}}>
        {
            cardchars.map((letter) => {
            return <div>{letter}</div>
              })
        }
    </div>
    );

}
export default Card;