import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { mix } from 'react-native-redash'
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

  const style = useAnimatedStyle(() => {
    const color = mix(x.value, 24, 24)

    return {
      fontSize: color,
      fontWeight: '700',
    }
  })

  return (
    <View style={{ flex: 1 }}>
      <SharedElement id={`item.${item.id}.poster`} style={StyleSheet.absoluteFill}>
        <Image
          resizeMode="stretch"
          source={{ uri: item.attributes.posterImage.large }}
          style={styles.image}
        />
      </SharedElement>
      <SharedElement id={`item.${item.id}.title`} style={{ flex: 1 }}>
        <View>
          <Animated.Text style={style}>{item.attributes.titles.en_jp}</Animated.Text>
        </View>
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
