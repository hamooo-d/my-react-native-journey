import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

interface ListScreenProps {}

const ListScreen: React.FC<ListScreenProps> = () => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        navigation.navigate('Detail')
      }}
    >
      <View style={styles.container}>
        <SharedElement id="image">
          <Image
            source={require('../../assets/photo-1511216113906-8f57bb83e776.jpeg')}
            style={styles.image}
            resizeMode="contain"
          />
        </SharedElement>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 160,
  },
})

export default ListScreen
