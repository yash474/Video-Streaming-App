import React, { useState , useContext} from 'react'
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from "../components"
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from "../constants/routes"
import { useNavigate } from "react-router-dom" ; 


export default function Signin( ) {

    const navigate = useNavigate() ;
    const { firebase } = useContext( FirebaseContext );
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');


    // check from input elt are valid 
    const isInvalid = password === "" || emailAddress === "";

    //email & passwd 
    const handleSignIn = (event) => {
        event.preventDefault();

        // firebase use
        firebase.auth().signInWithEmailAndPassword( emailAddress , password )
        .then( ()=> { // signInWithEmailAndPassword is a promise
            // push to browse page or content page
            navigate( ROUTES.BROWSE );
        })
        .catch( (error) => {
            setError( error.message );
            setEmailAddress( "");
            setPassword( "" );
        })
    }

    return (
        <>
            <HeaderContainer>
                
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST" >
                        <Form.Input placeholder="Email address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />

                        <Form.Input autoComplete="off" type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />

                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>

                    </Form.Base>
                    <Form.Text>
                        New to NetFlix? < Form.Link to="/signup">Sign up now</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More </Form.TextSmall>

                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
