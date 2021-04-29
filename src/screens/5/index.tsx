import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import DetailsScreen from './DetailsScreen'
import ListScreen from './ListScreen'

export type StackProps = {
  List: undefined
  Detail: { item: any }
}

const Stack = createSharedElementStackNavigator<StackProps>()

const SharedAnimations: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="List" mode="modal">
      <Stack.Screen component={ListScreen} name="List" />
      <Stack.Screen
        component={DetailsScreen}
        sharedElements={() => [
          { id: 'image', animation: 'fade', align: 'center-center' },
        ]}
        options={{ headerShown: false }}
        name="Detail"
      />
    </Stack.Navigator>
  )
}

export default SharedAnimations
