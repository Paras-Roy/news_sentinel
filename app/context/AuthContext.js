"use client"
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../firebase";
import Login from "../components/login/Login";
import Loading from "../components/loading/Loading";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

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
            setLoading(false); 
        })
        return ()=>unsubscribe();
    }, []); // Remove user from dependencies

    if (loading) return <div><Loading/></div>;

    if(!user)return (
        <AuthContext.Provider value = {{user, signInGoogle, signOutGoogle}}><Login/></AuthContext.Provider>
    );
    else return (
        <AuthContext.Provider value = {{user, signInGoogle, signOutGoogle}}>{children}</AuthContext.Provider>
    );
}

export const UseAuth = () => useContext(AuthContext);