import React, {useState, useEffect} from 'react';
import { Switch, Route, NavLink, BrowserRouter, useRouteMatch} from 'react-router-dom';
// import { Dropdown} from 'react-bootstrap';
import  './App.css';

import Home from './components/Home';
import About from './components/About';
import SearchBoard from './components/Search-board';
import SortBoard from './components/Sort-board';

const App = () => {
//   const [authLoading, setAuthLoading] = useState(true);
// useRouteMatch()

  return (
    <div className="App">
      <div className="header ">
        {/* <Navbar bg="dark" variant="dark"> */}
        <NavLink exact activeClassName ='active' className="navbar-toggler" to ='/home'><i className="fas fa-arrow-circle-left"></i></NavLink>
        <NavLink activeClassName='active' to = {{pathname :'https://github.com/m-aung/algovisualizer.land.git'} }target ="_blank"><i className="fab fa-github"></i></NavLink>
        <NavLink exact activeClassName ='active' to ='/sorting'>Sorting-Game</NavLink>
        <NavLink exact activeClassName ='active' to ='/searching'>Searching-Game</NavLink>
        <NavLink activeClassName='active' to ='/about'>About</NavLink>
        {/* </Navbar> */}
      </div>
        <div className="content" style={{display:'flex', justifyContent:'center'}}>
          {/* <BrowserRouter> */}
          <Switch>
            <Route exact path ='/home' component = {Home} />
            <Route path ='/searching' component = {SearchBoard} />
            <Route path ='/sorting' component = {SortBoard} />
            <Route path ='/about' component = {About} />
            <Route path = '/' component={Home}/>
          </Switch>
          {/* </BrowserRouter> */}
        </div>
        <footer>
            <center>
            MIT Licensed | Copyright &#169; 2021 Myo Aung. All Rights Reserved.
            </center>
        </footer>
    </div>
  );
}
export default App;