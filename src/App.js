
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Homepage";
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
          <Registration/>
        </MainLayout>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
