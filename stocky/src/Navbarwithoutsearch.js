import { Link } from 'react-router-dom';
import logo from './asset/img/logo.png';
import React, {useState} from 'react';
import { GoSearch } from "react-icons/go";
import './Navbarwithoutsearch.css';
const Navbarwithsearch = () => {
    return ( 
        <nav className="navbar"style={{
            color: "black", backgroundColor: "black", 
    }}><Link to="/">
        <img style={{ width: 80, height: 80 }} src={logo} alt="logo"/>
    </Link>
    
    
    <div className="links" >
        <Link className="button" to="/" style={{
            color: "white", backgroundColor: "red"
        }}>About us</Link>
        <Link className="button" to="/" style={{
            color: "white", backgroundColor: "red"
        }}>Login</Link>
       
 </div>
</nav>
     );
}
 
export default Navbarwithsearch;