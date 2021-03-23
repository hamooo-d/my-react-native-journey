import React, { FC, useState } from 'react'
import { StyleSheet, View, LayoutRectangle } from 'react-native'
import PanGesture from './Gesture'

const GestureContainer: FC = () => {
  const [container, setContainer] = useState<null | LayoutRectangle>(null)

  return (
    <View style={styles.container} onLayout={({ nativeEvent: { layout } }) => setContainer(layout)}>
      {container && <PanGesture {...container} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default GestureContainer
