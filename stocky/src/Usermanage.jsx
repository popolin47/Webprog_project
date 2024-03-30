import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Trash from './asset/img/Trash.svg';
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
          <div className="searchBar">
            <input
              id="searchName"
              type="text"
              placeholder="Enter User name"
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSearchSubmit}>
              Search
            </button>
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
