import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated'
import { clamp, withBouncing } from 'react-native-redash'
import Ball from '../../components/Ball'
import { BALL_SIZE } from '../../constants'

export type Context = {
  offsetY: number
  offsetX: number
}

interface GestureProps {
  width: number
  height: number
}

const Gesture: React.FC<GestureProps> = ({ width, height }) => {
  const boundX = width - BALL_SIZE
  const boundY = height - BALL_SIZE

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (_, ctx) => {
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
        <Ball />
      </Animated.View>
    </PanGestureHandler>
  )
}

export default Gesture
