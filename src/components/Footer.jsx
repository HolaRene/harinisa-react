import '../style/footer.css'

import facebook from '../assets/facebook.svg'
import instagrama from '../assets/instagram.svg'
import tiktoke from '../assets/tiktok-svgrepo-com(2).svg'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="footer flex-between">
                <h3 className="footer__logo">
                    <span>HARINISA </span>ZONA-CENTRO
                </h3>
                <ul className="footer__nav">
                    <li>
                        <a href="#contactos">Contactos</a>
                    </li>
                    <li>
                        <a href="#productos">Nuestra Harina</a>
                    </li>
                    <li>
                        <a href="#sobre-nosotros">Sobre nosotros</a>
                    </li>
                </ul>
                {/* Footer logo */}
                <ul className="footer__social">
                    <li className="flex-center">
                        <a href="https://www.facebook.com/profile.php?id=61561952506701">
                            <img src={facebook} alt="Feisbuk" />
                        </a>
                    </li>
                    <li className="flex-center">
                        <img src={instagrama} alt="Instgrama" />
                    </li>
                    <li className="flex-center">
                        <a href="https://www.tiktok.com/@harinisa_zona_centro">
                            <img src={tiktoke} alt="tiktok" />
                        </a>
                    </li>
                </ul>
            </footer>
        </>

    )
}

export default Footer