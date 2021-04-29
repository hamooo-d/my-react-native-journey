import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import Mountain from '../../components/svg/Mountain'
import Pattern from '../../components/svg/Pattern'
import AnimatedCard from './AnimatedCard'

interface TransitionsProps {}

const cards = [Mountain, Pattern, Mountain]

const Transitions: React.FC<TransitionsProps> = () => {
  const [toggled, setToggle] = useState(false)
  const isToggled = useSharedValue(false)

  useEffect(() => {
    isToggled.value = toggled
  }, [toggled])

  // @ts-ignore
  const transition = useDerivedValue(() => withSpring(isToggled.value))

  return (
    <View style={styles.container}>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        {cards.slice(0, 3).map((card, index) => (
          <AnimatedCard key={index} {...{ index, card, transition }} />
        ))}
      </View>
      <Button
        title={toggled ? 'Reset' : 'Start'}
        onPress={() => setToggle((prev) => !prev)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default Transitions
