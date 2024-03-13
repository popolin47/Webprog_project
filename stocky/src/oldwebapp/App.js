//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import Blogdetails from './Blogdetails';
function App() {
  const title = "Welcome to login blog";
  const like = 4;
  const person = {name: 'jin', age: 12}
  return (//convert to javascript it will be class
    <Router>
      <div className="App">  <Navbar></Navbar>
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
//edit this page it will change autometically
// <p> paragraph tag
// react will convert everything to string
// can input array such as [1,2,3] it will ne 123

//<a href="link">name</a>
export default App;
