import {
    useEffect,
    useState
} from 'react';

import {
    Link
} from 'react-router-dom';

import {
    getCourses,
    getCategories,
    createCourse,
    updateCourse,
    deleteCourse
} from '../services/api';

import {
    useAuth
} from '../context/AuthContext';


const initialForm = {
    title: '',
    description: '',
    price: '',
    image: '',
    category_id: '',
};


function Admin() {

    const {
        user,
        token,
        logout
    } = useAuth();


    const [
        courses,
        setCourses
    ] = useState([]);

    const [
        categories,
        setCategories
    ] = useState([]);

    const [
        form,
        setForm
    ] = useState(initialForm);

    const [
        editingId,
        setEditingId
    ] = useState(null);

    const [
        error,
        setError
    ] = useState('');

    const [
        message,
        setMessage
    ] = useState('');


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

            setCategories(
                categoriesData
            );

        } catch (error) {

            setError(
                error.message
            );

        }

    };


    useEffect(() => {

        loadData();

    }, []);


    const handleChange = (
        event
    ) => {

        const {
            name,
            value
        } = event.target;


        setForm({
            ...form,

            [name]: value,
        });

    };


    const handleSubmit = async (
        event
    ) => {

        event.preventDefault();

        setError('');
        setMessage('');


        try {

            if (editingId) {

                await updateCourse(
                    editingId,
                    form,
                    token
                );

                setMessage(
                    'Curso actualizado correctamente.'
                );

            } else {

                await createCourse(
                    form,
                    token
                );

                setMessage(
                    'Curso creado correctamente.'
                );

            }


            setForm(initialForm);

            setEditingId(null);

            await loadData();

        } catch (error) {

            setError(
                error.message
            );

        }

    };


    const handleEdit = (
        course
    ) => {

        setEditingId(
            course.id
        );


        setForm({
            title:
                course.title,

            description:
                course.description,

            price:
                course.price,

            image:
                course.image || '',

            category_id:
                course.category_id,
        });


        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };


    const handleDelete = async (
        course
    ) => {

        const confirmed =
            window.confirm(
                `¿Eliminar "${course.title}"?`
            );


        if (!confirmed) {
            return;
        }


        try {

            await deleteCourse(
                course.id,
                token
            );


            setMessage(
                'Curso eliminado correctamente.'
            );


            await loadData();

        } catch (error) {

            setError(
                error.message
            );

        }

    };


    const cancelEdit = () => {

        setEditingId(null);

        setForm(initialForm);

    };


    return (
        <main className="admin-page">

            <header className="admin-header">

                <div
                    className=
                    "container admin-header__content"
                >

                    <div>

                        <h1>
                            NexaLearn Admin
                        </h1>

                        <p>
                            Hola, {
                                user?.name
                            }
                        </p>

                    </div>


                    <div
                        className=
                        "admin-header__actions"
                    >

                        <Link
                            to="/"
                            className=
                                "admin-link"
                        >
                            Ver sitio
                        </Link>


                        <button
                            onClick={logout}
                            className=
                                "admin-logout"
                        >
                            Cerrar sesión
                        </button>

                    </div>

                </div>

            </header>


            <section
                className=
                    "container admin-content"
            >

                <div
                    className=
                        "admin-form-card"
                >

                    <h2>

                        {
                            editingId
                                ? 'Editar curso'
                                : 'Nuevo curso'
                        }

                    </h2>


                    {error && (
                        <div
                            className=
                                "login-error"
                        >
                            {error}
                        </div>
                    )}


                    {message && (
                        <div
                            className=
                                "admin-success"
                        >
                            {message}
                        </div>
                    )}


                    <form
                        onSubmit={
                            handleSubmit
                        }
                    >

                        <div
                            className=
                                "form-group"
                        >

                            <label>
                                Nombre
                            </label>

                            <input
                                name="title"
                                value={
                                    form.title
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            />

                        </div>


                        <div
                            className=
                                "form-group"
                        >

                            <label>
                                Descripción
                            </label>

                            <textarea
                                name=
                                    "description"
                                value={
                                    form.description
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            />

                        </div>


                        <div
                            className=
                                "form-group"
                        >

                            <label>
                                Precio
                            </label>

                            <input
                                name="price"
                                type="number"
                                step="0.01"
                                min="0"
                                value={
                                    form.price
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            />

                        </div>


                        <div
                            className=
                                "form-group"
                        >

                            <label>
                                Imagen URL
                            </label>

                            <input
                                name="image"
                                value={
                                    form.image
                                }
                                onChange={
                                    handleChange
                                }
                            />

                        </div>


                        <div
                            className=
                                "form-group"
                        >

                            <label>
                                Categoría
                            </label>

                            <select
                                name=
                                    "category_id"
                                value={
                                    form.category_id
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            >

                                <option value="">
                                    Selecciona
                                    una categoría
                                </option>


                                {
                                    categories.map(
                                        category => (

                                            <option
                                                key={
                                                    category.id
                                                }
                                                value={
                                                    category.id
                                                }
                                            >
                                                {
                                                    category.name
                                                }
                                            </option>

                                        )
                                    )
                                }

                            </select>

                        </div>


                        <div
                            className=
                                "admin-form-actions"
                        >

                            <button
                                type="submit"
                                className=
                                    "login-button"
                            >

                                {
                                    editingId
                                        ? 'Guardar cambios'
                                        : 'Crear curso'
                                }

                            </button>


                            {editingId && (

                                <button
                                    type="button"
                                    onClick={
                                        cancelEdit
                                    }
                                >
                                    Cancelar
                                </button>

                            )}

                        </div>

                    </form>

                </div>


                <div
                    className=
                        "admin-courses"
                >

                    <h2>
                        Cursos
                    </h2>


                    <div
                        className=
                            "admin-table-wrapper"
                    >

                        <table
                            className=
                                "admin-table"
                        >

                            <thead>

                                <tr>

                                    <th>
                                        Curso
                                    </th>

                                    <th>
                                        Categoría
                                    </th>

                                    <th>
                                        Precio
                                    </th>

                                    <th>
                                        Acciones
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {
                                    courses.map(
                                        course => (

                                            <tr
                                                key={
                                                    course.id
                                                }
                                            >

                                                <td>
                                                    {
                                                        course.title
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        course.category?.name
                                                    }
                                                </td>

                                                <td>
                                                    ${
                                                        course.price
                                                    }
                                                </td>

                                                <td>

                                                    <button
                                                        onClick={() =>
                                                            handleEdit(
                                                                course
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </button>


                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                course
                                                            )
                                                        }
                                                    >
                                                        Eliminar
                                                    </button>

                                                </td>

                                            </tr>

                                        )
                                    )
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

        </main>
    );
}


export default Admin;