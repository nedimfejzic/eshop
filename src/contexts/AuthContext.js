import React, { useContext, useState, useEffect, useRef } from "react";
import { auth, handleUserProfile } from "../firebase/utils";

export const AuthContext = React.createContext({
    currentUser: '',
    isLoggedIn: false,
    userEmail: '',
    login: (email, password) => { },
    logout: () => { },
    resetPassword: (email) => { }
});

export const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState('');
    const [currentUserIdentifier, setCurrentUserIdentifier] = useState('');
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        auth.signOut();
    };

    function resetPasswordHandler(email) {
        // passing the config object so that after reseting the password we are forwared to this login page...
        const config = {
            url: 'http://localhost:3000/login'
        }
        return auth.sendPasswordResetEmail(email, config);
    };

    const loginHandler = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const handleFirebaseUser = async (user) => {
        const userRef = await handleUserProfile(user);
        userRef.onSnapshot((snapshot) => {
            console.log('Firebase Snapshot - ID - ' + snapshot.id);
        })
    }

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {

            if (user) {
                console.log('authListener-context: PRIJAVA');
                setCurrentUser(user);
                setCurrentUserIdentifier(user.email);
                setUserIsLoggedIn(true);
                handleFirebaseUser(user);
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
        logout: logoutHandler,
        resetPassword: resetPasswordHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

