import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "./Cartitem.style"
import Feather from "@expo/vector-icons/Feather";

const Cartitem = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image 
                source={{
                    uri: item.images[0],
                }}
            />
        </View>
        <View>
            <Text style={styles.nombre}>{item.title}</Text>
        </View>
        <View style={styles.detalle}>
            <View>
                <Text>{item.quantity}</Text>
                <Text>$ {item.price}</Text>
            </View>
            <Pressable>
                <Feather name="trash" size={24} color={"red"}/>
            </Pressable>
        </View>
    </View>
  )
}

export default Cartitem