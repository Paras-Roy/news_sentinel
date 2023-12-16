"use client"

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const signOutGoogle = () => {
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user);
        })
        return ()=>unsubscribe();
    }, [user]);
    
    return (
        <AuthContext.Provider value = {{user, signInGoogle, signOutGoogle}}>{children}</AuthContext.Provider>
    );
    }

    export const UseAuth = () => useContext(AuthContext);