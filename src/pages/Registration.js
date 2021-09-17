import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//import { useAuth } from "../contexts/AuthContext";

const Registration = () => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const identifierInputRef = useRef();
  const passwordInputRef = useRef();
  // const signup = { useAuth };
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearInputs = () => {
    nameInputRef.current.value = "";
    surnameInputRef.current.value = "";
    identifierInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredIdentifier = identifierInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;


    if ((enteredPass === "nedim123")) {
      return setError('Password cant be "nedim123"');
    }


    try {
      setError('');
      setIsLoading(true);
      //await signup(enteredIdentifier, enteredPass);
    } catch {
      setError("Failed to create an account!");
    }
    setIsLoading(false);


    clearInputs();
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
              {error && <div className='my-4 mx-4 rounded-2xl bg-red-300 text-red-800 py-3 px-8 text-sm font-bold'>{error}</div>}

              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="first_name"
                      type="text"
                      placeholder="Your first name"
                      ref={nameInputRef}
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="last_name"
                      type="text"
                      placeholder="Your last name"
                      ref={surnameInputRef}
                    />
                  </div>
                </div>
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
                  <p className="text-xs mt-1 text-gray-400">
                    At least 6 characters
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button disabled={isLoading} className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-8 rounded-full">
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
