import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        // Cargando
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // Cargado
                dispatch(finishLoading());

                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e)
                dispatch(finishLoading());
            })
    }
}

export const startRegisterEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        // Grabo el usuario en Firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                // Asigno al atributo displayName el name
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch(e => {
                console.log(e)
            });
    }
}

export const startGoogleLogin = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout,
})