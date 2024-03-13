import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';
import Navbarwithsearch from './Navbarwithsearch';

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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
