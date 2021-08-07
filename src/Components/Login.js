import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css"
import { auth, provider } from "../Firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from '../Reducer';

function Login() {
    const [{},dispatch] = useStateValue();
        
    const signIn =() => {
       auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            });

        }).catch((error=>(alert(error.message))));

    };

    return (
        <div  className="login">
            <div className=  "login__container" >

                <img src="https://cdn.worldvectorlogo.com/logos/whatsapp-3.svg" alt="" />

                <div className="login__text ">
                    <h1>Sign In to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>

                    Sign In With Google

                </Button>
            </div>

        </div>
    )
}

export default Login;
