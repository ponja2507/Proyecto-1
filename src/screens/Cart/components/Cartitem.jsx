import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "./Cartitem.style"
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from 'react-redux';
import { eliminarItem } from '../../../features/cart/cartSlice';

const Cartitem = ({item}) => {
    // const { productos } = route.params
    const producto = item
    const dispatch = useDispatch();

    const handleDeleteFromCart = () => {
        dispatch(eliminarItem({...producto, quantity: 1 }))
    }
  return (
    <View style={styles.container}>
        <View>
            <Image 
                style={styles.image}
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
                <Text style={styles.info}>Cantidad {item.quantity}</Text>
                <Text style={styles.info}>Precio   $ {item.price}</Text>
            </View>
            <Pressable style={styles.eliminar} onPress={handleDeleteFromCart}>
                <Text>Eliminar uno</Text>
                <Feather name="trash" size={24} color={"red"}/>
            </Pressable>
        </View>
    </View>
  )
}

export default Cartitem