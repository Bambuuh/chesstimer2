import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

class Button extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}>Test</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button
