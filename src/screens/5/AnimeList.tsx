import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { StackProps } from '.'
import { ANIME_CONSTANTS } from '../../constants'
import AnimeThumbnail from './AnimeThumbnail'

type AnimeListProps = StackScreenProps<StackProps, 'List'>

const AnimeList: React.FC<AnimeListProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any | null>()
  const [links, setLinks] = useState<any>()

  const loadMore = async () => {
    if (!links?.next) return

    try {
      const response = await fetch(links?.next as any)
      const json = await response.json()
      const newData = [...data, ...json.data]
      setLinks(json.links)
      setData(newData)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchData = async () => {
    const response = await fetch(
      'https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&page%5Boffset%5D=0'
    )

    const { data, links } = await response.json()

    setData(data)
    setLinks(links)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={48} color="#000" />
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      onEndReached={loadMore}
      keyExtractor={(item: any) => item.id}
      onEndReachedThreshold={0.5}
      // snapToInterval={ANIME_CONSTANTS.FULL_SIZE - 20}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      horizontal
      numColumns={1}
      renderItem={({ item }: any) => <AnimeThumbnail item={item} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AnimeList
