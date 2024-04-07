import { Sidebar } from "react-pro-sidebar";

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { TbEdit } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";

const Modifyuser = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [name,setName] = useState('');
  const handleChange = (newData) => {
      let name = newData.target.name;
      setUser(newData);
      setName(name);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`/modifyuser/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        if (!response.ok) {
          throw new Error('Failed to update user');
        }
        console.log('User updated successfully');
        history.push('/usermanage');
      } catch (error) {
        console.error('Error updating user:', error);
        // Handle error
      }
    };
  return (
    <div>
    <div className="p-4 sm:ml-64 shadow-md ">
     
        <div className="px-8">
          <h1 className="text-3xl pt-12 ">Modify Admin</h1>
          </div>
          
      
    </div>
    <div className="p-72 sm:ml-64 pt-12 items-center"action="/form-useradd" method="GET"> 
   
        <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First name</label>
        <form className="flex"> <input type="text" name="Afname" id="first_name" onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 "  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
      
        <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Last name</label>
        <form className="flex"> <input type="text" name="Alname" id="first_name"onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 "  required />
        <button  type="submit" value="Submit" onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
        <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Phone number</label>
        <form className="flex"> <input type="text" name="PhoneNo" id="first_name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 "  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
        <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
        <form className="flex"> <input type="text" name="Aemail" id="first_name"onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 "  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
         <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Username</label>
         <form className="flex"> <input type="text" name="Username" id="first_name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 "  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
        <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password</label>
        <form className="flex"> <input type="text" name="Password" id="first_name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 "  required />
        <button  type="submit" value="Submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded pl-4">
          change
          </button>
        </form>
        <div className="flex justify-end mt-4   pb-8">
        <Link to="/usermanage"className="flex justify-end mt-4  pr-4 pb-8">
          <button className="bg-black hover:bg-brown text-white py-2 px-4 rounded">
            back
          </button>
        </Link>
      <Link to="/usermanage"className="flex justify-end mt-4   pb-8">
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
          confirm
          </button>
        </Link>
      </div>
      </div>
      
    </div>
  )
  };

export default Modifyuser;
