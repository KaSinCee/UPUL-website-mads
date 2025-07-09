import './App.css'
import NavBar from './components/NavBar.jsx'
import CardsBanner from './components/CardsBanner.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import worldTree from './assets/imgCardsSection/worldTree.webp'
import proyecto from './assets/imgCardsSection/proyecto.jpg'
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
          <div className='second-section'>
            <img src={worldTree} alt='world-tree' />
            <div className='mision-info'>
              <h1>Nuestra misión...</h1>
              <p>
                Impulsar el desarrollo de soluciones tecnológicas accesibles e
                innovadoras que contribuyan a mejorar la limpieza, el orden y la
                gestión ambiental dentro de la Universidad Nacional Mayor de San
                Marcos (UNMSM), promoviendo una cultura de sostenibilidad y conciencia
                ecológica desde la comunidad estudiantil.
                <br></br><br></br>
                Nos enfocamos en el diseño e implementación de prototipos funcionales como sensores de llenado para tachos,
                aplicaciones móviles para reportes ambientales, y otros proyectos que integran ciencia
                y tecnología con impacto social.
                <br></br><br></br>
                Creemos firmemente que, desde el rol estudiantil, es posible generar propuestas
                transformadoras que inspiren a otros y construyan una universidad más limpia, organizada
                y preparada para los desafíos del presente y del futuro.
              </p>
            </div>
            <div className='mision-info-card'>
              <h1>Buscamos...</h1>
              <p>
                Demostrar el potencial transformador de la tecnología accesible, como Arduino, programación y automatización,
                para resolver problemas cotidianos dentro de la universidad.
              </p>
            </div>
          </div>
          <div className='third-section'>
            <div className='project-info'>
              <h1>Sobre nuestro proyecto...</h1>
              <p>Como parte de nuestras soluciones tecnológicas para mejorar la limpieza en la universidad, hemos desarrollado
                un tacho inteligente que, mediante el uso de sensores y una placa Arduino, permite contabilizar la cantidad de
                residuos depositados en tiempo real.
                <br></br><br></br>
                Este prototipo incorpora un sensor de ultrasonido o sensor infrarrojo que
                detecta cada vez que un objeto atraviesa la apertura del tacho. Cada detección incrementa automáticamente un contador
                digital, el cual se muestra en una pantalla LCD instalada en la parte frontal del dispositivo. De esta manera, se
                puede visualizar de forma inmediata cuántos residuos han sido depositados durante el día o un periodo determinado.
                <br></br><br></br>
                Este proyecto representa nuestra visión de cómo la tecnología puede ser aplicada de manera concreta y funcional para atender
                una necesidad cotidiana dentro de la UNMSM, con herramientas de bajo costo, alto impacto y fáciles de replicar.
              </p>
            </div>
            <div className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32">
                <path d="M31.76 16c-0.077-4.251-3.588-7.636-7.839-7.563-0.391 0-0.801 0.032-1.203 0.068-3.359 0.495-5.599 2.907-6.839 4.76-1.265-1.853-3.52-4.265-6.853-4.76-0.401-0.036-0.797-0.068-1.199-0.068-4.249-0.063-7.749 3.317-7.828 7.563 0.079 4.245 3.579 7.625 7.828 7.563 0.401 0 0.797-0.032 1.224-0.084 3.36-0.479 5.599-2.891 6.855-4.744 1.265 1.853 3.505 4.265 6.853 4.76 0.412 0.036 0.803 0.068 1.213 0.068 4.229 0.041 7.709-3.333 7.787-7.563zM8.64 20.803c-0.265 0.052-0.572 0.052-0.837 0.052-2.767 0.057-5.057-2.12-5.136-4.881 0.088-2.765 2.385-4.943 5.145-4.88 0.267 0 0.563 0.027 0.839 0.052 3.161 0.469 5.095 3.563 5.751 4.828-0.667 1.267-2.599 4.401-5.751 4.829zM17.333 16c0.651-1.24 2.588-4.36 5.745-4.828 0.271-0.052 0.561-0.052 0.828-0.052 2.776-0.084 5.088 2.104 5.161 4.88-0.089 2.76-2.385 4.937-5.147 4.88-0.271 0-0.561-0.025-0.828-0.052-3.145-0.468-5.093-3.588-5.744-4.828zM5.615 16.787h4.719v-1.547h-4.708v1.547zM24.453 16.787h1.588v-1.547h-1.604v-1.589h-1.505v1.604h-1.599v1.532h1.599v1.573h1.537v-1.557zM32 9.412c0 0.4-0.292 0.681-0.708 0.681-0.38 0.016-0.699-0.287-0.704-0.667 0-0.375 0.319-0.692 0.704-0.692 0.416 0 0.708 0.292 0.708 0.677zM30.787 9.412c0 0.296 0.213 0.536 0.531 0.536 0.297 0 0.511-0.24 0.511-0.536 0-0.292-0.213-0.532-0.511-0.532-0.317-0.025-0.531 0.213-0.531 0.532zM31.188 9.76h-0.136v-0.692l0.265-0.016c0.12 0 0.188 0.016 0.245 0.041 0.052 0.027 0.077 0.079 0.077 0.147 0 0.077-0.052 0.135-0.145 0.145 0.068 0.027 0.093 0.084 0.12 0.177l0.036 0.172h-0.156c-0.025-0.027-0.025-0.095-0.057-0.172-0.025-0.068-0.052-0.093-0.145-0.093h-0.063l-0.032 0.291zM31.213 9.36h0.079c0.093 0 0.135-0.011 0.135-0.095 0-0.068-0.041-0.093-0.135-0.093h-0.095v0.188z"/>
              </svg>
            </div>
            <img src={proyecto} />
            <div className='triangle-1'></div>
            <div className='triangle-2'></div>
            <div className='triangle-3'></div>
            <div className='triangle-4'></div>
            <div className='triangle-5'></div>
          </div>
          <div className='fourth-section'>
          <h1>Ayúdanos a limpiar</h1>
          <h4>La limpieza del campus comienza contigo.</h4>
          <p>
          Como estudiantes comprometidos con la mejora de nuestra universidad, queremos invitarte 
          a ser parte activa del cambio. A través de esta plataforma, puedes reportar lugares que necesitan limpieza, 
          mantenimiento o atención especial. Tu aporte es fundamental para identificar las zonas críticas del campus y 
          nos permite actuar de manera más precisa, ya sea proponiendo soluciones tecnológicas, organizando campañas de 
          limpieza o generando conciencia en nuestra comunidad.
          </p>
          <h2>Realiza tu reporte:</h2>
          <div className='form'>
            <form>
              <div className="nameInput">
                <input placeholder='Ingrese su nombre...'/>
              </div>
              <div className="locationInput">
                <input placeholder='Ingrese la ubicación exacta'/>
              </div>
              <div className="descriptionInput">
                <textarea placeholder='Ingrese la descripción de su reporte'/>
              </div>
            </form>
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
