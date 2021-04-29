import { FontAwesome } from '@expo/vector-icons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { Fragment } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { width } from '../../constants'
import CustomTab from './CustomTab'
import Indicator from './Indicator'
import Tab from './Tab'

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <LinearGradient style={styles.tabBar} colors={['#f1e1c2', '#fcbc98']}>
      <Indicator index={state.index} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              color: isFocused ? '#fff' : '#666',
              size: 24,
              focused: isFocused,
            })
          : null

        const props = { isFocused, options, onPress, onLongPress, label, icon }

        if (state.routes.length / 2 === index) {
          return (
            <Fragment key={route.key}>
              <CustomTab />
              <Tab {...props} />
            </Fragment>
          )
        }

        return <Tab key={route.key} {...props} />
      })}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: width,
    backgroundColor: '#fff',
    elevation: 4,
  },
})

export default TabBar
