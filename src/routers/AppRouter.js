import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournaScreen';
import { login } from '../actions/auth';
import { LoadingScreen } from '../components/loading/LoadingScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    // Para condicionar rutas, si esta autenticado,
    // mientras firebase revisa la autentificación
    const [ checking, setChecking ] = useState(true);

    // Para redireccionar al usuario en las rutas
    const [ isLoggedIn, setLoggedIn ] = useState(false);

    // Cuando cambia la autenticación de Firebase
    useEffect(() => {
    
        firebase.auth().onAuthStateChanged(( user) => {

            // Si el obj user existe pregunta el uid
            if( user?.uid){
                dispatch( login( user.uid, user.displayName ) );
                setLoggedIn( true );
            } else {
                setLoggedIn( false );
            }

            setChecking( false );
        })

    }, [ dispatch, setChecking, setLoggedIn ]);
    
    if( checking ){
        return(
            <LoadingScreen />
        )
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    
                    {/* Si el usuario NO está autenticado */}
                    <Route path="/auth/*" element={<AuthRouter />} />

                    {/* Si el usuario esta autenticado */}
                    <Route path="/" element={<JournalScreen />} />

                    <Route path="*" element={<Navigate replace to="/auth/login" />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}
