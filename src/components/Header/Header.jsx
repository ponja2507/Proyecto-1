import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from "./Header.style"
import { StatusBar } from 'expo-status-bar'



const Header = ({title, navigation}) => {

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.botonContainer}>
        <View style={styles.boton}>
          <Button color={"black"} title='Incio' onPress={() => navigation.navigate("Home")}></Button>
        </View>
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header