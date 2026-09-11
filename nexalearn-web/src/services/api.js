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