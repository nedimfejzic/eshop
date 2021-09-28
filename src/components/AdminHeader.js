import { Link } from "react-router-dom";
import {FaSignOutAlt} from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AdminHeader = () => {
    const authCtx = useContext(AuthContext);
    const isLogedIn = authCtx.isLoggedIn;
    const logOutHandler = () =>{
        authCtx.logout();
    }

    return ( 
        <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700	flex flex-wrap items-center text-base justify-center">
           <Link to='/admin-dashboard' className="mr-5 hover:text-white">Admin Dashboard</Link>
            <Link to='/admin-dashboard' className="mr-5 hover:text-white">{authCtx.isAdmin?'ADMIN':'NIJE ADMIN'}</Link>
          </nav>
          {isLogedIn &&
          <button 
          onClick={logOutHandler}
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Log Out
         <div className='ml-2 '>
         <FaSignOutAlt/>
         </div>
        </button>
          }
          
        </div>
      </header>
     );
}
 
export default AdminHeader;