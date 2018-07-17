import React from 'react';
import styles from './Login.css';

class Login extends React.Component{
    render() {
        return(
            <div className={styles.loginContainer}>
                <h1>Login</h1>
                <p>Username</p>
                <input type="text" placeholder="Username"/>
                <p>Password</p>
                <input type="password" name="" id="" placeholder="Password"/>
                <button> Login </button>
                <div>
                     <a href=""> Register </a>
                </div>     
            </div>
            
        );
    }
}
export default Login;