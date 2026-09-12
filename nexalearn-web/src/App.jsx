import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


function App() {

    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />
            
            <Route
                path="/admin"
                element={
                    <ProtectedRoute adminOnly>
                        <Admin />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}


export default App;