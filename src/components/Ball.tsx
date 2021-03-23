import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BALL_SIZE } from '../constants'

interface BallProps {}

const Ball: React.FC<BallProps> = () => {
  return (
    <LinearGradient
      colors={['#fbd07c', '#f68080']}
      start={[0, 0.5]}
      end={[1.0, 0.5]}
      locations={[0.0, 1.0]}
      style={styles.ball}
    />
  )
}

const styles = StyleSheet.create({
  ball: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE,
  },
})

export default Ball
