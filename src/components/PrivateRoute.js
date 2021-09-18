import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = (props) => {
    const authCtx = useContext(AuthContext);
    return ( 
        <div>
            {authCtx.isLoggedIn && props.children}
            {!authCtx.isLoggedIn && <Redirect to='/login'></Redirect> }

        </div>
     );
}
 
export default PrivateRoute;
