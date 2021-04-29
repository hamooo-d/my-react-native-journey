import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useSharedValue, withTiming } from 'react-native-reanimated'
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
  const x = useSharedValue(0)

  useEffect(() => {
    navigation.setOptions({ title: item.attributes.titles.en_jp })
    x.value = withTiming(1, { duration: 1000 })
  }, [])

  return (
    <View style={{ height: 500, width: '100%' }}>
      <SharedElement
        id={`item.${item.id}.poster`}
        style={StyleSheet.absoluteFill}
      >
        <Image
          resizeMode="stretch"
          source={{ uri: item.attributes.posterImage.large }}
          style={styles.image}
        />
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
  text: { color: '#fff', fontSize: 24 },
})

export default AnimeDetails
