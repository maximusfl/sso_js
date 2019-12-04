import React, {Fragment} from 'react'




export const SingleAppPage = (props) => {

console.log(props)

  return (
    <Fragment>
<div>{props.location.state.applicationUrl}</div>
    </Fragment>
  )
}
