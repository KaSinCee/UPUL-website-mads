import './App.css'
import NavBar from './components/NavBar.jsx'
import CardsBanner from './components/CardsBanner.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


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
              <p>
                Somos un grupo de estudiantes de la Universidad Nacional Mayor de San Marcos comprometidos
                con el bienestar ambiental de nuestra casa de estudios. Formamos una organización estudiantil
                interdisciplinaria que une a jóvenes de diversas facultades con el objetivo común de aplicar
                conocimientos en programación, electrónica (como Arduino) y tecnología para enfrentar los
                desafíos de limpieza y gestión de residuos en el campus.
                <br></br><br></br>
                Nuestra organización reúne a estudiantes donde compartimos ideas,
                desarrollamos proyectos y cultivamos habilidades técnicas y sociales. No solo somos un equipo técnico:
                también somos agentes de cambio que creen en el poder de la juventud universitaria para transformar
                espacios y conciencias desde el aula hacia el entorno físico que habitamos.
              </p>
            </div>
            <div className='second-block'>

              <div>
                <h3>¿Qué hacemos? <FontAwesomeIcon icon={faAngleRight} /></h3>
                <p>Nos dedicamos a implementar y optimizar los procesos de limpieza en el ámbito
                  universitario de la Universidad Nacional Mayor de San Marcos (UNMSM). Usamos herramientas
                  como la programación, Arduino o el análisis de Datos para crear un entorno más limpio y
                  eficiente dentro del campus. </p>
              </div>
              <div>
                <h3>¿Por que lo haremos? <FontAwesomeIcon icon={faAngleRight} /></h3>
                <p>Para mejorar las condiciones de limpieza, promover la conciencia ambiental
                  en la comunidad sanmarquina y demostrar que, desde el conocimiento estudiantil,
                  se pueden generar cambios positivos reales. Buscamos fortalecer la cultura del
                  cuidado del campus mediante el uso de tecnologías accesibles, sostenibles y replicables.</p>
              </div>
              <div>
                <h3>Nuestra visión <FontAwesomeIcon icon={faAngleRight} /></h3>
                <p>Ser una comunidad reconocida dentro y fuera de la UNMSM por liderar
                  proyectos estudiantiles de impacto ambiental basados en tecnología.
                  Aspiramos a que nuestras iniciativas se conviertan en modelos replicables
                  en otras universidades públicas del país y a formar una red nacional de
                  estudiantes innovadores comprometidos con el cuidado del medio ambiente
                  a través de la ciencia y la tecnología.</p>
              </div>

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
