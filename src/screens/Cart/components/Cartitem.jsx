import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "./Cartitem.style"
import Feather from "@expo/vector-icons/Feather";

const Cartitem = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.nombre}>{`Nombre`}</Text>
        </View>
        <View style={styles.detalle}>
            <View>
                <Text>Cantidad</Text>
                <Text>Precio</Text>
            </View>
            <Pressable>
                <Feather name="trash" size={24} color={"red"}/>
            </Pressable>
        </View>
    </View>
  )
}

export default Cartitem