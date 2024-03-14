import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Blogdetails from './Blogdetails';
import Create from './Create';
import Home from './Home';
import Navbarwithsearch from './Navbarwithsearch';
import SearchHome from './SearchHome';
import ProductDetail from './ProductDetail';
import SearchResultPage from './result_product';
class App extends React.Component {
  render() {
    const title = "Welcome to login blog";
    const like = 4;
    const person = {name: 'jin', age: 12};

    return (
      <Router>
        <div className="App">
          <Navbarwithsearch />
          <div className="content">
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/create">
                <Create />
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
                <SearchHome/>
              </Route>
            
              <Route path="/ProductDetail">
                <ProductDetail/>
              </Route>

              <Route path="/result_product">
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
