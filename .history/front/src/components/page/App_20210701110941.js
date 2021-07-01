import React from 'react'
import '../../css/index.css'
import {BrowserRouter} from 'react-router-dom'
import Url from '../../URL/url'

function App(){
  return(
    <BrowserRouter>
      <Url/>
    </BrowserRouter>
  )
}

export default App;
