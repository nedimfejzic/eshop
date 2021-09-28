import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fire from "../firebase/utils";

const Registration = () => {
  const identifierInputRef = useRef();
  const passwordInputRef = useRef();
  const [identifierError, setIdentifierError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');
    const enteredIdentifier = identifierInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;


    if ((enteredPass === "nedim123")) {
      return setPasswordError('Password cant be "nedim123"');
    }

    fire.auth()
    .createUserWithEmailAndPassword(enteredIdentifier, enteredPass)
    .then(function tacno(){
      console.log('prijavljeno sve ok....');
      history.push('/');
    })
    .catch(err => {
        switch (err.code) {
            case 'auth/email-already-in-use':
            case 'auth/invalid-email':
                setIdentifierError(err.message);
                break;
            case 'auth/weak-password':
                setPasswordError(err.message);
                break;
            default :
              setPasswordError('Error. Please try again.');


        }
    })

  };

  return (
    <div>

      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest">
          <div className="container mx-auto py-8">

            <form
              onSubmit={handleSubmit}
              className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow"
            >
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Register for a free account
              </div>

              <div className="py-4 px-8">
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    ref={identifierInputRef}
                  />
                      {identifierError && <div className='bg-red-300 text-red-700 rounded-3xl px-4 py-2 mt-2'>{identifierError}</div>}
                       
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="password"
                    type="password"
                    placeholder="Your secure password"
                    ref={passwordInputRef}
                  />
                    {passwordError && <div className='bg-red-300 text-red-700 rounded-3xl px-4 py-2 mt-2'>{passwordError}</div>}
                     
                  <p className="text-xs mt-1 text-gray-400">
                    At least 6 characters
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-8 rounded-full">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center my-4">
              <Link
                to="/login"
                className="text-grey-dark text-sm no-underline hover:text-grey-darker"
              >
                I already have an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
