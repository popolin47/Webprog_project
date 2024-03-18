import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        history.push('/productdetail');
    };

    return (
        <div className="container max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 mx-auto my-32">
            <h2 className='text-5xl font-bold mb-8'>Log In</h2>
            <div className="form-group">
                <label htmlFor="username" className="block mb-1">Username</label>
                <input 
                    className='rounded-md p-2 w-full border border-gray-300'
                    type="text" 
                    id="username" 
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="block mb-1">Password</label>
                <input 
                    className='rounded-md p-2 w-full border border-gray-300'
                    type="password" 
                    id="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group flex flex-col items-center">
                <Link to="/forgotpassword" className="text-gray-500 text-sm mb-4">Forgot password</Link>
                <button className='p-3 bg-red-500 text-white rounded-md hover:bg-black'>Enter</button>
            </div>
        </div>
    );
};

export default Login;
