import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  if (props.visible) {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <h5>Home</h5>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/application" exact>
              <h5>Applications</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user" exact>
              <h5>Users</h5>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  } else return null
}
