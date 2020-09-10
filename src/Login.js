import React,{useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch((e) => alert(e.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/');
            }
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
            </Link>
            <div className="login_container">
                <h1> Sign In </h1>
                <form>
                    <h5> E-mail </h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5> Password </h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button className="singin_button" type="submit" onClick={login}> Sign In </button>
                </form>
                <p> By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our 
                    Privacy Policy, our Cookies notice and our Interest based Ads Notice.
                </p>
                <button className="login_button" type="submit" onClick={register}> Create your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login
