import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './Tabbar'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import TabBarIcon from './TabBarIcon'

const BottomTab = createBottomTabNavigator()

const BottomTabBar: React.FC = () => {
  return (
    <BottomTab.Navigator initialRouteName="Screen 1" tabBar={(props) => <TabBar {...props} />}>
      <BottomTab.Screen
        component={Screen(1)}
        name="Screen 1"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="twitch" color="#8c1097" />,
        }}
      />
      <BottomTab.Screen
        component={Screen(2)}
        name="Screen 2"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="facebook" color="blue" />,
        }}
      />
      <BottomTab.Screen
        component={Screen(3)}
        name="Screen 3"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="gg" color="yellow" />,
        }}
      />
      <BottomTab.Screen
        component={Screen(4)}
        name="Screen 4"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="github-alt" color="green" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

const Screen = (index: number) => () => {
  return (
    <View style={styles.container}>
      <Text>Screen {index}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BottomTabBar
