import React from 'react'
import * as ROUTES from "./constants/routes"  // * means all 
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks';


function App() {

    var {user} = useAuthListener() ;
    console.log(user);
    return (
        <Router >
            <Routes>
                <Route exact path={ROUTES.Home} element={<Home />} />
                <Route exact path={ROUTES.BROWSE} element={<Browse />} />
                <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />

                {/* <Route exact path={ROUTES.SIGN_UP} element={<Signup />} /> */}
                <Route exact path={ROUTES.SIGN_UP} element={
                    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                        <Signup />
                    </IsUserRedirect>
                }/>

                
            </Routes>
        </Router>
    );
}

export default App;
