import React from 'react'
import '../../css/index.css'
import {BrowserRouter} from 'react-router-dom'
import Url from '../../URL/url'
import store from '../../redux/store'
import {Provider} from 'react-redux'

function App(){
  return(
    <Provider store={store}>
      <BrowserRouter>
      <Url/>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
