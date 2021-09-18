import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import ResetPassword from "./pages/Reset-Password";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const authCtx = useContext(AuthContext);


  return (
    <div className="">
       <ToastContainer />
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <HomePage></HomePage>
          </MainLayout>
        </Route>

        <Route path="/registration">
          <MainLayout>
            <Registration />
          </MainLayout>
        </Route>

        <Route path="/login">
          <MainLayout>
            <Login />
          </MainLayout>
        </Route>

        <Route path="/reset-password">
          <MainLayout>
            <ResetPassword />
          </MainLayout>
        </Route>

        <Route path="/profile">
          {authCtx.isLoggedIn && (
            <MainLayout>
              <Profile />
            </MainLayout>
          )}
          {!authCtx.isLoggedIn && <Redirect to='/login'></Redirect> }
        </Route>





        
      </Switch>
    </div>
  );
};

export default App;
