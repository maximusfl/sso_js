import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (

<nav className ="navbar navbar-light bg-light navbar-expand-lg ">

  <ul className="navbar-nav">
    <li className="nav-item">
        <NavLink className="nav-link"
            to='/'
            exact
            >
            <h3>Home</h3>
          </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link"
            to='addapp'
            exact
            >
            <h3>Add application</h3>
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link"
            to='allApps'
            exact
            >
            <h3>Applications</h3>
        </NavLink>
    </li>
  </ul>
</nav>


)
