import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Animated from 'react-native-reanimated'
import Mountain from '../../components/svg/Mountain'
import Pattern from '../../components/svg/Pattern'
import Pattern2 from '../../components/svg/Pattern2'

interface TransitionsProps {}

const Transitions: React.FC<TransitionsProps> = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Mountain />
          <Pattern />
          <Pattern2 />
        </Animated.View>
      </View>
      <Button title="ok" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default Transitions
