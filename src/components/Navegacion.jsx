import '../style/nav.css'

import buscar from '../assets/search.svg'

const Navegacion = () => {
    return (
        <>
            {/* Navegación */}
            <header>
                <nav className="header__nav">
                    <div className="header__logo">
                        <img src="/logo-la-estrella-roja-hna.png" alt="logo-harinisa" />
                        <div className="header__logo-overlay" />
                    </div>
                    <ul className="header__menu" data-aos="fade-down">
                        <li className="">
                            <a href="#contactos">Contactos</a>
                        </li>
                        <li className="">
                            <a href="#productos">Nuestra Harina</a>
                        </li>
                        <li className="">
                            <a href="#sobre-nosotros">Sobre nosotros</a>
                        </li>
                        <li className="">
                            <img src={buscar} alt="Buscar" />
                        </li>
                    </ul>
                    <ul className="header__menu-movil" data-aos="fade-down">
                        <li>
                            <img src="/assets/menu.svg" alt="menu-movile" />
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export default Navegacion