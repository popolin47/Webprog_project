import { Link } from 'react-router-dom';
import logo from './asset/img/logo.png';
import React, {useState} from 'react';
import { GoSearch } from "react-icons/go";
import './Navbarwithsearch.css';
const Navbarwithsearch = () => {
    return ( 
        <nav className="navbar"style={{
            color: "black", backgroundColor: "black", 
    }}>
    <img style={{ width: 80, height: 80 }} src={logo} alt="logo"/>
    <Link to="/searchHome">
    <div className= "whitebox">
        
        <div className="box">
            <div className="searchcicon">
                <GoSearch />
            </div>
        </div>
    </div></Link>
    <div className="links" >
        <Link className="button" to="/aboutus" style={{
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