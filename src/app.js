import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyARuVX-nGX2VkCgNwRcEmmHqZEgnySg5Io',
      authDomain: 'manager-fa9d4.firebaseapp.com',
      databaseURL: 'https://manager-fa9d4.firebaseio.com',
      projectId: 'manager-fa9d4',
      storageBucket: 'manager-fa9d4.appspot.com',
      messagingSenderId: '211575276879'
    }

    firebase.initializeApp(config)
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
