import React from 'react'
import SingleUser from '../components/user/SingleUser'

export default function SingleUserPage(props){
    console.log("hello from singleuserPage")

    return(
        <SingleUser {...props}/>
    )


}