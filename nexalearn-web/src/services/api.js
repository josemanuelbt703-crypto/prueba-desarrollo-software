const API_URL =
    import.meta.env.VITE_API_URL ??
    'http://127.0.0.1:8000/api';


export async function getCourses() {
    const response = await fetch(
        `${API_URL}/courses`,
        {
            headers: {
                Accept: 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error(
            'No se pudieron obtener los cursos'
        );
    }

    return response.json();
}


export async function login(credentials) {

    const response = await fetch(
        `${API_URL}/login`,
        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },

            body: JSON.stringify(credentials),
        }
    );


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.message ||
            'Correo o contraseña incorrectos'
        );

    }


    return data;
}


export async function getMe(token) {

    const response = await fetch(
        `${API_URL}/me`,
        {
            headers: {
                Accept: 'application/json',

                Authorization:
                    `Bearer ${token}`,
            },
        }
    );


    if (!response.ok) {
        throw new Error(
            'No se pudo obtener el usuario'
        );
    }


    return response.json();
}


export async function logout(token) {

    const response = await fetch(
        `${API_URL}/logout`,
        {
            method: 'POST',

            headers: {
                Accept: 'application/json',

                Authorization:
                    `Bearer ${token}`,
            },
        }
    );


    if (!response.ok) {
        throw new Error(
            'No se pudo cerrar la sesión'
        );
    }


    return response.json();
}