import React from 'react'

export const SingleApp = ({
  match: {
    params: { applicationUrl },
  },
}) => {
  return (
    <div>
      <h1>{applicationUrl}</h1>

      <button type="button" className="btn btn-outline-danger btn-sm">
        &times;
      </button>
    </div>
  )
}
