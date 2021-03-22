import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, G, Path } from 'react-native-svg'
import { CARD_HEIGHT, CARD_WIDTH } from '../../constants'

const Pattern2: React.FC = () => {
  return (
    <Svg viewBox="0 0 1600 800" width={CARD_WIDTH} height={CARD_HEIGHT}>
      <Path fill="#ff9d00" d="M0 0h1600v800H0z" />
      <G stroke="#000" strokeWidth={66.7} strokeOpacity={0.05}>
        <Circle fill="#ff9d00" r={1800} />
        <Circle fill="#fb8d17" r={1700} />
        <Circle fill="#f47d24" r={1600} />
        <Circle fill="#ed6e2d" r={1500} />
        <Circle fill="#e35f34" r={1400} />
        <Circle fill="#d85239" r={1300} />
        <Circle fill="#cc453e" r={1200} />
        <Circle fill="#be3941" r={1100} />
        <Circle fill="#b02f43" r={1000} />
        <Circle fill="#a02644" r={900} />
        <Circle fill="#901e44" r={800} />
        <Circle fill="#801843" r={700} />
        <Circle fill="#6f1341" r={600} />
        <Circle fill="#5e0f3d" r={500} />
        <Circle fill="#4e0c38" r={400} />
        <Circle fill="#3e0933" r={300} />
        <Circle fill="#2e062c" r={200} />
        <Circle fill="#210024" r={100} />
      </G>
    </Svg>
  )
}

const styles = StyleSheet.create({})

export default Pattern2
