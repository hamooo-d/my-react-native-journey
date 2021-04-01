import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { ANIME_CONSTANTS } from '../../constants'

interface AnimeThumbnailProps {
  item: any
}

const AnimeThumbnail: React.FC<AnimeThumbnailProps> = React.memo(({ item }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate('Detail', { item })} style={styles.card}>
      <SharedElement id={`item.${item.id}.poster`} style={styles.image}>
        <Image
          resizeMode="stretch"
          source={{ uri: item.attributes.posterImage.large }}
          style={[StyleSheet.absoluteFill, { borderRadius: RADIUS }]}
        />
      </SharedElement>
      <SharedElement id={`item.${item.id}.title`} style={{ height: 60 }}>
        <View>
          <Text style={styles.text}>{item.attributes.titles.en_jp}</Text>
        </View>
      </SharedElement>
    </Pressable>
  )
})

const { ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING } = ANIME_CONSTANTS

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: ITEM_WIDTH,
    justifyContent: 'center',
    margin: SPACING,
  },
  image: {
    width: '100%',
    height: ITEM_HEIGHT * 0.95,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
})

export default AnimeThumbnail
