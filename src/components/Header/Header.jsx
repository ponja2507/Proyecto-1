import { View, Text } from 'react-native'
import React from 'react'
import styles from "./Header.style"
import { StatusBar } from 'expo-status-bar'


const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <StatusBar color="red"/>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header