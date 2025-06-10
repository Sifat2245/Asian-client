import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";

import { app } from "../firebaase/firebase_init";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext()
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])


    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        googleLogin,
        resetPassword,
        logout
    }

    return <authContext.Provider value={authData}>
        {children}
    </authContext.Provider>
}

export default AuthProvider
