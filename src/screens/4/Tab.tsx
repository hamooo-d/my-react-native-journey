import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'

interface TabProps extends TouchableOpacityProps {
  isFocused: boolean
  options: any
  icon: React.ReactNode
  label:
    | string
    | ((props: {
        focused: boolean
        color: string
        position: LabelPosition
      }) => React.ReactNode)
}

const Tab: React.FC<TabProps> = ({
  options,
  isFocused,
  label,
  icon,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      {...rest}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default Tab
