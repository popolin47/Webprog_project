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
import Sidebar from './Sidebar';
import ProductManage from './ProductManage';
import AddProduct from './AddProduct';
import Login from './Login';
import Usermanage from './Usermanage';
import ModifyProduct from './ModifyProduct';
import ForgotPassword from './ForgotPassword';
import ProductList from './ProductList';

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
              <Route path="/usermanage">
              <Sidebar/>
                <Usermanage/>
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

              <Route path="/result_product">
                <Navbarwithoutsearch/>
                <SearchResultPage/>
              </Route>
            
              <Route path="/ProductDetail">
                <ProductDetail/>
              </Route>

              <Route path="/aboutus">
                <Navbarwithsearch/>
                <Aboutus/>
              </Route>
              
              <Route path="/ProductManage">
                <Sidebar/>
                <ProductManage/>
              </Route>
              <Route path="/login">
              <Navbarwithoutsearch/>
                <Login/>
              
              </Route>
              <Route path='/AddProduct'>
                <Sidebar/>
                <AddProduct/>
              </Route>

              <Route path='/ModifyProduct'>
                <ModifyProduct/>
              </Route>
              
              <Route path="/result_product">
                <SearchResultPage/>
              </Route>

              <Route path="/ForgotPassword">
                <Navbarwithsearch/>
                <ForgotPassword/>
              </Route>

              <Route path="/ProductList">
                <Navbarwithsearch/>
                <ProductList/>
              </Route>

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
