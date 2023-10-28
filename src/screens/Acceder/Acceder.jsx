import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from "./Acceder.style"
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { useState } from 'react'
import { insertSession } from '../../db'

const Acceder = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password)
        triggerLogin({
            email,
            password,
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken,
                })
                    .then(result => console.log(result))
                    .catch(error => console.log(error.message))
            })
    }
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-220}>
            <View style={styles.botonContainer}>
                <Text style={styles.text}>
                    Acceder a tu cuenta
                </Text>
                <TextInput style={styles.input} placeholder='Correo electrónico' keyboardType='email-address' value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true} value={password} onChangeText={setPassword}/>
                <Pressable style={styles.boton} onPress={onSubmit}>
                    <Text style={styles.textBoton}>Acceder</Text>
                </Pressable>
                <Text style={styles.text}>¿No tienes cuenta?</Text>
                <Pressable style={styles.boton} onPress={() => navigation.navigate("Registrarse")}>
                    <Text style={styles.textBoton}>Registrarse</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default Acceder