import React from 'react'
import ReactDOM from 'react-dom'
import { createStroe } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './components/App'
import registerSeviceWorker from './registerSeviceWorker'

const store = createStroe(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerSeviceWorker()
