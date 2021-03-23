import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { mix } from 'react-native-redash'

interface AnimatedCardProps {
  card: React.FC
  index: number
  transition: any
}

const { width } = Dimensions.get('window')
const origin = -(width / 2 - 8 * 2)

const AnimatedCard: React.FC<AnimatedCardProps> = ({ card: Card, index, transition }) => {
  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, ((index - 1) * Math.PI) / 6)
    return {
      transform: [{ translateX: origin }, { rotate: `${rotate}rad` }, { translateX: -origin }],
    }
  })
  return (
    <Animated.View style={[styles.overlay, style]}>
      <Card />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AnimatedCard
