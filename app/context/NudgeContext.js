"use client"

import { useContext, createContext, useState, useEffect } from "react"
import {collection, getDocs, addDoc, getDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"
import {db} from "../firebase"
import { use } from "echarts"

const NudgeContext = createContext()

export const NudgeProvider = ({ children }) => {
    const [nudges, setNudges] = useState([]);
    const getNudges = async () => {
        const querySnapshot = await getDocs(collection(db, "nudges"));
        const tempDoc = [];
        querySnapshot.forEach((doc) => {
            tempDoc.push({...doc.data(), id: doc.id});
        });
        setNudges(tempDoc);
    }

    const saveNudge = async (nudge) => {
        try {
            const docRef = await addDoc(collection(db, "nudges"), nudge);
            const newNudge = {
                ...nudge,
                id: docRef.id,
            };
            getNudges();
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getNudges();
    }, []);

    return (
        <NudgeContext.Provider value={{ nudges, getNudges, saveNudge }}>
            {children}
        </NudgeContext.Provider>
    );
}

export const UseNudge = () => useContext(NudgeContext);