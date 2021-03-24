import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

interface TabBarIconProps {
  name: string
  size: number
  color: string
  focused: boolean
}

const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesome)

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, color, ...props }) => {
  const x = useSharedValue(0)

  useEffect(() => {
    if (focused) {
      x.value = withDelay(500, withTiming(1))
    } else {
      x.value = withDelay(100, withTiming(0))
    }
  }, [focused, x.value])

  const y = useDerivedValue(() => interpolateColor(x.value, [0, 1], [color, '#333']), [focused])

  const style = useAnimatedStyle(() => {
    return {
      color: interpolateColor(x.value, [0, 1], ['#333', color]),
    }
  })

  return <AnimatedFontAwesome {...props} color={undefined} style={style} />
}

const styles = StyleSheet.create({})

export default TabBarIcon
