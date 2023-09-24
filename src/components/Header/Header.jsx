import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "./Header.style"
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'
import { colores } from '../../constantes/colores'



const Header = ({title, navigation}) => {
  const cantCarrito = useSelector(state => state.cantCarrito.value)

  return (
    <View style={styles.container}>
      <StatusBar />
      <Pressable style={styles.boton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textBoton}>Inicio</Text>
      </Pressable>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.cart}>
        <Text style={styles.textCart}>({cantCarrito})</Text>
        <FontAwesome5 name="shopping-cart" size={24} color={colores.quinto} />
      </View>
    </View>
  )
}

export default Header