import { Link } from 'react-router-dom';

const Navbarwithsearch = () => {
    return ( 
        <nav className="navbar">
            <h1>Shoppingweb</h1>
            <div className="links" style={{
                    color: "black", backgroundColor: "green",borderRadius: '15px 50px 30px 5px'
                }}>
                <Link to="/">About us</Link>
                <Link to="/create" style={{
                    color: "white", backgroundColor: "green",borderRadius: '15px 50px 30px 5px'
                }}>blog</Link>
                <a href="/create">cart</a>
            </div>
        </nav>
     );
}
 
export default Navbarwithsearch;