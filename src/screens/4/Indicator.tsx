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

const scaleValues = {
  start: 1,
  max: 4,
}

const bottomValues = {
  start: 5,
  end: 24.5,
}

const Indicator: React.FC<IndicatorProps> = ({ index }) => {
  const translateX = useSharedValue(0)
  const scale = useSharedValue(scaleValues.start)
  const bottom = useSharedValue(bottomValues.start)

  useEffect(() => {
    bottom.value = withDelay(100, withSpring(bottomValues.start))
    scale.value = withSpring(scaleValues.start)
    translateX.value = withDelay(
      300,
      withTiming(index >= 2 ? TAB_WIDTH * (index + 1) : TAB_WIDTH * index, {}, (isFinished) => {
        if (isFinished) {
          scale.value = withSpring(scaleValues.max)
          bottom.value = withTiming(bottomValues.end)
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
    bottom: 25,
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#e9e9e9',
  },
})

export default Indicator
