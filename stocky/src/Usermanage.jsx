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
  const [query, setQuery] = useState('');
  //const [name, setName]= useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  let [valuefordel, setvaluefordel]= useState({
    firstname: '',
    lastname: '',
    phone: '',
    email:'',username:'', pass:''  });
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
  const handleChange2 = (userID) => {
    console.log(userID);
    setvaluefordel(userID); // Assuming userID is the unique identifier for the user
  };
  const handleDelete = (event) => {
    console.log("deleting start front"); 
    console.log(valuefordel);
    fetch(`/delete/${valuefordel}`, {
      method: 'DELETE'
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to delete data');
          }
          return response.text();
      })
      .then(data => {
        console.log("datasent")
          console.log(valuefordel); 
      })
      .catch(error => {
          console.error('Error:', error); 
      });
  };
  const handleSearchSubmit = async () => {
 
    try {
      const response = await fetch(`/searchadmin?query=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setValue(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
  const handlemodify  = (userId) =>{
    setSelectedUserId(userId);
    history.push('/modifyuser');
  };
 
  
  

  return (
    <div className="p-4">
      <div className="sm:ml-64 shadow-md">
        <div className="px-8">
          <h1 className="text-lg pb-5">User</h1>
          <div className="flex flex-row ">
          <input type="text" name="pass" id="pass"value={query} onChange={e => setQuery(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Username' required />
            <button type="submit" onClick={handleSearchSubmit} className= "mx-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
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
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Username</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {value && value.map((user) => (
                <tr key={user.AID}>
                  <td className="p-3">{user.AFname}</td>
                  <td className="p-3">{user.ALname}</td>
                  <td className="p-3">{user.Aemail}</td>
                  <td className="p-3">{user.Username}</td>
                  <td className="p-3">{user.AID}</td>
                  <td className="flex">
                  <div className="pl-5" >
                    <Link to="/modifyuser"><TbEdit onClick={() => handlemodify(user.AID)} size={"22"}/></Link>
                    
                  </div>
                  <div className="pl-5" >
                    <form onSubmit={handleDelete} > 
                      <button  onClick={() => handleChange2(user.AID)}>
                    <FaTrash  size={"18"}/></button>
                     </form> 
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
