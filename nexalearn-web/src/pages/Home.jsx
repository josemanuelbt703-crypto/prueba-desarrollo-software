import { useEffect, useState } from 'react';
import { getCourses } from '../services/api';
import CourseCard from '../components/CourseCard';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    const {user, logout, isAdmin} = useAuth();

    const [error, setError] = useState(null);


    useEffect(() => {

        const loadCourses = async () => {

            try {

                const data = await getCourses();

                setCourses(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }

        };


        loadCourses();

    }, []);


    return (
        <>
            <header className="navbar">

                <div className="container navbar__content">

                    <h1 className="navbar__logo">
                        NexaLearn
                    </h1>

                    <nav>
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
                                <span style={{marginLeft:"20px"}}> 
                                    Hola, {user.name} 
                                </span>
                                <button onClick={logout}>
                                     Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <a href="/login" style={{marginLeft:'20px'}}>
                                Iniciar sesión
                            </a>
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


                        <div className="courses__grid">

                            {courses.map(course => (

                                <CourseCard
                                    key={course.id}
                                    course={course}
                                />

                            ))}

                        </div>

                    </div>

                </section>

            </main>


            <footer className="footer">

                <div className="container">

                    <p>
                        NexaLearn © 2026
                    </p>

                </div>

            </footer>
        </>
    );
}


export default Home;