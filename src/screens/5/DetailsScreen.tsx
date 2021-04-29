import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

interface DetailsScreenProps {}

const DetailsScreen: React.FC<DetailsScreenProps> = () => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        navigation.goBack()
      }}
    >
      <SharedElement id="image" style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require('../../assets/photo-1511216113906-8f57bb83e776.jpeg')}
          resizeMode="contain"
        />
      </SharedElement>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 500,
  },
})

export default DetailsScreen
