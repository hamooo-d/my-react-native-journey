import { Dimensions } from 'react-native'

export const { width } = Dimensions.get('window')
const ratio = 228 / 362
export const CARD_WIDTH = width * 0.8
export const CARD_HEIGHT = CARD_WIDTH * ratio
export const BALL_SIZE = width * 0.4
