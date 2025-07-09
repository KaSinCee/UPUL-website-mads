import './Card.css'

function Card(props){
    return (
        <>
            <div className='card'>
                <img src={props.cardImg} alt="Card" />
            </div>
        </>
    )
}

export default Card;