import React from 'react'
import {Route,Switch} from 'react-router-dom'
import home from '../components/page/home'
import p404 from '../components/page/p404'

function URL(){
    return(
        <Switch>
            <Route path='/' exact component={home}/>


            
            <Route component={p404}/>
        </Switch>
    )
}

export default URL 