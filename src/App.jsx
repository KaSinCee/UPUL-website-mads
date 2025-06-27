import './App.css'
import NavBar from './components/NavBar.jsx'
import CardsBanner from './components/CardsBanner.jsx'

import unmsmBg from './assets/unmsm-bg.png'

function App() {
  return (
    <div className='container'>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <div className='banner-box'>
          <div className='bg-effect'></div>
          <picture>
            <img src={unmsmBg} alt='unmsm-bg' />
          </picture>
          <div className='banner-title-box'>
            <h2>Organización Universitaria San Marquina</h2>
            <h1><span>U</span>nidos <span>p</span>or una <span className='nowrap'><span>u</span>niversidad <span>l</span>impia</span></h1>
          </div>
          <CardsBanner />
        </div>
        <section className='homeSection'>
          <div className='first-section'>
            <div className='first-block'>
              <h1>¿Quiénes somos?</h1>
              <p>Somos un grupo de fisianos tristes e irrelevantes 
                que buscan hacer un proyecto con tal de ponderar
                el curso de MADS de Melgarejo.
                <br/><br/>
                Así que si has venido hasta aquí, por ahora no hay 
                nada que mostrar muy aparte de letritas. Daniel no va a ponderar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
