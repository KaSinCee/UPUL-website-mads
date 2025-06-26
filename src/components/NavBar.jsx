import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar-box'>
            <h2 className='navbar-logo'>UPUL</h2>
            <ul className='navbar-nav'>
                <li><a href=''>NOSOTROS</a></li>
                <li><a href=''>MISIÓN</a></li>
                <li><a href=''>PROYECTO</a></li>
                <li><a href=''>AYÚDANOS</a></li>
                <li><a href=''>ÚNETE</a></li>
            </ul>
        </div>
    )
}

export default NavBar