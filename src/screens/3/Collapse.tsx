import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { clamp } from 'react-native-redash'
import { CARD_WIDTH } from '../../constants'
import { Context } from '../1/Gesture'

const START_HEIGHT = 20
const MAX_HEIGHT = 200

const Collapse: React.FC = () => {
  const height = useSharedValue(START_HEIGHT)
  const opacity = useSharedValue(0)

  const startAnimation = useCallback(() => {
    if (height.value == START_HEIGHT) {
      height.value = withSpring(MAX_HEIGHT)
      opacity.value = withTiming(1)
    } else {
      height.value = withTiming(START_HEIGHT)
      opacity.value = withTiming(0)
    }
  }, [height])

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (_, ctx) => {
      ctx.offsetY = height.value
    },

    onActive: (e, ctx) => {
      const clamped = clamp(e.translationY + ctx.offsetY, 0, MAX_HEIGHT)
      height.value = clamp(e.translationY + ctx.offsetY, START_HEIGHT, MAX_HEIGHT)
      opacity.value = clamped / (MAX_HEIGHT - START_HEIGHT)
    },
    onEnd: (e, ctx) => {
      if (e.translationY + ctx.offsetY > MAX_HEIGHT / 2) {
        height.value = withSpring(MAX_HEIGHT)
        opacity.value = withTiming(1)
      } else {
        height.value = withTiming(START_HEIGHT)
        opacity.value = withTiming(0)
      }
    },
  })

  const style = useAnimatedStyle(() => {
    return {
      width: CARD_WIDTH,
      height: height.value,
      backgroundColor: '#333',
      overflow: 'hidden',
    }
  })

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  }))

  return (
    <View>
      <Animated.View style={style}>
        <LinearGradient
          colors={['#fbd07c', '#f68080']}
          start={[0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff' }}>Pull Down</Text>
          <Animated.Text style={opacityStyle}>
            Text opacity is based on gesture's state
          </Animated.Text>
        </LinearGradient>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View>
          <TouchableOpacity style={styles.more} onPress={startAnimation}>
            <Ionicons name="chevron-down" color="#555" size={24} />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  more: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
  },
})

export default Collapse
