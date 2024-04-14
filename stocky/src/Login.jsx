import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import backgroundImage from './asset/img/Background.jpg';
import shoepic from './asset/img/ฺBG.jpg';
//import './Login.css';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const fetchLogin = () => {
        fetch(`/login?username=${username}&password=${password}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(Array.isArray(data)){
                history.push('./ProductManage', {user: data[data.length-1]});
            }
        })
        // .then((res)=> res.json())
        // .then((data)=>{
        // if (Array.isArray(data)) {
        // //   setValue(data);
        //   console.log("match");
        // } else {
        //   console.error("Data received from server is not an array:", data);
        // }})
        // .catch((err) => console.log(err));
    }

    const handleLogin = () => {
        fetchLogin()
        // history.push('/usermanage');
    };

    return (
        //className="bg-cover bg-center min-h-screen font-roboto" style={{ backgroundImage: `url(${shoepic})` }}
        <div>
            <div className="bg-cover bg-center min-h-screen font-roboto " style={{ backgroundImage: `url(${shoepic})` }}>
            {/* แก้บัค */}
            <h2 className='text-5xl font-bold mb-8 text-center invisible'>ffd</h2>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 mx-auto my-32">
                <h2 className='text-5xl font-bold mb-8 text-center'>Log In</h2>
                <div className="form-group">
                    <input 
                        className='rounded-md p-2 w-full border border-gray-300 block mb-10'
                        type="text" 
                        id="username" 
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                 <div className="form-group">
                    <input 
                        className='rounded-md p-2 w-full border border-gray-300'
                        type="password" 
                        id="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <div className="form-group flex flex-col ">
                        <Link to="/ForgotPassword" className="text-gray-500 text-sm mb-4 underline items-right text-right block mb-5">Forgot password</Link>
                        <button className='p-3 bg-red-500 text-white rounded-md hover:bg-black items-center' onClick={handleLogin}>Enter</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Login;
