import React from 'react'
import {NavLink} from 'react-router-dom'

export const Applications = ({applications}) => {
  return (
    <ul class="list-group">
    {applications.map(application => (
      <li
        class="list-group-item application"
        key={application.id}
        >


        <NavLink className="nav-link"
            to={{
              pathname: `/app/${application.url}`,
              state: {
                applicationUrl: application.url
              }
            }}
            exact
            >
            <h3>{application.url}</h3>
        </NavLink>





        <button
         type="button"
         className="btn btn-outline-danger btn-sm"
         >
         &times;
          </button>
      </li>
    ))}


  </ul>
  )
}
