import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

interface AnimeThumbnailProps {
  item: any
}

const AnimeThumbnail: React.FC<AnimeThumbnailProps> = React.memo(({ item }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Detail', { item })}>
        <SharedElement id={`item.${item.id}.poster`} style={{ flex: 1, height: 300 }}>
          <Image
            resizeMode="stretch"
            source={{ uri: item.attributes.posterImage.large }}
            style={styles.image}
          />
        </SharedElement>
        <SharedElement id={`item.${item.id}.title`} style={styles.container}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.attributes.titles.en_jp}</Text>
        </SharedElement>
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    elevation: 5,
    margin: 8,
    marginBottom: 24,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  container: {
    padding: 8,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#333',
    borderWidth: 0.5,
  },
})

export default AnimeThumbnail
