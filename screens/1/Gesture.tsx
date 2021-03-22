import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated'
import { clamp, withBouncing } from 'react-native-redash'
import Card from '../../components/Card'
import { CARD_HEIGHT, CARD_WIDTH } from '../../constants'

type Context = {
  offsetY: number
  offsetX: number
}

interface GestureProps {
  width: number
  height: number
}

const Gesture: React.FC<GestureProps> = ({ width, height }) => {
  const boundX = width - CARD_WIDTH
  const boundY = height - CARD_HEIGHT
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (e, ctx) => {
      ctx.offsetY = translateY.value
      ctx.offsetX = translateX.value
    },

    onActive: (e, ctx) => {
      translateX.value = clamp(e.translationX + ctx.offsetX, 0, boundX)
      translateY.value = clamp(e.translationY + ctx.offsetY, 0, boundY)
    },

    onEnd: (e) => {
      translateX.value = withBouncing(withDecay({ velocity: e.velocityX }), 0, boundX)
      translateY.value = withBouncing(withDecay({ velocity: e.velocityY }), 0, boundY)
    },
  })

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={style}>
        <Card />
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {},
  card: {
    width: 300,
    height: 180,
    backgroundColor: 'purple',
  },
})
export default Gesture
