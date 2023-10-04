import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth);
    }
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currenUser=>{
        console.log('user on the auth stete chacged',currenUser);
        setuser(currenUser)
    })
    return () =>{
        unSubscribe()
    }
},[])
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn
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