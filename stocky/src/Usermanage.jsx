import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
//import Trash from './asset/img/Trash.svg';
import { TbEdit } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";

const Usermanage = () => {
  const history = useHistory();
  const [value, setValue] = useState('');
  useEffect(()=>{
    fetch('/usermanage')
    .then((res)=> res.json())
    .then((data)=>{
    if (Array.isArray(data)) {
      setValue(data);
      console.log("match");
    } else {
      console.error("Data received from server is not an array:", data);
    }})
    .catch((err) => console.log(err));
  },[]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Navigate to the search page with the search query
    history.push(`/search?query=${value}`);
  };
  
  

  return (
    <div className="p-4">
      <div className="sm:ml-64 shadow-md">
        <div className="px-8">
          <h1 className="text-lg pb-5">User</h1>
          <div className="flex-row">
          <input type="password" name="pass" id="pass" onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Username' required />
            <button type="submit" onClick={handleSearchSubmit} className= "pr-5 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
              Search
            </button>
            <Link to="/searchuser">
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
              Advanced Search
            </button></Link>
            <br />
          </div>
        </div>
        <div className="Tablebox ">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {value && value.map((user) => (
                <tr key={user.Username}>
                  <td>{user.AFname}</td>
                  <td>{user.Aemail}</td>
                  <td>{user.Password}</td>
                  <td>{user.AID}</td>
                  <td className="flex">
                  <div className="pl-5" >
                    <Link to="/modifyuser"><TbEdit size={"22"}/></Link>
                    
                  </div>
                  <div className="pl-5" >
                    <FaTrash size={"18"}/>
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/adduser"className="flex justify-end mt-4  pr-12 pb-8">
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
            Add
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Usermanage;
