import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from "../firebase/utils";

export const AuthContext = React.createContext({
    currentUser: '',
    isLoggedIn: false,
    userEmail: '',
    login: (email, password) => { },
    logout: () => { }
});


export const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState('');
    const [currentUserIdentifier, setCurrentUserIdentifier] = useState('');
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        auth.signOut();
    };

    const loginHandler = (email, password) => {
        console.log('hoce li doc ovdje ikad');
        auth.signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {

            if (user) {
                console.log('authListener-context: PRIJAVA');

                setCurrentUser(user);
                setCurrentUserIdentifier(user.email);
                setUserIsLoggedIn(true);
            }
            else {
                console.log('authListener-context: ODJAVA');

                setCurrentUser('');
                setUserIsLoggedIn(false);
            }
        })
        return unsubscriber;
    }, [])



    const contextValue = {
        user: currentUser,
        userEmail: currentUserIdentifier,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}






/*
export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function signup(email, password, name, surname) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function loginUser(email, password) {
        console.log('4545645646456456456464654');
        return auth.signInWithEmailAndPassword(email, password);
    }
*/