import { useState } from 'react'
import '../style/productos.css'

// Imágenes de los productos 
import ricarina from '../assets/ricarina-multiuso.png'

import prima100 from '../assets/prima-harina-100.png'
import prima1 from '../assets/prima-harina-1.png'

import superIntegral from '../assets/superstar-integral.png'
import superMulti from '../assets/superstar-multiproposito.png'
import superPizza from '../assets/superstar-especial-pizza.png'

import doral from '../assets/doral.png'
import instaferm from '../assets/instaferm.png'

// Imágenes de los logos
import ricarinaLogo from '../../public/logo-ricarina-v.png'
import primaLogo from '../../public/prima-harina-logo.png'
import superLogo from '../../public/superstar-logo.png'
import doralLogo from '../assets/check.svg' // crea un logo si no lo tienes

import flechaDerecha from '../assets/arrow-right.svg'

// Lista de productos con categoría
const productosData = [
    { id: 1, nombre: 'Ricarina Harina de trigo multiusos', img: ricarina, categoria: 'Ricarina', descripcion: 'Ricarina es la elección perfecta para la elaboración de bollería y panes comerciales. Con su calidad superior, garantiza resultados consistentes y deliciosos en todas tus recetas.' },

    { id: 2, nombre: 'PRIMARINA Especial suave', img: prima100, categoria: 'Prima Harina' },
    { id: 3, nombre: 'PRIMARINA Multipropósito', img: prima1, categoria: 'Prima Harina' },

    { id: 4, nombre: 'Superstar Harina Integral', img: superIntegral, categoria: 'Superstar' },
    { id: 5, nombre: 'SUPERSTAR Multipropósito', img: superMulti, categoria: 'Superstar' },
    { id: 6, nombre: 'SUPERSTAR Especial Pizza', img: superPizza, categoria: 'Superstar' },

    { id: 7, nombre: 'Doral simple - Doral Mantequilla', img: doral, categoria: 'Levadura' },
    { id: 8, nombre: 'Instaferm Levadura', img: instaferm, categoria: 'Levadura' }
]

const categorias = [
    { nombre: 'Todos', logo: null },
    { nombre: 'Ricarina', logo: ricarinaLogo },
    { nombre: 'Prima Harina', logo: primaLogo },
    { nombre: 'Superstar', logo: superLogo },
    { nombre: 'Levadura', logo: doralLogo }
]

const Productos = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('Todos')

    // Filtra productos por categoría
    const productosFiltrados = categoriaActiva === 'Todos'
        ? productosData
        : productosData.filter(prod => prod.categoria === categoriaActiva)

    return (
        <section className="popular-foods" id="productos">
            <h2 className="popular-foods__title" data-aos="flip-up">
                Nuestros Productos
            </h2>

            {/* Botones de filtro */}
            <div className="popular-foods__filters sushi__hide-scrollbar" data-aos="fade-up">
                {categorias.map(cat => (
                    <button
                        key={cat.nombre}
                        className={`popular-foods__filter-btn ${categoriaActiva === cat.nombre ? 'active' : ''}`}
                        onClick={() => setCategoriaActiva(cat.nombre)}
                    >
                        {cat.logo && <img src={cat.logo} alt={cat.nombre} />}
                        {cat.nombre}
                    </button>
                ))}
            </div>

            {/* Lista de productos */}
            <div className="popular-foods__catalogue" data-aos="fade-up">
                {productosFiltrados.map(producto => (
                    <article
                        key={producto.id}
                        className="popular-foods__card"
                    >
                        <img
                            src={producto.img}
                            alt={producto.nombre}
                            className="popular-foods__card-img"
                        />
                        <h4 className="popular-foods__card-title">{producto.nombre}</h4>
                        {/* {producto.descripcion && <p>{producto.descripcion}</p>} */}
                    </article>
                ))}
            </div>

            <button className="popular-foods__button">
                Explorar productos
                <img src={flechaDerecha} alt="ver productos" />
            </button>
        </section>
    )
}

export default Productos
