import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "./Header.style"
import { StatusBar } from 'expo-status-bar'



const Header = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Pressable style={styles.boton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textBoton}>Inicio</Text>
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header