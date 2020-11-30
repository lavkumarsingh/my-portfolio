import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css'

// COMPONENTS
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'

function App() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    toggle ? setToggle(false) : setToggle(true)
  }

  function backdrop() {
    setToggle(false)
  }

  return (
    <div className="App">  
      
      {/* ICON */}
      <div className="icon" onClick={ handleClick }>
        { 
          toggle ? <CloseIcon style={{color: "#fff", fontSize: 30}} />
                 : <MenuIcon style={{color: "#fff", fontSize: 30}} />
        } 
      </div>

      <Router>
      
        <div className="view">
          {/* SIDENAV */}
          <div className={ `side__nav ${toggle ? 'nav__active' : ''}` }> 
            
            <div className="logo">
            <img src="/logo.gif" alt="" />
            </div>

            <div className="nav_cotainer">
              <ul>
                <div className="nav__routes">
                <li>
                  <NavLink exact to="/" activeClassName="nav__item--active" className="nav__items active" onClick={ backdrop }>HOME</NavLink>
                </li>
                <li>
                  <NavLink exact to="/about" activeClassName="nav__item--active"className="nav__items" onClick={ backdrop }>ABOUT</NavLink>
                </li>
                <li>
                  <NavLink exact to="/projects" activeClassName="nav__item--active" className="nav__items" onClick={ backdrop }>PROJECTS</NavLink>
                </li>
                <li>
                  <NavLink exact to="/contacts" activeClassName="nav__item--active" className="nav__items" onClick={ backdrop }>CONTACTS</NavLink>
                </li>
                </div>
              </ul>
            </div>

            <div className="social__handle">
            <div className="social">
              <div className="social_icons"><a href="https://github.com/lavkumarsingh" target="_blank" rel="noreferrer noopener"><img className="github" src="/github.png" alt=""/></a></div>
              <div className="social_icons"><a href="https://www.linkedin.com/in/lav-singh-3110/" target="_blank" rel="noreferrer noopener"><img className="linkedin" src="/linkedin.png" alt=""/></a></div>
              <div className="social_icons"><a href="https://www.upwork.com/freelancers/~0121b1a8e254b42252?viewMode=1" target="_blank" rel="noreferrer noopener"><img className="upwork" src="/upwork.png" alt=""/></a></div>
            </div>
            </div>   
          </div>

          {/* CONTENT AREA */}
          <div className="container" onClick={ backdrop } >
            <div className="main__container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                <Route exact path="/contacts">
                  <Contacts />
                </Route>
              </Switch>
            </div>
          </div>
        </div>

      </Router>

    </div>
  );
}

export default App;
