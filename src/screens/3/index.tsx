import React from 'react'
import { View, StyleSheet } from 'react-native'
import Collapse from './Collapse'

interface CollapseGestureProps {}
const CollapseGesture: React.FC<CollapseGestureProps> = () => {
  return (
    <View style={styles.container}>
      <Collapse />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default CollapseGesture
