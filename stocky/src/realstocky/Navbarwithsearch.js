import { Link } from 'react-router-dom';

const Navbarwithsearch = () => {
    return ( 
        <nav className="navbar">
            <h1>Shoppingweb</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white", backgroundColor: "green",borderRadius: '15px 50px 30px 5px'
                }}>blog</Link>
                <a href="/create">cart</a>
            </div>
        </nav>
     );
}
 
export default Navbarwithsearch;