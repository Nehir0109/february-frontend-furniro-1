import style from "./AuthForm.module.scss";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthForm = ({ type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState(''); // Sadece signup için gerekli
    const history = useHistory();

    // Form submission process
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(type === 'login' ){
            console.log('Login with:', { email, password });
        } else if (type === 'signup') {
            console.log('Sign up with:', { fullName, email, password });
        }
    };

    const handleLoginRedirect = () => {
        history.push('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{type === 'login' ? 'Login' : 'Create your Free Account'}</h2>

            {type === 'signup' && (
                <div>
                    <label htmlFor="fullName">Full name</label>
                    <input 
                       type="text"
                       id="fullname"
                       placeholder="John Doe"
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                    />
                </div> 
            )}
            <div>
                <label htmlFor="email">Email address</label>
                <input 
                   type="email"
                   id="email"
                   placeholder="Abc@def.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                />
            </div>
            <div>
            <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="social-buttons">
                <p>- OR -</p>
                <div className="social-button-container">
                    <button type="button">
                        <img src="./src/assets/AuthPage/github.svg" alt="GitHub Logo"/>
                        Sign up with GitHub
                    </button>
                    <button type="button">
                        <img src="./src/assets/AuthPage/google.svg" alt="Google Logo"/>
                        Sign up with Google
                    </button>
                </div>
                
                {type === 'signup' && (
                    <div>
                        <p>Already have an account? <button type="button" onClick={handleLoginRedirect}>Log in</button></p>
                    </div>
                )}
            </div>

            <button type="submit">
                {type === 'login' ? 'Login' : 'Create Acount'}
            </button>
        </form>
    );
}

export default AuthForm;