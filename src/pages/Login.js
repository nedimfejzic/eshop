import React, { Component, useEffect, useState } from 'react';
import { useRef } from "react";
import { signInWithGoogle } from '../firebase/utils'
import fire from '../firebase/utils';


const Login = () => {

    const [user, setUser] = useState('');
    const identifierInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredIdentifier = identifierInputRef.current.value;
        const enteredPass = passwordInputRef.current.value;

        console.log('form fired');
        console.log(enteredIdentifier + ' - ' + enteredPass);

        fire.
            auth()
            .signInWithEmailAndPassword(enteredIdentifier, enteredPass)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        alert(err.message);
                        break;
                    case 'auth/wrong-password':
                        alert('password' + err.message);
                        break;

                }
            });

        clearInputs();


    }

    const clearInputs = () => {
        identifierInputRef.current.value = '';
        passwordInputRef.current.value = '';
    }

    const signUpHandler = (e) => {
        e.preventDefault();

        const enteredIdentifier = identifierInputRef.current.value;
        const enteredPass = passwordInputRef.current.value;

        console.log('form fired');
        console.log(enteredIdentifier + ' - ' + enteredPass);

        fire.
            auth()
            .createUserWithEmailAndPassword(enteredIdentifier, enteredPass)
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        alert(err.message);
                        break;
                    case 'auth/weak-password':
                        alert('password' + err.message);
                        break;

                }
            })

    }


    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                console.log('prijavljen user');
                console.log(user);
            } else {
                setUser('');
            }
        })
    }

    useEffect(() => { authListener(); }, [])


    const submitGoogleAuth = (e) => {
        e.preventDefault();
        //signInWithGoogle();
        const enteredIdentifier = identifierInputRef.current.value;
        const enteredPass = passwordInputRef.current.value;

        console.log('form fired googleeeeee');
        console.log(enteredIdentifier + ' - ' + enteredPass);
    }

    return (
        <form onSubmit={submitHandler}>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>

                        <div className="relative mb-4">
                            <label htmlFor="identifier" className="leading-7 text-sm text-gray-600">Identifier</label>
                            <input ref={identifierInputRef} required type="identifier" id="identifier" name="identifier" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>


                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input ref={passwordInputRef} required type="password" minLength='5' id="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <button className="text-gray-600 bg-gray-300 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded text-lg">Login</button>
                        <button onClick={submitGoogleAuth} className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-2">Login with Google</button>
                    </div>
                </div>
            </section>

        </form>
    )
};

export default Login;