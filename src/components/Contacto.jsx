import '../style/contacto.css';

const Contacto = () => {
    return (
        <section className="subscription" id="contactos">
            <h2 data-aos="flip-down">Obtiene tu oferta</h2>
            <div className="contacto">
                <div className="contacto__img">
                    <img src="/Don-agustin2.jpg" alt="Foto del Ejecutivo de Ventas, Lic. José Espinoza" />
                </div>
                <div className="contacto__descripcion">
                    <p>
                        Ejecutivo de Ventas. Con más de 20 años de experiencia en la rama de
                        las ventas, el Lic. José Espinoza se dedica a ofrecer los mejores
                        productos de Harinisa. Contáctelo para obtener información sobre
                        nuestros productos y servicios.
                    </p>
                    <div className="contacto__descripcion-btn">
                        <a
                            href="mailto:gia.agenzmmh3@gmail.com"
                            className="correo-a"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contacto por Email
                        </a>
                        <a
                            href="https://wa.me/50585602076?text=Hola%20estoy%20interesado%20en%20sus%20productos"
                            className="whatsapp-a"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contacto por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;