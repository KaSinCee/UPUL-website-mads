import React, { useRef, useEffect } from 'react';
import './CardsBanner.css'
import cardImg1 from '../assets/unmsm-card-bg-1.jpg'
import cardImg2 from '../assets/unmsm-card-bg-2.png'
import cardImg3 from '../assets/unmsm-card-bg-3.jpg'
import cardImg4 from '../assets/unmsm-card-bg-4.jpg'
import cardImg5 from '../assets/unmsm-card-bg-5.jpg'

function CardsBanner() {
    const containerRef = useRef(null)

    useEffect(() => {
        function adjustImages() {
            const container = containerRef.current
            if (!container) return
            const cards_img_box = container.querySelector('.cards-img-box')
            const cards = Array.from(cards_img_box.querySelectorAll('.cards-img'))
            let visible = cards.length

            cards.forEach(card => card.style.display = '')

            while (container.scrollWidth > container.clientWidth && visible > 3) {
                cards[visible - 1].style.display = 'none'
                cards_img_box.style.gap = `${(visible - 1) * 5}px`
                visible--
            }
        }

        adjustImages()
        window.addEventListener('resize', adjustImages)
        return () => window.removeEventListener('resize', adjustImages)
    }, [])

    return (
        <div className="cards-box" ref={containerRef}>
            <div className="cards-img-box">
                <div className='cards-img 1'><img src={cardImg1} /></div>
                <div className='cards-img 2'><img src={cardImg2} /></div>
                <div className='cards-img 3'><img src={cardImg3} /></div>
                <div className='cards-img 4'><img src={cardImg4} /></div>
                <div className='cards-img 5'><img src={cardImg5} /></div>
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

export default CardsBanner