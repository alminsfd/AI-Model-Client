import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);
    const [load, setLoad] = useState(true)
    const Googleprovider = new GoogleAuthProvider();


    const register = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoad(true)
        return signOut(auth)
    }

    const GooglesignIN = () => {
        setLoad(true)
        return signInWithPopup(auth, Googleprovider)
    }

    useEffect(() => {

        const unSuscribe = onAuthStateChanged(auth, (Currentuser) => {
            setLoad(false)
            setUser(Currentuser)
        })

        return () => unSuscribe()
    }, [])

    const Userpadate = (obj) => {
        return updateProfile(auth.currentUser, obj)
    }

    const authInfo = {
        user,
        setUser,
        register,
        login,
        logout,
        load,
        setLoad,
        GooglesignIN,
        Userpadate,
        
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
