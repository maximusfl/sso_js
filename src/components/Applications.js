import React from 'react'

export const Applications = ({applications}) => {
  return (
    <ul class="list-group">
    {applications.map(application => (
      <li
        class="list-group-item application"
        key={application.id}
        >
        {application.url}

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
