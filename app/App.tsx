import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import AppContainer from './navigation'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 }
})

export default App
