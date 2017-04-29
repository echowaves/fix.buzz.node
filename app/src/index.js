import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import Signin from './components/auth/signin'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
        <Route path="/signin" component={Signin} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
)

// implement react js client here

if(module.hot) {
  module.hot.accept();
}
