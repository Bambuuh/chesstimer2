import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native'
import { baseline } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  } as ViewStyle,
  listContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  } as ViewStyle,
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: baseline * 3
    // marginHorizontal: baseline
  } as ViewStyle,
  itemTextHightLight: {
    fontSize: 16,
    fontWeight: 'bold'
  } as TextStyle,
  itemHightlight: {
    backgroundColor: 'red',
    borderRadius: 9999
  } as ViewStyle,
  rightHighlight: {
    marginRight: 0,
    paddingRight: baseline,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  } as ViewStyle,
  centerHighlight: {} as ViewStyle,
  leftHighlight: {
    marginLeft: 0,
    paddingLeft: baseline,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  } as ViewStyle,
  flatListContainerStyles: {
    flexGrow: 1,
    justifyContent: 'center'
  }
})
