import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournaScreen';

export const AppRouter = () => {
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
