import { createStackNavigator, createAppContainer } from 'react-navigation'
import { NavigationScreenOptions } from 'react-navigation'

import { SCREENS } from './screenStrings'
import Mode from '../screens/Mode'
import { backgroundColor } from '../theme'

const defaultNavigationOptions: NavigationScreenOptions = {
  headerStyle: {
    backgroundColor,
    borderBottomWidth: 0
  }
}

const MainNavigation = createStackNavigator(
  {
    [SCREENS.MODE]: Mode
  },
  {
    cardStyle: {
      flex: 1,
      backgroundColor: 'white'
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0
      }
    }
  }
)

export default createAppContainer(MainNavigation)
