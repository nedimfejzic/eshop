import { useContext } from "react";
import AdminHeader from "../components/AdminHeader";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";

const MainLayout = props => {
  const authCtx = useContext(AuthContext);
    return (    
        <div>
           {authCtx.isAdmin &&  <AdminHeader/>}
            <Header/>
           <div className='container mx-auto'>
               {props.children}
           </div>
        </div>
     );
}
 
export default MainLayout;