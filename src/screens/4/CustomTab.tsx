import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet } from 'react-native'

interface CustomTabProps {}

const CustomTab: React.FC<CustomTabProps> = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View
        style={{
          position: 'absolute',
          borderRadius: 5,
          width: 64,
          height: 64,
          backgroundColor: '#333',
          top: 0,
          left: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ translateX: -64 / 2 }, { translateY: -64 / 2 + 14 }],
          elevation: 10,
        }}
      >
        <FontAwesome name="google" size={28} color="#fff" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CustomTab
