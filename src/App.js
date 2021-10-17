import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import UserContextProvider from "./context/userContextProvider";
import Login from "./screens/Login";
import Home from "./screens/Home";
import UpdateUser from "./screens/UpdateUser";
import ContactMe from "./screens/ContactMe";
import View from "./screens/View";
import CreateNew from "./screens/CreateNew";
import NotFound from "./screens/NotFound";


const PrivateRoute = ({children}) => {
    const history = useHistory();
    const userId = sessionStorage.getItem('userId')
    if(userId) {
        return children
    } else {
        history.push('/')
        return null
    }
}

function App() {
    return (
        <Router>
            <UserContextProvider>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/admin">
                        <PrivateRoute>
                            <Route exact path = "/admin">
                                <Home />
                            </Route>
                            <Route path= "/admin/new">
                                <CreateNew />
                            </Route>
                            <Route path= "/admin/view/:id">
                                <View />
                            </Route>
                            <Route path = "/admin/contact">
                                <ContactMe />
                            </Route>
                            <Route path = "/admin/update/:id">
                                <UpdateUser />
                            </Route>
                        </PrivateRoute>
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </UserContextProvider>
        </Router>
    );
}

export default App;
