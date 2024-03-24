import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setTimeout(() => {
      setSuccessMessage('Password reset email has been sent.');
      history.push('/login');
    }, 1000);
  };

  return (
    <div>
        <h2 className='pt-20 text-4xl text-black text-center'>Forgot Password</h2>
        <div className="container max-w-sm bg-white border border-black bg-gray-800 dark:border-gray-700 p-5 mx-auto my-32 ">
            <p className="mb-0 text-center">Please enter the email address that is </p>
            <p className="mb-4 text-center">associated with your Stock-Y account.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                      className='rounded-md p-2 w-full border border-gray-300 block mb-5'
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && <div className="text-red-500 mb-5">{error}</div>}
                {successMessage && <div className="text-green-500 mb-5">{successMessage}</div>}
                <div className="form-group flex flex-col ">
                  <button className='p-3 bg-black text-white rounded-md hover:bg-red-500 items-center'>Reset Password</button>
                </div>
            </form>
        </div>

    </div>
    
  );
};

export default ForgotPassword;
