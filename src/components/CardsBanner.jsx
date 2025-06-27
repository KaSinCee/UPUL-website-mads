import './CardsBanner.css'
import cardImg1 from '../assets/unmsm-card-bg-1.jpg'
import cardImg2 from '../assets/unmsm-card-bg-2.png'
import cardImg3 from '../assets/unmsm-card-bg-3.jpg'
import cardImg4 from '../assets/unmsm-card-bg-4.jpg'
import cardImg5 from '../assets/unmsm-card-bg-5.jpg'

function CardsBanner() {
    return (
        <div className="cards-box">
            <div className="cards-img-box">
                <div className='cards-img 1'><img src={cardImg1}></img></div>
                <div className='cards-img 2'><img src={cardImg2}></img></div>
                <div className='cards-img 3'><img src={cardImg3}></img></div>
                <div className='cards-img 4'><img src={cardImg4}></img></div>
                <div className='cards-img 5'><img src={cardImg5}></img></div>
            </div>
            <div className='cards-info'>
                <h3>La limpieza es clave para nuestro futuro</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis nobis qui ullam et, hic ex exercitationem minus
                    nihil repellendus a natus incidunt, eveniet delectus error
                    optio sit consectetur</p>
            </div>
        </div>
    )
}

export default CardsBanner;