import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

import {
    getMe,
    logout as logoutRequest
} from '../services/api';


const AuthContext = createContext();


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem('token')
    );

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const loadUser = async () => {

            if (!token) {
                setLoading(false);
                return;
            }


            try {

                const data = await getMe(token);

                setUser(data.user);

            } catch (error) {

                localStorage.removeItem('token');

                setToken(null);
                setUser(null);

            } finally {

                setLoading(false);

            }

        };


        loadUser();

    }, [token]);


    const saveLogin = (
        newUser,
        newToken
    ) => {

        localStorage.setItem(
            'token',
            newToken
        );

        setToken(newToken);
        setUser(newUser);

    };


    const logout = async () => {

        try {

            if (token) {
                await logoutRequest(token);
            }

        } catch (error) {

            console.error(error);

        } finally {

            localStorage.removeItem('token');

            setToken(null);
            setUser(null);

        }

    };


    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                saveLogin,
                logout,
                isAuthenticated: !!user,
                isAdmin:
                    user?.role === 'admin',
            }}
        >

            {children}

        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}