import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Tab title="🕵️ Pan Gesture" goToScreen="Pan Gesture" />
      <Tab title="🎆 Transitions" goToScreen="Transitions" />
    </View>
  )
}

interface TabProps {
  title: string
  goToScreen: string
}

const Tab: React.FC<TabProps> = ({ title, goToScreen }) => {
  const navigator = useNavigation()
  const goTo = () => {
    navigator.navigate(goToScreen)
  }
  return (
    <View style={{ width: '100%', marginBottom: 16 }}>
      <TouchableOpacity style={styles.tab} activeOpacity={0.85} onPress={goTo}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#555" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 20,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
})

export default Home
