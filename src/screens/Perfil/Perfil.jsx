import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState} from 'react'
import styles from "./Perfil.style"
import * as ImagePicker from "expo-image-picker"
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Perfil = ({ navigation }) => {

    const image = useSelector(state => state.auth.imageCamera)
    const dispatch = useDispatch()
    const {localId} = useSelector(state => state.auth)
    const [ triggerSaveProfileImage, result ] = usePostProfileImageMutation()

    const verificarPermisoCamara = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    };

    const logOut = () => {
      dispatch(clearUser())
    };

    const pickImage = async () => {
        const isCameraOk = await verificarPermisoCamara()
        if(isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.5,
            })
            if(!result.canceled) {
                dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            }
        }
    }
    const confirmarImagen = () => {
        triggerSaveProfileImage({image, localId})
    }

  return (
    <View style={styles.container}>
        {image ? (
            <Image source={{ uri: image }} style={styles.img} resizeMode='cover'/>
        ) : (
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXG6_woC_kwnVPgiioFXNZhypB8EXV9sApA&usqp=CAU" }} style={styles.img} resizeMode='contain'/>
        )}
      <Pressable style={styles.boton} onPress={pickImage}>
        <Text style={styles.text}>Tomar foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={confirmarImagen}>
        <Text style={styles.text}>Confirmar foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={logOut}>
        <Text style={styles.text}>Cerrar sesión</Text>
      </Pressable>
    </View>
  )
}

export default Perfil