import React from 'react';
import styles from './Login.css';

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            submitted : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.setState({submitted: true});
        const{username, password} = this.state;

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { username, password, submitted } = this.state;
        return(
            <div className={styles.loginContainer}>
            <form name="form" onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <p>Username</p>
                <input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange}/>
                <p>Password</p>
                <input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}/>
                <button> Login </button>
                </form>    
            </div>
            
        );
    }
}
export default Login;