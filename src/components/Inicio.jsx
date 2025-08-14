import '../style/inicio.css'

import portada from '../assets/portada-hero-v1.png';


const Inicio = () => {
    return (
        // Sección de presentación
        <section className="hero">
            <div className="hero-img">
                <img
                    src={portada}
                    alt="img de portada"
                    data-aos="fade-up"
                />
                <h2 data-aos="fade-up">
                    Z <br />
                    o <br />
                    n <br /> a <br /> - <br /> c <br />e <br />n <br />t <br />r <br />o
                </h2>
                <div className="hero-img__overlay" />
            </div>
            <div className="hero-content">
                <div className="hero-content-info" data-aos="fade-left">
                    <h1>Harinisa Zona-Centro</h1>
                    <p>
                        Panaderos y reposteros la eligen por su textura, rendimiento y
                        confiabilidad.
                    </p>
                    <div className="hero-content__botones">
                        <button className="hero-content__order-button"><a href="#contactos">Conoce más</a></button>

                    </div>
                </div>
                <div className="hero-content__testimonial" data-aos="fade-up">
                    <div className="hero-content__customer flex-center">
                        <h4>3</h4>
                        <div className='hero-content__ubicacion'>
                            <h4>Departamentos</h4>
                            <p>Boaco, Chontales y La Costa Caribe Sur</p>
                        </div>
                    </div>
                    <div className="hero-content__review">
                        <img src="/public/logo-panadero.png" alt="user" />
                        <p>
                            “Harina multiusos ideal para bollería y panadería comercial.
                            Resultados consistentes, sabor garantizado”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio