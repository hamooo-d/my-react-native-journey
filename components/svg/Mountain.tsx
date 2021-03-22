import * as React from 'react'
import { FC } from 'react'
import { StyleProp, StyleSheetProperties, ViewStyle } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'
import { CARD_HEIGHT, CARD_WIDTH } from '../../constants'

const Mountain: FC = () => {
  return (
    <Svg
      height={CARD_HEIGHT}
      width={CARD_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 1600 900"
    >
      <Path fill="#f70" d="M0 0h1600v900H0z" />
      <Path fill="#c00" d="M957 450L539 900h857z" />
      <Path fill="#a00" d="M957 450l-84.1 450H1396z" />
      <Path fill="#d6002b" d="M-60 900l458-238 418 238z" />
      <Path fill="#b10022" d="M337 900l61-238 418 238z" />
      <Path fill="#d9004b" d="M1203 546l349 354H876z" />
      <Path fill="#b2003d" d="M1203 546l349 354h-390z" />
      <Path fill="#d3006c" d="M641 695l245 205H367z" />
      <Path fill="#ac0057" d="M587 900l54-205 245 205z" />
      <Path fill="#c4008c" d="M1710 900l-309-268-305 268z" />
      <Path fill="#9e0071" d="M1710 900l-309-268-36 268z" />
      <Path fill="#a0a" d="M1210 900L971 687 725 900z" />
      <Path fill="#808" d="M943 900h267L971 687z" />
    </Svg>
  )
}

export default Mountain
