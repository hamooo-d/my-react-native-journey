import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { StackProps } from '.'

type AnimeRouteProps = RouteProp<StackProps, 'Detail'>

type AnimeNavProps = NavigationProp<StackProps, 'Detail'>

type AnimeDetailsProps = {
  route: AnimeRouteProps
  navigation: AnimeNavProps
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ navigation, route }) => {
  const { item } = route.params

  useEffect(() => {
    navigation.setOptions({ title: item.attributes.titles.en_jp })
  }, [])

  return (
    <View>
      <SharedElement id={`item.${item.id}.poster`} style={{ flex: 0, height: 400 }}>
        <Image
          resizeMode="stretch"
          source={{ uri: item.attributes.posterImage.large }}
          style={styles.image}
        />
      </SharedElement>
      <SharedElement id={`item.${item.id}.title`}>
        <Text>{item.attributes.titles.en_jp}</Text>
      </SharedElement>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
})

export default AnimeDetails
