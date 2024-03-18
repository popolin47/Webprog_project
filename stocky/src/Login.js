import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        history.push('/productdetail');
    };
    const Forgot = () => {
        history.push('/productdetail');
    };
    return ( 
       <div className="container max-w-sm bg-white border mr-9 mt-9 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className='text-3xl font-bold'>Log In</h2>
            <div className="form-group">
                <label htmlFor="username" id="user"></label>
                <input 
                    className=' rounded-md '
                    type="text" 
                    id="username" 
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password"id="pass"></label>
                <input 
                    className=' rounded-md '
                    type="password" 
                    id="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
            <Link to="/productdetail"  id="forgot">Forgot password <br/></Link>
             <button className='p-2' onClick={handleLogin} id="enter">Enter</button>
            </div>
        </div>
   
    );
};



export default Login;