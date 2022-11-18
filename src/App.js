import React from 'react'

import * as ROUTES from "./constants/routes"  // * means all 
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import {Home , Browse , Signin , Signup } from './pages';


function App() {
    return (
        <Router >
            <Routes>
                <Route exact path={ROUTES.Home} element={<Home/>} />
                <Route exact path={ROUTES.BROWSE} element={<Browse/>} />
                <Route exact path={ROUTES.SIGN_IN} element={<Signin/>} />
                <Route exact path={ROUTES.SIGN_UP} element={<Signup/>} />
            </Routes>
        </Router>
    );
}

export default App;
