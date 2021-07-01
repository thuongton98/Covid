import React from 'react'
import {Route,Switch} from 'react-router-dom'
import home from '../components/page/home'

function URL(){
    return(
        <Route path='/' exact component={home}/>
    )
}

export default URL 