import React, { useState, useContext } from 'react'
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from "../components"
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from "../constants/routes"
import { useNavigate } from "react-router-dom";


export default function Signup() {

    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = firstName === '' || emailAddress === '' || password === '';

    // event.preventDefault 
    // 👉 The preventDefault() method is used to prevent the browser from executing the default action of the selected element. It can prevent the user from processing the request by clicking the link.
    // --> learning link "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"


    const handleSignup = (event) => {
        event.preventDefault();

        // firebase connectivity

        firebase.auth().createUserWithEmailAndPassword( emailAddress , password )
        .then(( result)  => {
            result.user.updateProfile( {
                displayName : firstName ,
                photoURL : Math.floor( Math.random() * 5 + 1 ) 
            }).then( ()=> {
                navigate( ROUTES.BROWSE );
            })
        })
        .catch( (error ) => {
            setError( error.message );
            setEmailAddress( "");
            setPassword( "");
            setFirstName( "");
        })
    }

    return (

        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input placeholder="First name" value={firstName} onChange={({target}) => setFirstName(target.value)} />

                        <Form.Input placeholder="Email address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)} />

                        <Form.Input placeholder="Password" autoComplete='off' type="password" value={password} onChange={({target}) => setPassword(target.value)} />

                        <Form.Submit disable={isInvalid} type="submit" >Sign Up</Form.Submit>

                        <Form.Text>
                            Already a user ? <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
