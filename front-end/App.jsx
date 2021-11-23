import React, {useState, useEffect , useRef, } from 'react';
import { Switch, Route, NavLink, useHistory} from 'react-router-dom';
// import { Dropdown} from 'react-bootstrap';
import  './App.css';

import Home from './components/Home';
import About from './components/About';
import SearchBoard from './components/Search-board';
import SortBoard from './components/Sort-board';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
//   const [authLoading, setAuthLoading] = useState(true);
// useRouteMatch()
  let history = useHistory()

  const [navMenu, setNavMenu] = useState('')
  const [visitedPage, setVisitedPage] = useState('/')

  const toggleMenu = () => {
    return navMenu === '' ? setNavMenu('show') : setNavMenu('')
  }

  const storeInSessionStorage = (key,value) => {
    sessionStorage.setItem(key,value)
  }
  
  return (
    <div className="App">
      <div className="nav">
        {/* <Navbar bg="dark" variant="dark"> */}
        <NavLink
        exact activeClassName ='active'
        className="nav-toggle" to ='/home'
        onClick={()=>{history.push('/home')}}>
          <i className="fas fa-arrow-circle-left"></i>
        </NavLink>
        <NavLink 
        activeClassName='active' 
        to = {{pathname :'https://github.com/m-aung/algovisualizer.land.git'}}
        target ="_blank">
          <i className="fab fa-github"></i>
        </NavLink>
        <NavLink 
        activeClassName='active' 
        to ='/about' 
        aria-label='about'>
          <i className="fas fa-braille"></i>
        </NavLink>
        <button 
        className="nav-toggle nav-button" 
        type="button" 
        onClick={toggleMenu} 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <i className="fas fa-gamepad"></i>
        </button>
        <ul className={`nav-toggle-collapse ${navMenu}`} id="navbarSupportedContent">
          <li>
            <NavLink 
            exact activeClassName ='active' 
            to ='/sorting' 
            onClick={()=>{toggleMenu(); history.push('/sorting')}}>
              Sorting-Game
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact activeClassName ='active' to ='/searching'onClick={()=>{toggleMenu(); history.push('/searching')}} >Searching-Game</NavLink></li> */}
        </ul>  
      </div>
        <div className="content" style={{display:'flex', justifyContent:'center', position:'relative'}}>
          <Switch>
            <Route exact path ='/' component = {SortBoard} />
            <Route exact path ='/searching' component = {SearchBoard} />
            <Route exact path ='/sorting' component = {SortBoard} />
            <Route exact path ='/about' component = {About} />
            <Route path ='*' component={NotFoundPage}/>
          </Switch>
        </div>
    </div>
  );
}
export default App;