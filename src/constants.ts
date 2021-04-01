import { Dimensions } from 'react-native'

export const { width } = Dimensions.get('window')
const ratio = 228 / 362
export const CARD_WIDTH = width * 0.8
export const CARD_HEIGHT = CARD_WIDTH * ratio
export const BALL_SIZE = width * 0.4

const x = width * 0.68
export const ANIME_CONSTANTS = {
  ITEM_WIDTH: x,
  ITEM_HEIGHT: width * 1.2,
  RADIUS: 14,
  SPACING: 12,
  FULL_SIZE: x + 12 * 2,
}
