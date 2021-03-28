import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import AnimeDetails from './AnimeDetails'
import AnimeList from './AnimeList'

export type StackProps = {
  List: undefined
  Detail: { item: any }
}

const Stack = createSharedElementStackNavigator<StackProps>()

const SharedAnimations: React.FC = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        title: 'Anime List',
        headerTitleAlign: 'center',
        gestureEnabled: false,
        // cardOverlayEnabled: true,
        headerStyle: {
          backgroundColor: '#f9dc5c',
        },
      }}
    >
      <Stack.Screen component={AnimeList} name="List" />
      <Stack.Screen
        component={AnimeDetails}
        name="Detail"
        sharedElements={({ params: { item } }) => {
          return [
            {
              id: `item.${item.id}.poster`,
              animation: 'move',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.title`,
              animation: 'move',
              resize: 'clip',
            },
          ]
        }}
      />
    </Stack.Navigator>
  )
}

export default SharedAnimations
