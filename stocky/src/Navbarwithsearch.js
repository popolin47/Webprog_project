import { Link } from 'react-router-dom';
import logo from './asset/img/logo.png';
import React, {useState} from 'react';
import { GoSearch } from "react-icons/go";
import './Navbarwithsearch.css';
const Navbarwithsearch = () => {
    return ( 
        <div className="navbar"><Link to="/">
        <img style={{ width: 80, height: 80 }} src={logo} alt="logo"/>
    </Link>
    <Link to="/searchHome">
    <div className= "whitebox">
        <div className="box">
            <div className="searchcicon">
                <GoSearch />
            </div>
        </div>
    </div></Link>
    <div className="links" >
        <Link className="button bg-pink" to="/aboutus" style={{
            color: "white", backgroundColor: "red"
        }}>About us</Link>
        
        <Link className="button" to="/login" style={{
            color: "white", backgroundColor: "red"
        }}>Login</Link>
       
 </div>
</div>
     );
}
 
export default Navbarwithsearch;