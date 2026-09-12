import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {login} from '../services/api';
import {useAuth} from '../context/AuthContext';
import '../App.css';


function Login() {

    const navigate = useNavigate();

    const {
        saveLogin
    } = useAuth();


    const [form, setForm] = useState({
        email: '',
        password: '',
    });


    const [error, setError] =
        useState('');

    const [loading, setLoading] =
        useState(false);


    const handleChange = (event) => {

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
        setLoading(true);


        try {

            const data =
                await login(form);


            saveLogin(
                data.user,
                data.token
            );


            navigate('/');

        } catch (error) {

            setError(
                error.message
            );

        } finally {

            setLoading(false);

        }

    };


    return (
        <main className="login-page">

            <section className="login-card">

                <span className="login-card__tag">
                    NexaLearn
                </span>

                <h1>
                    Iniciar sesión
                </h1>

                <p>
                    Ingresa a tu cuenta
                    para continuar.
                </p>


                {error && (
                    <div className="login-error">
                        {error}
                    </div>
                )}


                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <div className="form-group">

                        <label
                            htmlFor="email"
                        >
                            Correo
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={
                                form.email
                            }
                            onChange={
                                handleChange
                            }
                            required
                            placeholder=
                                "correo@ejemplo.com"
                        />

                    </div>


                    <div className="form-group">

                        <label
                            htmlFor="password"
                        >
                            Contraseña
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={
                                form.password
                            }
                            onChange={
                                handleChange
                            }
                            required
                            placeholder=
                                "********"
                        />

                    </div>


                    <button
                        className="login-button"
                        type="submit"
                        disabled={loading}
                    >

                        {
                            loading
                                ? 'Ingresando...'
                                : 'Iniciar sesión'
                        }

                    </button>

                </form>

            </section>

        </main>
    );
}


export default Login;