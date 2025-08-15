import { useState } from 'react';
import '../style/productos.css';

// Imágenes de productos
import ricarina from '../assets/ricarina-multiuso.png';
import prima100 from '../assets/prima-harina-100.png';
import prima1 from '../assets/prima-harina-1.png';
import superIntegral from '../assets/superstar-integral.png';
import superMulti from '../assets/superstar-multiproposito.png';
import superPizza from '../assets/superstar-especial-pizza.png';
import doral from '../assets/doral.png';
import instaferm from '../assets/instaferm.png';

// Logos de marcas
import ricarinaLogo from '../../public/logo-ricarina-v.png';
import primaLogo from '../../public/prima-harina-logo.png';
import superLogo from '../../public/superstar-logo.png';
import doralLogo from '../assets/check.svg';

import flechaDerecha from '../assets/arrow-right.svg';

// Datos de productos
const productosData = [
    {
        id: 1,
        nombre: 'Ricarina Harina de trigo multiusos',
        img: ricarina,
        categoria: 'Ricarina',
        descripcion:
            'Ricarina es la elección perfecta para la elaboración de bollería y panes comerciales. Con su calidad superior, garantiza resultados consistentes y deliciosos en todas tus recetas.',
    },
    {
        id: 2,
        nombre: 'PRIMARINA Especial suave',
        img: prima100,
        categoria: 'Prima Harina',
        descripcion:
            'Esta harina de textura suave, es ideal para la elaboración de batidos, bizcochos y galletería. Con ella, te garantizamos los mejores resultados en sabor y en calidad.',
    },
    {
        id: 3,
        nombre: 'PRIMARINA Multipropósito',
        img: prima1,
        categoria: 'Prima Harina',
        descripcion:
            ' Esta harina es perfecta para tus necesidades domésticas: para empanizar, elaborar churros, manuelitas, donas, galletas comerciales y más.',
    },
    {
        id: 4,
        nombre: 'Superstar Harina Integral',
        img: superIntegral,
        categoria: 'Superstar',
        descripcion:
            ' Esta harina está cuidadosamente formulada para la elaboración de una amplia gama de productos de panadería, pastelería y repostería integral. Su composición única permite que los ingredientes se integren de manera uniforme, asegurando una consistencia perfecta en cada preparación.',
    },
    {
        id: 5,
        nombre: 'SUPERSTAR Multipropósito',
        img: superMulti,
        categoria: 'Superstar',
        descripcion:
            ' Esta harina está formulada específicamente para la elaboración de masas hojaldradas y productos de repostería en general. Su mezcla única de ingredientes permite obtener una textura suave y delicada, perfecta para crear hojaldres ligeros y crujientes. Además, es ideal para todo tipo de preparaciones reposteras, como tartas, galletas, bizcochos y pasteles, garantizando un resultado esponjoso y delicioso en cada ocasión.',
    },
    {
        id: 6,
        nombre: 'SUPERSTAR Especial Pizza',
        img: superPizza,
        categoria: 'Superstar',
        descripcion:
            ' Esta harina especial está formulada específicamente para la elaboración de masas de pizzería, proporcionando la base perfecta para una variedad de productos deliciosos. Ideal para preparar pizzas auténticas con una corteza crujiente y un interior suave, esta harina también es perfecta para calzones sabrosos, focaccias aromáticas y mucho más.',
    },
    {
        id: 7,
        nombre: 'Doral simple - Doral Mantequilla',
        img: doral,
        categoria: 'Levadura',
        descripcion:
            'Doral simple 1x24 Lbs - La manteca hidrogenada Doral en su versión sabor natural es un ingrediente esencial para la elaboración de una amplia variedad de productos de panadería y repostería. Esta manteca ofrece una excelente textura y estabilidad, asegurando resultados consistentes y de alta calidad. - Doral Mantequilla 1x24 Lbs. La manteca hidrogenada Doral sabor mantequilla combina la estabilidad y versatilidad de la manteca hidrogenada con el delicioso y auténtico sabor de la mantequilla. Perfecta para aquellos que buscan añadir un toque extra de sabor a sus productos. Su rica y cremosa textura aporta un sabor inigualable que resalta en cualquier receta.',
    },
    {
        id: 8,
        nombre: 'Instaferm Levadura',
        img: instaferm,
        categoria: 'Levadura',
        descripcion:
            ' La levadura Instaferm® es un producto de alta calidad con función dual que permite el crecimiento de la masa independientemente del clima, diseñada para utilizarse tanto en la preparación de masas dulces como saladas. Su formulación enriquecida con Vitamina D no solo mejora el valor nutricional de los productos, sino que también asegura un rendimiento óptimo en cada uso.',
    },
];

// Categorías con logos
const categorias = [
    { nombre: 'Todos', logo: null },
    { nombre: 'Ricarina', logo: ricarinaLogo },
    { nombre: 'Prima Harina', logo: primaLogo },
    { nombre: 'Superstar', logo: superLogo },
    { nombre: 'Levadura', logo: doralLogo },
];

const Productos = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('Todos');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null); // Nuevo estado

    const productosFiltrados = categoriaActiva === 'Todos'
        ? productosData
        : productosData.filter((prod) => prod.categoria === categoriaActiva);

    return (
        <section className="popular-foods" id="productos">
            <h2 className="popular-foods__title" data-aos="flip-up">
                Nuestros Productos
            </h2>

            {/* Botones de filtro */}
            <div
                className="popular-foods__filters sushi__hide-scrollbar"
                data-aos="fade-up"
                ref={(el) => {
                    // Opcional: desplaza al centro al cargar (solo si quieres)
                    if (el) el.scrollLeft = 0;
                }}
            >
                {categorias.map((cat) => (
                    <button
                        key={cat.nombre}
                        className={`popular-foods__filter-btn ${categoriaActiva === cat.nombre ? 'active' : ''
                            }`}
                        onClick={() => {
                            setCategoriaActiva(cat.nombre);
                            setProductoSeleccionado(null); // Resetear descripción al cambiar categoría
                        }}
                    >
                        {cat.logo && (
                            <img
                                src={cat.logo}
                                alt={`${cat.nombre} logo`}
                                loading="lazy"
                            />
                        )}
                        {cat.nombre}
                    </button>
                ))}
            </div>

            {/* Catálogo de productos */}
            <div className="popular-foods__catalogue" data-aos="fade-up">
                {productosFiltrados.map((producto) => (
                    <article
                        key={producto.id}
                        className={`popular-foods__card ${productoSeleccionado?.id === producto.id
                            ? 'active-card'
                            : ''
                            }`}
                        onClick={() =>
                            setProductoSeleccionado(
                                productoSeleccionado?.id === producto.id
                                    ? null
                                    : producto
                            )
                        }
                        style={{ cursor: producto.descripcion ? 'pointer' : 'default' }}
                    >
                        <img
                            src={producto.img}
                            alt={producto.nombre}
                            className="popular-foods__card-img"
                        />
                        <h4 className="popular-foods__card-title">
                            {producto.nombre}
                        </h4>

                        {/* Descripción condicional */}
                        {productoSeleccionado?.id === producto.id &&
                            producto.descripcion && (
                                <p
                                    className="popular-foods__card-description"
                                    data-aos="fade-in"
                                >
                                    {producto.descripcion}
                                </p>
                            )}
                    </article>
                ))}
            </div>

            {/* Botón de contacto */}
            <button className="popular-foods__button">
                <a href="#contactos">Consulta el producto</a>
                <img src={flechaDerecha} alt="ver productos" />
            </button>
        </section>
    );
};

export default Productos;