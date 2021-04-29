import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface CustomTabProps {}

const CustomTab: React.FC<CustomTabProps> = () => {
  const rotate = useSharedValue(0)

  const startAnimation = () => {
    if (rotate.value === 0) {
      rotate.value = withTiming(1, { duration: 500 })
    } else {
      rotate.value = withTiming(0, { duration: 500 })
    }
  }

  const style = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${interpolate(rotate.value, [0, 1], [0, 225])}deg` },
    ],
  }))

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View
        style={{
          position: 'absolute',
          borderRadius: 5,
          width: 54,
          height: 54,
          backgroundColor: '#333',
          top: 0,
          left: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ translateX: -54 / 2 }, { translateY: -54 / 2 + 8 }],
          elevation: 10,
        }}
      >
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={style}>
            <FontAwesome name="plus" size={26} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CustomTab
