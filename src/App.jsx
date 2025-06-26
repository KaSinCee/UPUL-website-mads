import './App.css'
import NavBar from './components/NavBar.jsx'
import CardsBanner from './components/CardsBanner.jsx'

import unmsmBg from './assets/unmsm-bg.png'

function App() {
  return (
    <>
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
            <h2>Organización Universitaria</h2>
            <h1><span>U</span>nidos <span>p</span>or una <span className='nowrap'><span>u</span>niversidad <span>l</span>impia</span></h1>
          </div>
          <CardsBanner/>
        </div>
      </main>
    </>
  )
}

export default App
