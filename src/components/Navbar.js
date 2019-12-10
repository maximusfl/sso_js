import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          <h5>Home</h5>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/addapp" exact>
          <h5>Add application</h5>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/allApps" exact>
          <h5>Applications</h5>
        </NavLink>
      </li>
    </ul>
  </nav>
)
