import { useContext, useRef, useState } from "react";
import { Link} from "react-router-dom";
import { toast} from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const ResetPassword = () => {
  const identifierInputRef = useRef();
  const [identifierError, setIdentifierError] = useState('');
  const authCtx = useContext(AuthContext);


const inputChangeHandler=()=>{
    if (identifierError) {
        setIdentifierError('');
    }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');
    const enteredIdentifier = identifierInputRef.current.value;

    try{

        await authCtx.resetPassword(enteredIdentifier)   

        toast.success('Check your mail for completing the procedure.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            identifierInputRef.current.value= '';
    }
    catch(error){


        setIdentifierError(error.message);
        toast.error(error.message, {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
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
               Reset my password
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
                    onChange={inputChangeHandler}
                    required
                  />
                      {identifierError && <div className='bg-red-200 text-red-800 rounded-3xl px-4 py-2 mt-2'>{identifierError}</div>}
                       
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

export default ResetPassword;
