import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { buttonColor, buttonColorOpac } from '../../theme'

export default StyleSheet.create({
  container: {
    backgroundColor: buttonColorOpac,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 9999
  } as ViewStyle,
  text: {
    color: buttonColor,
    fontWeight: 'bold',
    fontSize: 20
  } as TextStyle
})
