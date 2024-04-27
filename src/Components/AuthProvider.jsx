import { createUserWithEmailAndPassword,
         GoogleAuthProvider,
         signInWithPopup, 
         FacebookAuthProvider, 
         onAuthStateChanged,
         signOut} from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

const [user,setUser] = useState(null)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
    const registerUser = (email, password) => {
     return   createUserWithEmailAndPassword(auth, email, password)
    //         .then(result=>console.log(result.user))
     };

   const googleLogin = () =>{
     return signInWithPopup(auth,googleProvider)
   }


    const  facebookLogin = ()=>{
        return signInWithPopup(auth,facebookProvider)
    }
     
    


 const logout = () =>{
    return signOut(auth)
 }

    const authInfo = {
        registerUser,user,setUser,googleLogin,facebookLogin,logout  
    }





    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                console.log(currentuser)
              setUser(currentuser)
            } else {
              setUser(null)
            }
          });
          return ()=>{
            unsubscribe()
          }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
