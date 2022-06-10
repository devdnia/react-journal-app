import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournaScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    // Cuando cambia la autenticación de Firebase
    useEffect(() => {
    
        firebase.auth().onAuthStateChanged(( user) => {

            // Si el obj user existe pregunta el uid
            if( user?.uid){
                dispatch( login( user.uid, user.displayName ) );
            }
        })

    }, [ dispatch ]);
    


    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/auth/*" element={<AuthRouter />} />

                    <Route path="/" element={<JournalScreen />} />

                    <Route path="*" element={<Navigate replace to="/auth/login" />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}
