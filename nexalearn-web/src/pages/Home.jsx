import { useEffect, useState } from 'react';
import { getCourses, getCategories } from '../services/api';
import CourseCard from '../components/CourseCard';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [categories, setCategories] =useState([]);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const {user, logout, isAdmin} = useAuth();

    const [error, setError] = useState(null);


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

    const filteredCourses = 
            selectedCategory === 'all' 
                ? courses 
                : courses.filter(
                    course =>
                        course.category_id === Number(selectedCategory)
                );

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

                            {filteredCourses.map(course => (

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