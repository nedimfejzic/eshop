import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { auth, firestore, handleUserProfile } from "../firebase/utils";

export const AuthContext = React.createContext({
  currentUser: "",
  isLoggedIn: false,
  isAdmin: false,
  userEmail: "",
  login: (email, password) => {},
  logout: () => {},
  setIsAdmin: () => {},
  resetPassword: (email) => {},
});

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserIdentifier, setCurrentUserIdentifier] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(null);
  const history = useHistory();

  const loginHandler = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logoutHandler = () => {
    auth.signOut();
  };
  const setIsAdminHandler = (isAdmin) => {
    setUserIsAdmin(isAdmin);
  };

  function resetPasswordHandler(email) {
    // passing the config object so that after reseting the password we are forwared to this login page...
    const config = {
      url: "http://localhost:3000/login",
    };
    return auth.sendPasswordResetEmail(email, config);
  }

  

  useEffect(() => {
   

    const unsubscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("authListener-context: PRIJAVA");
        setCurrentUser(user);
        setCurrentUserIdentifier(user.email);
        setUserIsLoggedIn(true);
        handleUserProfile(user);




        const checkIfUserIsAdmin = async () => {
          const query = await firestore
            .collection("users")
            .where("email", "==", user.email)
            .get();
          if (!query.empty) {
            const snapshot = query.docs[0];
            const data = snapshot.data();
            if (data.userRoles.includes("admin")) {
              setUserIsAdmin(true);
              console.log("useEffect - ADMIN");
            } else {
              setUserIsAdmin(false);
              console.log("useEffect - NOT ADMIN");
            }
          }
        };

        checkIfUserIsAdmin();


      } else {
        console.log("authListener-context: ODJAVA");
        setUserIsAdmin(false);
        setCurrentUser("");
        setUserIsLoggedIn(false);
        history.push("/");
      }
    });
    return unsubscriber;
  }, [history]);

  const contextValue = {
    user: currentUser,
    userEmail: currentUserIdentifier,
    isLoggedIn: userIsLoggedIn,
    isAdmin: userIsAdmin,
    login: loginHandler,
    logout: logoutHandler,
    resetPassword: resetPasswordHandler,
    setIsAdmin: setIsAdminHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
