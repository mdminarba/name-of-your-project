import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loding, setloding]= useState(true)

    const createUser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
const forget =  (auth, email) =>{
    setloding(true)
    return sendPasswordResetEmail(auth , email)
}
    const signIn = (email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect (()=>{
       const unSusvribe = onAuthStateChanged(auth, currenUser =>{
            console.log('current valu',currenUser)
            setuser(currenUser);
            return () => {
                unSusvribe()
            }
        })
    },[])
    const logOut = () =>{
        setloding(true)
        return signOut(auth);
    }
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currenUser=>{
        setuser(currenUser)
        setloding(false)
    })

    return () =>{
        unSubscribe()
    }
},[])
    const authInfo = {
        user,
        loding,
        createUser,
        logOut,
        signIn,
        forget
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}





AuthProvider.propTypes = {
    children: PropTypes.any
}

export default AuthProvider