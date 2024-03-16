import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);

        history.push('/Home');
    };

    return (
       <div className="container">
            <h2>Log In</h2>
            <div className="form-group">
                <label htmlFor="username" id="user">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password"id="pass">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button onClick={handleLogin} id="enter">Enter</button>
            </div>
        </div>
   
    );
};



export default Login;