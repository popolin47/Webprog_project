import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Blogdetails from './Blogdetails';
import Home from './Home';
import Navbarwithoutsearch from './Navbarwithoutsearch';
import Navbarwithsearch from './Navbarwithsearch';
import SearchHome from './SearchHome';
import Aboutus from './Aboutus';
import ProductDetail from './ProductDetail';
import Sidebar from './Sidebar';
import Aboutus from './Aboutus';
import Productmanage from './productManage';
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
              <Route path="/productmanage">
              <Sidebar/>
                <Productmanage/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
