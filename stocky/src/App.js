import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Blogdetails from './Blogdetails';
import Create from './Create';
import Home from './Home';
import Navbarwithsearch from './Navbarwithsearch';
import Navbarwithoutsearch from './Navbarwithoutsearch';
import SearchHome from './SearchHome';
import ProductDetail from './ProductDetail';
import { Sidebar } from 'react-pro-sidebar';
import Aboutus from './Aboutus';
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
                <Aboutus/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
