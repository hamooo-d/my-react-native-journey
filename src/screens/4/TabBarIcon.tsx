import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
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

const TabBarIcon: React.FC<TabBarIconProps> = ({
  focused,
  color,
  ...props
}) => {
  const opacityFill = useSharedValue(0)
  const opacityOutline = useSharedValue(1)

  useEffect(() => {
    if (focused) {
      opacityFill.value = withDelay(500, withTiming(1))
      opacityOutline.value = withDelay(500, withTiming(0))
    } else {
      opacityFill.value = withDelay(100, withTiming(0))
      opacityOutline.value = withDelay(100, withTiming(1))
    }
  }, [focused, opacityFill.value])

  const fill = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: 18 }],
      opacity: opacityFill.value,
    }
  })
  const outline = useAnimatedStyle(() => {
    return {
      opacity: opacityOutline.value,
    }
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', overflow: 'hidden' }}>
      {/* Fill */}
      <Animated.View style={[StyleSheet.absoluteFill, fill]}>
        <Ionicons {...(props as any)} color={color} size={24} />
      </Animated.View>
      {/* Outline */}
      <Animated.View style={outline}>
        <Ionicons
          {...(props as any)}
          color="#2c2c2c"
          name={`${props.name}-outline`}
        />
      </Animated.View>
    </View>
  )
}

export default TabBarIcon
