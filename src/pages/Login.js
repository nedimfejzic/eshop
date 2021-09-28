import React, { useContext, useState } from "react";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import {signInWithGoogle } from "../firebase/utils";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [identifierError, setIdentifierError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const identifierInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);
  const resetErrors = () => {
    setIdentifierError("");
    setPasswordError("");
  };
  const clearInputs = () => {
    identifierInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const redirectToHome = () => {
    history.push("/profile");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredIdentifier = identifierInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;

    resetErrors();
    try {
    await authCtx.login(enteredIdentifier, enteredPass);
      clearInputs();
      toast.success("Loged in", {autoClose: 2000,        onClose: redirectToHome,      });
      identifierInputRef.current.value = "";

    } catch (err) {
      console.log(err);
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setIdentifierError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          break;
        default:
          setPasswordError("Error. Please try again...");
      }
    }
  };

  const submitGoogleAuth = (e) => {
    e.preventDefault();
    signInWithGoogle().catch((err) => {
      switch (err.code) {
        case "auth/popup-closed-by-user":
          setPasswordError(err.message);
          break;
        default:
          setPasswordError("Error with oAuth. Please try again...");
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="identifier"
                className="leading-7 text-sm text-gray-600"
              >
                Identifier
              </label>
              <input
                ref={identifierInputRef}
                required
                type="identifier"
                id="identifier"
                name="identifier"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {identifierError && (
                <div className="bg-red-300 text-red-700 rounded-3xl px-4 py-2 mt-2">
                  {identifierError}
                </div>
              )}
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                ref={passwordInputRef}
                required
                type="password"
                minLength="5"
                id="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {passwordError && (
                <div className="bg-red-300 text-red-700 rounded-3xl px-4 py-2 mt-2">
                  {passwordError}
                </div>
              )}
            </div>

            <button
              disabled={authCtx.isLoggedIn}
              className={
                "text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded  " +
                (authCtx.isLoggedIn ? "opacity-50 cursor-not-allowed" : "")
              }
            >
              {authCtx.isLoggedIn ? "Already logged in" : "Login"}
            </button>
            <button
              onClick={submitGoogleAuth}
              disabled={authCtx.isLoggedIn}
              className={
                "flex justify-center items-center text-gray-800 bg-white border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded  mt-2 " +
                (authCtx.isLoggedIn ? "opacity-50 cursor-not-allowed" : "")
              }
            >
             <FcGoogle size="24px" />
                <span className='pl-2'>Login with Google</span>
            </button>

            <Link
              to="/reset-password"
              className="leading-relaxed mt-4 text-gray-600 text-sm"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Login;
