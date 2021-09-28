import { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const LogedUserLayout = props => {
    
  const authCtx = useContext(AuthContext);
    return (    
        <div>
        {authCtx.isLoggedIn && props.children}
        {!authCtx.isLoggedIn && <Redirect to="/login"></Redirect>}
      </div>
     );
}
 
export default LogedUserLayout;