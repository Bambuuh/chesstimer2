import React, { Component } from 'react'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './redux/configureStore'

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default AppProvider
