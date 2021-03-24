import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Gesture from './src/screens/1'
import Transitions from './src/screens/2/Transitions'
import CollapseGesture from './src/screens/3'
import Home from './src/screens/Home'
import BottomTabBar from './src/screens/4'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My React native journey ⚔️',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Pan Gesture" component={Gesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
        <Stack.Screen name="Collapse Gesutre" component={CollapseGesture} />
        <Stack.Screen name="Bottom Tabbar" component={BottomTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
