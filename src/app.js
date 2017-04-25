import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    )
  }
}

export default App
