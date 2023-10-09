import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from "./Registrarse.style"
import { useState } from 'react'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { colores } from '../../constantes/colores'

const Registrarse = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password, confirmPass)
        triggerSignup({ email, password })
        console.log(result)
        if(result.isSuccess) {
            dispatch(setUser(result))
        }
    }
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-220}>
            <View style={styles.botonContainer}>
                <Text style={styles.text}>
                    Crea tu cuenta
                </Text>
                <TextInput style={styles.input} placeholder='Correo electrónico' keyboardType='email-address' returnKeyType={"go"} value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true} value={password} onChangeText={setPassword}/>
                <TextInput style={styles.input} placeholder='Repetir Contraseña' secureTextEntry={true} value={confirmPass} onChangeText={setConfirmPass}/>
                <Pressable style={styles.boton} onPress={onSubmit}>
                    <Text style={styles.textBoton}>Registrarse</Text>
                </Pressable>
                <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                <Pressable style={styles.boton} onPress={() => navigation.navigate("Acceder")}>
                    <Text style={styles.textBoton}>Acceder</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default Registrarse