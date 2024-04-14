import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
const Searchresultadmin = () => {
    const location = useLocation();
    const data = location.results;
    console.log(data);


  return (
    <div className="p-4">
        <div className="p-4 sm:ml-64 shadow-md ">
     
     <div className="px-8">
       <h1 className="text-3xl pt-12 ">Search Admin Result</h1>
       </div>
       
   
 </div>
      <div className="sm:ml-64 shadow-md pt-8">
        <div className="px-8">
          
          <div className="flex flex-row ">
            <Link to="/searchuser">
              <button className="bg-gray-400 hover:bg-red-700 text-black py-2 px-4 ">
                Clear filter
              </button>
            </Link> 
            <div className="ml-5">
              {data.length> 1 ? (
                <h1>Browse {data.length} users</h1>
              ) : (
                <h1>Browse {data.length} user</h1>
              )}
            </div>
            <br />
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
                {data && data.map((user) => (
                  <tr key={user.AID}>
                    <td className="p-3">{user.AFname}</td>
                    <td className="p-3">{user.ALname}</td>
                    <td className="p-3">{user.Aemail}</td>
                    <td className="p-3">{user.Username}</td>
                    <td className="p-3">{user.AID}</td>
                    <td className="flex"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Link to="/searchuser" className ="flex justify-end mt-4  pr-12 pb-8">
          <button    className="justify-end mt-4  ml-5 bg-slate-950 hover:bg-slate-700 text-white py-2 px-4 rounded items-right ">
          Back
          </button></Link>
      </div>
    </div>
  );
};

export default Searchresultadmin;
