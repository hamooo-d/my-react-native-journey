import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CARD_HEIGHT, CARD_WIDTH } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import Mountain from './svg/Mountain'

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return <Mountain />
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: CARD_WIDTH / 10,
  },
})

export default Card
