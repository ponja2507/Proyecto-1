import { View, Text, Image } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from "./Detalle.style"


const Detalle = ({navigation, route}) => {
    const { producto } = route.params
    return (
        <View style={styles.container}>
            <Header title={"Detalle"} navigation={navigation} />
            <Image style={styles.image} source={ { url: producto.images[0] } }/>
            <Text style={styles.title}>{producto.title}</Text>
            <Text style={styles.descripcion}>{producto.description}</Text>
            <Text style={styles.price}>{`$ ${producto.price}`}</Text>
        </View>
    )
}

export default Detalle