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
  const [navMenu, setNavMenu] = useState('')
const toggleMenu = () => {
  return navMenu === '' ? setNavMenu('show') : setNavMenu('')
}

  return (
    <div className="App">
      <div className="nav">
        {/* <Navbar bg="dark" variant="dark"> */}
        <NavLink exact activeClassName ='active' className="nav-toggle" to ='/home'><i className="fas fa-arrow-circle-left"></i></NavLink>
        <NavLink activeClassName='active' to = {{pathname :'https://github.com/m-aung/algovisualizer.land.git'} }target ="_blank"><i className="fab fa-github"></i></NavLink>
        <NavLink activeClassName='active' to ='/about' aria-label='about'><i className="fas fa-braille"></i></NavLink>
        <button className="nav-toggle nav-button" type="button" onClick={ toggleMenu } data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-gamepad"></i>
    </button>
        <ul className={`nav-toggle-collapse ${navMenu}`} id="navbarSupportedContent">
          <li><NavLink exact activeClassName ='active' to ='/sorting' onClick={toggleMenu}>Sorting-Game</NavLink></li>
          <li><NavLink exact activeClassName ='active' to ='/searching'onClick={toggleMenu} >Searching-Game</NavLink></li>
        </ul>  
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
    </div>
  );
}
export default App;