import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Gesture from './screens/1'
import Transitions from './screens/2/Transitions'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pan Gesture" component={Gesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
