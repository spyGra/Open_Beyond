import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserContextProvider from "./context/userContextProvider";
import UpdateModal from "./modals/UpdateModal";
import Login from "./screens/Login";
import Home from "./screens/Home";
import UpdateUser from "./screens/UpdateUser";
import ContactMe from "./screens/ContactMe";
import View from "./screens/View";
import CreateNew from "./screens/CreateNew";
import NotFound from "./screens/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <UpdateModal />
          <Navbar />
          <Switch>
              <Route path= "/new">
                  <CreateNew />
              </Route>
              <Route path= "/view/:id">
                  <View />
              </Route>
              <Route path = "/contact">
                  <ContactMe />
              </Route>
              <Route path = "/update/:id">
                  <UpdateUser />
              </Route>
              <Route path = "/index">
                  <Home />
              </Route>
              <Route exact path = "/">
                  <Login />
              </Route>
              <Route path= "*">
                  <NotFound />
              </Route>
          </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
