
import { Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="">


      <Switch>
        <Route exact path="/">
          <MainLayout>
            <HomePage></HomePage>
          </MainLayout>
        </Route>

        <Route path='/registration'>
          <MainLayout>
            <Registration />
          </MainLayout>
        </Route>

        <Route path='/login'>
          <MainLayout>
            <Login />
          </MainLayout>
        </Route>


      </Switch>
    </div>
  );
}

export default App;
