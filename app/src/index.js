import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={App}>
      </Route>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#container')
)

// implement react js client here

if(module.hot) {
  module.hot.accept();
}
