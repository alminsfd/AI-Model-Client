//  Context provider
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../services/firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const Googleprovider = new GoogleAuthProvider();


    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const GooglesignIN = () => {
        return signInWithPopup(auth, Googleprovider)
    }

    useEffect(() => {

        const unSuscribe = onAuthStateChanged(auth, (Currentuser) => {
            setLoad(false)
            setUser(Currentuser)
        })

        return ()=> unSuscribe()
    }, [])

    const authInfo = {
        user,
        setUser,
        register,
        login,
        logout,
        load,
        setLoad,
        GooglesignIN
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
