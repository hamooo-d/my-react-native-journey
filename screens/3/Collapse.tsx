import { Ionicons } from '@expo/vector-icons'
import React, { createContext, useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { clamp, mix } from 'react-native-redash'
import { Context } from '../1/Gesture'

interface CollapseProps {}

const START_HEIGHT = 40
const MAX_HEIGHT = 0

const Collapse: React.FC<CollapseProps> = () => {
  const height = useSharedValue(START_HEIGHT)
  const [toggled, setToggled] = useState(0)
  const isToggled = useSharedValue(false)

  useEffect(() => {
    if (height.value == 0) {
      height.value = withSpring(200)
    } else {
      height.value = withTiming(0)
    }
  }, [height, toggled, isToggled])

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: height.value,
    }
  })

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (e, ctx) => {
      ctx.offsetY = height.value
    },

    onActive: (e, ctx) => {
      height.value = clamp(e.translationY + ctx.offsetY, 0, 200)
    },
    onEnd: (e, ctx) => {
      if (e.translationY + ctx.offsetY > 100) {
        height.value = withSpring(200)
        console.log(height.value)
      } else {
        height.value = withTiming(0)
      }
    },
  })

  return (
    <View>
      <Animated.View style={style}>
        <Text style={{ color: '#fff' }}>جليدي يابغل</Text>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => setToggled((prev) => (prev === 200 ? 0 : 200))}
          >
            <Ionicons name="chevron-down" color="#555" size={24} />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
})

export default Collapse
