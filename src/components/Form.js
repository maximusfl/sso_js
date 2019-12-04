import React, {useState, useContext} from 'react'
import {AlertContext} from '../context/alert/alertContext'

export const Form = () => {
const [value, setValue] = useState('')
const alert = useContext(AlertContext)

const submitHandler = event => {
    event.preventDefault()

    if(value.trim()) {
      //...
      alert.show('Application has been added', 'success')
      setValue('')
    }else {
      alert.show('aap\'s url can\'t be empty ')
    }



}

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
        type="text"
        className="form-control"
        placeholder="enter new app's url here"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
