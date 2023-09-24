import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from "./CantCarrito.style"
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, decrementar, incrementarConInput } from '../../features/cantCarrito/cantCarritoSlice';

const CantCarrito = () => {
    const [inputAgrega, setInputAgrega] = useState(0)
    const contador = useSelector(state => state.cantCarrito.value);
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>¿Cuantos deseas llevar?</Text>
            <View style={styles.containerBotones}>
                <Pressable style={styles.boton} onPress={() => dispatch(decrementar())}>
                    <Text style={styles.textBoton}> - </Text>
                </Pressable>
                <Text style={styles.textContador}>{contador}</Text>
                <Pressable style={styles.boton} onPress={() => dispatch(incrementar())}>
                    <Text style={styles.textBoton}>+</Text>
                </Pressable>
            </View>
            <View style={styles.containerBotones}>
                <TextInput 
                    style={styles.input}
                    keyboardType='number-pad'
                    placeholder='Ingresar Cantidad'
                    value={inputAgrega}
                    onChangeText={value => setInputAgrega(Number(value))}
                />
                <Pressable 
                    style={styles.boton1} 
                    onPress={() => dispatch(incrementarConInput(inputAgrega))}
                    >
                        <Text style={styles.textBoton1}>Agregar</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default CantCarrito