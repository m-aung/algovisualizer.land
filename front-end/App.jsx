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
        <NavLink exact activeClassName ='active' className="navbar-toggler" to ='/'>Home</NavLink>
        <NavLink activeClassName='active' to = {{pathname :'https://github.com/m-aung/algovisualizer.land.git'} }target ="blank">github</NavLink>
        <NavLink exact activeClassName ='active' to ='/sorting'>Sorting-Game</NavLink>
        <NavLink exact activeClassName ='active' to ='/searching'>Searching-Game</NavLink>
        <NavLink activeClassName='active' to ='/about'>About</NavLink>
        {/* </Navbar> */}
      </div>
        <div className="content" style={{display:'flex', justifyContent:'center'}}>
          {/* <BrowserRouter> */}
          <Switch>
            <Route exact path ='/' component = {Home} />
            <Route path ='/searching' component = {SearchBoard} />
            <Route path ='/sorting' component = {SortBoard} />
            <Route path ='/about' component = {About} />
            {/* <Route component={Home} /> */}
          </Switch>
          {/* </BrowserRouter> */}
        </div>
        <footer>
            <center>
            &#169; Copyright 2021 Myo Aung 
            </center>
        </footer>
    </div>
  );
}
export default App;