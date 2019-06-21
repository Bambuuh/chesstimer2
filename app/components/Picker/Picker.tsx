import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import styles from './styles'
import { baseline } from '../../theme'

type Data = any[] | any[][]

type OwnProps = {
  data: Data
}

type Props = OwnProps

type State = {
  leftIndex: number
  centerIndex: number
  rightIndex: number
}

const { width } = Dimensions.get('screen')

class Picker extends Component<Props, State> {
  state: State = {
    leftIndex: 0,
    centerIndex: 0,
    rightIndex: 0
  }

  isTriple = () =>
    Array.isArray(this.props.data[0]) && this.props.data.length === 3
  isDouble = () =>
    Array.isArray(this.props.data[0]) && this.props.data.length === 2
  isSingle = () => !Array.isArray(this.props.data[0])

  getWidth = () => {
    if (this.isTriple()) {
      return width / 3
    }
    return width / 2
  }

  keyExtractor = (item: any) => item.toString()

  renderLeftItem = ({ item, index }: { item: any; index: number }) => {
    const onPress = () => this.setState({ leftIndex: index })
    const extra = this.isDouble() ? { paddingRight: baseline } : {}
    const isHighlighted = index === this.state.leftIndex
    const highlightStyles = {
      ...styles.itemHightlight,
      ...styles.leftHighlight
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[extra, { width: this.getWidth() }]}>
          <View style={[styles.item, isHighlighted ? highlightStyles : {}]}>
            <Text style={[isHighlighted ? styles.itemTextHightLight : {}]}>
              {item}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderCenterItem = ({ item, index }: { item: any; index: number }) => {
    const onPress = () => this.setState({ centerIndex: index })
    const isHighlighted = index === this.state.centerIndex
    const highlightStyles = {
      ...styles.itemHightlight,
      ...styles.centerHighlight
    }
    return (
      <View style={{ width: this.getWidth(), paddingHorizontal: 8 }}>
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.item, isHighlighted ? highlightStyles : {}]}>
            <Text style={[isHighlighted ? styles.itemTextHightLight : {}]}>
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderRightItem = ({ item, index }: { item: any; index: number }) => {
    const onPress = () => this.setState({ rightIndex: index })
    const extra = this.isDouble() ? { paddingLeft: baseline } : {}
    const isHighlighted = index === this.state.rightIndex
    const highlightStyles = {
      ...styles.itemHightlight,
      ...styles.rightHighlight,
      width: this.getWidth()
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[extra, { width: this.getWidth() }]}>
          <View style={[styles.item, isHighlighted ? highlightStyles : {}]}>
            <Text style={[isHighlighted ? styles.itemTextHightLight : {}]}>
              {item}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderTriple() {
    const [first, second, third] = this.props.data
    return (
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.flatListContainerStyles}
          data={first}
          renderItem={this.renderLeftItem}
          extraData={this.state.leftIndex}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.flatListContainerStyles}
          data={second}
          renderItem={this.renderCenterItem}
          extraData={this.state.centerIndex}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.flatListContainerStyles}
          data={third}
          renderItem={this.renderRightItem}
          extraData={this.state.rightIndex}
        />
      </View>
    )
  }

  renderDouble() {
    const [first, second] = this.props.data
    return (
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={[styles.flatListContainerStyles]}
          data={first}
          renderItem={this.renderLeftItem}
          extraData={this.state.leftIndex}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={[styles.flatListContainerStyles]}
          data={second}
          renderItem={this.renderRightItem}
          extraData={this.state.rightIndex}
        />
      </View>
    )
  }

  renderSingle() {
    return (
      <View style={[styles.listContainer]}>
        <FlatList
          keyExtractor={this.keyExtractor}
          contentContainerStyle={[
            styles.flatListContainerStyles,
            { alignItems: 'center' }
          ]}
          data={this.props.data}
          renderItem={this.renderCenterItem}
          extraData={this.state.centerIndex}
        />
      </View>
    )
  }

  render() {
    if (this.isTriple()) {
      return <View style={styles.container}>{this.renderTriple()}</View>
    }
    if (this.isDouble()) {
      return <View style={styles.container}>{this.renderDouble()}</View>
    }
    return <View style={styles.container}>{this.renderSingle()}</View>
  }
}

export default Picker
