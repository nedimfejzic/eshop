import { func } from "prop-types";
import React, {useContext, useState, useEffect} from "react";
import { auth } from "../firebase/utils";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function signup(email, password, name, surname){
        return auth.createUserWithEmailAndPassword(email, password);
    }

   useEffect(()=>{
     const unsubscriber = auth.onAuthStateChanged(user=>{
        setCurrentUser(user);
        setIsLoggedIn(true);
    })
    return unsubscriber;
   },[])


    const value = {
        currentUser,
        isLoggedIn,
        signup
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
        )
}
