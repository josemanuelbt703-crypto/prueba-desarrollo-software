import { useEffect, useState } from 'react';
import { getCourses, getCategories } from '../services/api';
import CourseCard from '../components/CourseCard';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import CourseDetailsModal from '../components/CourseDetailsModal';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from 'react-icons/fa';
import '../App.css';

function Home() {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [categories, setCategories] =useState([]);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const [selectedCourse, setSelectedCourse] = useState(null);

    const {user, logout, isAdmin} = useAuth();

    const [visibleCourses, setVisibleCourses] = useState(3);

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const [testimonialsPerView, setTestimonialsPerView] = useState(3);

    const testimonials = [
    {
        name: 'Ana Martínez',
        course: 'React desde cero',
        comment:
            'El curso me ayudó a comprender React de una forma práctica y sencilla.'
    },
    {
        name: 'Carlos Ramírez',
        course: 'Machine Learning con Python',
        comment:
            'Me gustó que los contenidos fueran claros y enfocados en ejemplos reales.'
    },
    {
        name: 'Laura García',
        course: 'Laravel API',
        comment:
            'Pude comprender mejor cómo desarrollar y consumir una API REST.'
    },
    {
        name: 'Diego Hernández',
        course: 'Python para Data Science',
        comment:
            'El contenido me ayudó a mejorar mi lógica y trabajar mejor con datos.'
    },
    {
        name: 'Mariana López',
        course: 'Inteligencia Artificial',
        comment:
            'Fue una buena introducción para entender conceptos que antes me parecían difíciles.'
    }

];

    const [error, setError] = useState(null);

    useEffect(() => {

    const updateTestimonialsPerView = () => {

        if (window.innerWidth <= 600) {

            setTestimonialsPerView(1);

        } else if (window.innerWidth <= 900) {

            setTestimonialsPerView(2);

        } else {

            setTestimonialsPerView(3);

        }

    };


    updateTestimonialsPerView();


    window.addEventListener(
        'resize',
        updateTestimonialsPerView
    );


    return () => {

        window.removeEventListener(
            'resize',
            updateTestimonialsPerView
        );

    };

}, []);

    useEffect(() => {

        const loadData = async () => {

            try {

                const [
                    coursesData,
                    categoriesData
                ] = await Promise.all([
                    getCourses(),
                    getCategories()
                ]);

                setCourses(coursesData);

                setCategories(categoriesData);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        loadData();

    }, []);

    useEffect(() => {

        setVisibleCourses(3);

    }, [selectedCategory]);

    const filteredCourses = 
            selectedCategory === 'all' 
                ? courses 
                : courses.filter(
                    course =>
                        course.category_id === Number(selectedCategory)
                );
    
    const displayedCourses =
        filteredCourses.slice(
            0,
            visibleCourses
        );
    
    const nextTestimonial = () => {

    setTestimonialIndex(
        (testimonialIndex + 1) %
        testimonials.length
    );

};


const nextTestimonials = () => {

    const maxIndex =
        Math.max(
            0,
            testimonials.length -
            testimonialsPerView
        );


    setTestimonialIndex(
        (current) =>
            current >= maxIndex
                ? 0
                : current + 1
    );

};


const previousTestimonials = () => {

    const maxIndex =
        Math.max(
            0,
            testimonials.length -
            testimonialsPerView
        );


    setTestimonialIndex(
        (current) =>
            current <= 0
                ? maxIndex
                : current - 1
    );

}; 

    return (
        <>
            <header className="navbar">

                <div className="container navbar__content">

                    <h1 className="navbar__logo">
                        NexaLearn
                    </h1>

                    <nav className="navbar__links">
                        <a href="#courses">
                            Cursos
                        </a>

                        {isAdmin && (
                            <Link to="/admin">
                                Administrar
                            </Link>
                        )}

                        {user ? (
                            <>
                                <span className="navbar__user"> 
                                    Hola, {user.name} 
                                </span>
                                <button type="button" className="navbar__logout" onClick={logout}>
                                     Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="navbar__login" style={{marginLeft:'20px'}}>
                                Iniciar sesión
                            </Link>
                        )}
                    </nav>

                </div>

            </header>


            <main>

                <section className="hero">

                    <div className="container">

                        <span className="hero__tag">
                            Aprende. Construye. Avanza.
                        </span>

                        <h2>
                            Desarrolla las habilidades
                            tecnológicas del futuro
                        </h2>

                        <p>
                            Explora cursos de desarrollo,
                            inteligencia artificial y datos.
                        </p>

                        <a
                            href="#courses"
                            className="button"
                        >
                            Explorar cursos
                        </a>

                    </div>

                </section>


                <section
                    id="courses"
                    className="courses"
                >

                    <div className="container">

                        <h2>
                            Cursos destacados
                        </h2>


                        {loading && (
                            <p>
                                Cargando cursos...
                            </p>
                        )}


                        {error && (
                            <p>
                                {error}
                            </p>
                        )}

                        
                        <div className="categories-filter">
                            <button className={selectedCategory === 'all' ? 'category-button category-button--active' : 'category-button'}
                            onClick={() => setSelectedCategory('all')}>
                                Todos
                            </button>

                            {categories.map(category => (
                                <button key={category.id} className={Number(selectedCategory) === category.id
                                    ? 'category-button category-button--active' : 'category-button'
                                }
                                onClick={() =>
                                    setSelectedCategory(category.id)
                                }>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className="courses__grid">

                            {displayedCourses.map(course => (

                                <CourseCard
                                    key={course.id}
                                    course={course}
                                    onOpen={setSelectedCourse}
                                />

                            ))}

                        </div>

                        <CourseDetailsModal
                            course={selectedCourse}
                            onClose={() =>
                                setSelectedCourse(null)
                            }
                        />

                        {visibleCourses < filteredCourses.length && (
                                                
                            <div className="load-more">
                            
                                <button
                                    className="button"
                                    onClick={() =>
                                        setVisibleCourses(
                                            visibleCourses + 3
                                        )
                                    }
                                >
                                    Cargar más
                                </button>
                                
                            </div>
                        
                        )}

                    </div>

                </section>

                <section className="about-section">

                    <div className="container about-section__content">

                        <div>

                            <span className="section-tag">
                                Conócenos
                            </span>

                            <h2>
                                Aprende tecnología con
                                experiencias prácticas
                            </h2>

                            <p>
                                NexaLearn es una plataforma
                                enfocada en proporcionar cursos
                                de tecnología mediante contenidos
                                prácticos, actuales y accesibles.
                            </p>

                            <p>
                                Nuestro objetivo es ayudar a
                                estudiantes y profesionales a
                                desarrollar nuevas habilidades
                                para enfrentar los retos del
                                mundo tecnológico.
                            </p>

                        </div>


                        <div className="about-stats">

                            <div>
                                <strong>+20</strong>
                                <span>Cursos</span>
                            </div>

                            <div>
                                <strong>+500</strong>
                                <span>Estudiantes</span>
                            </div>

                            <div>
                                <strong>3</strong>
                                <span>Áreas tecnológicas</span>
                            </div>

                        </div>

                    </div>

                </section>

                <section className="partners">

                    <div className="container">

                        <div className="section-heading">
                            <h1 className="section-tag">
                                Nuestros aliados
                            </h1>

                            <h2>
                                Empresas que impulsan el aprendizaje
                            </h2>
                        </div>


                        <div className="partners__grid">

                            <div className="partner-card partner-card--solid">
                                <span>TechNova</span>
                            </div>

                            <div className="partner-card partner-card--solid">
                                <span>DevCore</span>
                            </div>

                            <div className="partner-card partner-card--solid">
                                <span>DataLab</span>
                            </div>

                            <div className="partner-card partner-card--solid">
                                <span>CloudX</span>
                            </div>

                        </div>

                    </div>

                </section>

                <section className="testimonials">

                    <div className="container">

                        <div className="section-heading">

                            <span className="section-tag">
                                Testimonios
                            </span>

                            <h2>
                                Lo que dicen nuestros estudiantes
                            </h2>

                        </div>


                        <div className="testimonials-carousel">

                            <button
                                type="button"
                                className="carousel-button"
                                onClick={previousTestimonials}
                                aria-label="Testimonios anteriores"
                            >
                                ←
                            </button>


                            <div className="testimonials-viewport">

                                <div
                                    className="testimonials-track"
                                    style={{
                                        transform:
                                            `translateX(-${
                                                testimonialIndex *
                                                (100 / testimonialsPerView)
                                            }%)`
                                    }}
                                >
                                
                                    {testimonials.map(
                                        (testimonial, index) => (
                                        
                                            <article
                                                className="testimonial-item"
                                                key={index}
                                                style={{
                                                    flex:
                                                        `0 0 ${
                                                            100 /
                                                            testimonialsPerView
                                                        }%`
                                                }}
                                            >
                                            
                                                <div className="testimonial-avatar">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                        
                                        
                                                <h3>
                                                    {testimonial.name}
                                                </h3>
                                        
                                        
                                                <span>
                                                    {testimonial.course}
                                                </span>
                                        
                                        
                                                <p>
                                                    “{testimonial.comment}”
                                                </p>
                                        
                                            </article>

                                        )
                                    )}

                                </div>
                                
                            </div>
                                
                                
                            <button
                                type="button"
                                className="carousel-button"
                                onClick={nextTestimonials}
                                aria-label="Siguientes testimonios"
                            >
                                →
                            </button>
                                
                        </div>
                                
                    </div>
                                
                </section>

            </main>


            <footer className="footer">

                <div className="container footer__grid">

                    <div className="footer__brand">

                        <h3>
                            NexaLearn
                        </h3>

                        <p>
                            Aprende las habilidades
                            tecnológicas del futuro.
                        </p>


                        <div className="footer__socials">

                            <a
                                href="#"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>

                        </div>

                    </div>


                    <div>

                        <h4>
                            Navegación
                        </h4>

                        <a href="#">
                            Inicio
                        </a>

                        <a href="#courses">
                            Cursos
                        </a>

                        <a href="#about">
                            Conócenos
                        </a>

                    </div>


                    <div>

                        <h4>
                            Cursos
                        </h4>

                        <span>
                            Desarrollo Web
                        </span>

                        <span>
                            Inteligencia Artificial
                        </span>

                        <span>
                            Ciencia de Datos
                        </span>

                    </div>


                    <div>

                        <h4>
                            Contacto
                        </h4>

                        <span>
                            contacto@nexalearn.demo
                        </span>

                        <span>
                            México
                        </span>

                    </div>

                </div>


                <div className="footer__bottom">

                    NexaLearn © 2026 —
                    Proyecto demostrativo

                </div>

            </footer>
        </>
    );
}


export default Home;