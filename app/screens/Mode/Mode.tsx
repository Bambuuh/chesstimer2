import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationScreenProps } from 'react-navigation'

import { RootState } from '../../redux'
import styles from './styles'
import Picker from '../../components/Picker'

type PropsFromState = ReturnType<typeof mapStateToProps>

type Props = PropsFromState & NavigationScreenProps

class Mode extends Component<Props> {
  modes = ['increment', 'blitz', ' hourglass', 'regular']
  modes1 = ['increment', 'blitz', ' hourglass', 'regular']
  modes2 = ['increment', 'blitz', ' hourglass', 'regular']

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Picker data={this.modes} /> */}
        {/* <Picker data={[this.modes, this.modes1]} /> */}
        <Picker data={[this.modes, this.modes1, this.modes2]} />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({ gameMode }: RootState) => ({ gameMode })

export default connect(mapStateToProps)(Mode)
