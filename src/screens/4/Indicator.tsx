import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { width } from '../../constants'

interface IndicatorProps {
  index: number
}

const TAB_WIDTH = (width - 40) / 5

const Indicator: React.FC<IndicatorProps> = ({ index }) => {
  const translateX = useSharedValue(0)
  const scale = useSharedValue(1)
  const bottom = useSharedValue(5)

  useEffect(() => {
    bottom.value = withDelay(100, withSpring(5))
    scale.value = withSpring(1)
    translateX.value = withDelay(
      300,
      withTiming(index >= 2 ? TAB_WIDTH * (index + 1) : TAB_WIDTH * index, {}, (isFinished) => {
        if (isFinished) {
          scale.value = withSpring(4)
          bottom.value = withTiming(26)
        }
      })
    )
  }, [index, translateX.value])

  const style = useAnimatedStyle(() => ({
    bottom: bottom.value,
    transform: [{ translateX: translateX.value }, { scale: scale.value }],
  }))

  return (
    <Animated.View style={[styles.indicatorContainer, style]}>
      <View style={styles.indicator} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    width: TAB_WIDTH,
    height: 10,
    bottom: 27,
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#555',
  },
})

export default Indicator
