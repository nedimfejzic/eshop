import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";


const Header = () => {
  const authCtx = useContext(AuthContext);
  const logout = ()=>{

    authCtx.logout();
    
    toast('Loggin out', {
      position: "top-right",
      autoClose: 1600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <header>
      <div className="container mx-auto">
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center">
            <div>
              <img className="w-10 h-10" src="/watermelon_1f349.png" alt='App logo' />
            </div>
          </div>

          <label
            htmlFor="menu-toggle"
            className="pointer-cursor lg:hidden block"
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-600   pt-4 lg:pt-0">
                <li>
                  <Link to='/'
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-400 lg:mb-0 mb-2"
                  >
                    Home
                  </Link>
                </li>
              
{!authCtx.isLoggedIn &&
  <li>
  <Link to='/registration'
    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-400 lg:mb-0 mb-2"
  >
    Registration
  </Link>
</li>
}

{!authCtx.isLoggedIn&&


<li>
<Link to='/login'
  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-400 lg:mb-0 mb-2"
>
  Login
</Link>
</li>
}
                
              {authCtx.isLoggedIn&&  <li>
                  <Link to='/profile'
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-400 lg:mb-0 mb-2"
                  >
                    Profile
                  </Link>
                </li>}

              </ul>
            </nav>
          </div>
        </header>
      </div>
    </header>
  );
};

export default Header;
