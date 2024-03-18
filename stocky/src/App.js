import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Blogdetails from './Blogdetails';
import Home from './Home';
import Navbarwithoutsearch from './Navbarwithoutsearch';
import Navbarwithsearch from './Navbarwithsearch';
import SearchHome from './SearchHome';
import SearchResultPage from './result_product';
import Aboutus from './Aboutus';
import ProductDetail from './ProductDetail';
import Login from './Login';
import productManage from './productManage';
import AddProduct from './AddProduct';



class App extends React.Component {
  render() {
    const title = "Welcome to login blog";
    const like = 4;
    const person = {name: 'jin', age: 12};
    
    
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
              <Navbarwithsearch/>
                <Home />
              </Route>
              
              <Route path="/productdetail">
                <Navbarwithsearch/>
                <ProductDetail />
              </Route>

              <Route path="/blogs/:id">
                <Blogdetails/>
              </Route>
              <Route path="/blogs/:id">
                <Blogdetails/>
              </Route>

              <Route path="/blogs/:id">
                <Blogdetails/>
              </Route>

              <Route path="/Searchhome">
                <Navbarwithoutsearch/>
                <SearchHome />
              </Route>
            
              <Route path="/ProductDetail">
                <ProductDetail/>
              </Route>

              <Route path="/aboutus">
              <Navbarwithsearch/>
                <Aboutus/>
              </Route>

              <Route path="/productMange">
                <productMange/>
              </Route>

              <Route path="/AddProduct">
                <AddProduct/>
              </Route>

              <Route path="/Login">
                <Navbarwithsearch/>
                <Login/>
              </Route>


              < Route path="/result_product">
                <Navbarwithoutsearch/>
                <SearchResultPage/>
              </Route>

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
