import React, {Fragment} from 'react'

import {Applications} from '../components/Applications'

export const AllApps = () => {
  const applications = new Array(6)
  .fill('')
  .map((_, i) => ({id: i, url:"url "+ (i+1)}));

  return (
    <Fragment>
      <Applications applications={applications}/>
    </Fragment>
  )
}
