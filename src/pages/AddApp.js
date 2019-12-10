import React from 'react'
import { Form } from '../components/Form'
import { InfoTab } from '../components/InfoTab'

export const AddApp = () => {
  return (
    <div>
      <Form />

      <div className="infoTab">
        <InfoTab />
      </div>
    </div>
  )
}
