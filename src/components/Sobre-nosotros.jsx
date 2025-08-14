import '../style/sobrenosotros.css'
import productos1 from '../assets/productos-sobrenosotros.png'
import arrowIcon from '../assets/arrow-up-right.svg'
import productos2 from '../assets/productos-sobrenost-2.png'

const SobreNosotros = () => {
    return (
        <section className="sobre-nosotros" id="sobre-nosotros">
            <div className="sobre-nosotros__img">
                <div className="sobre-nosotros__img-pan1">
                    <img src={productos1} alt="Sobre nosotros" data-aos="fade-right" />
                </div>
                <button className="sobre-nosotros__button">
                    <a href="https://www.agrosa.com.ni/" target='_blank'>Ver Agrosa</a>
                    <img src={arrowIcon} alt="Aprende más" />
                </button>
                <div className="sobre-nosotros__img-sushi2">
                    <img src={productos2} alt="Sushi Img 2" data-aos="fade-right" />
                </div>
            </div>
            <div className="sobre-nosotros__content" data-aos="fade-left">
                <p className="sushi__subtitle">Sobre nosotros</p>
                <h3 className="sushi__title">
                    Harinisa Zona-centro: <br />
                    La experiencia de un pan auténtico
                </h3>
                <p className="sushi__description">
                    Harinera Agroindustrial de Nicaragua HARINISA, es una empresa
                    nicaragüense de capital privado, con más de cuatro décadas en el mercado
                    que se dedica a la producción y comercialización de Harinas de Trigo,
                    materia prima básica para la elaboración de pan. Elaborar productos
                    alimenticios de alta calidad y rendimiento, manteniendo excelencia en el
                    servicio, buenas relaciones con nuestros clientes, proveedores y
                    colaboradores y respeto por el medio ambiente.
                </p>
            </div>
        </section>
    )
}

export default SobreNosotros
