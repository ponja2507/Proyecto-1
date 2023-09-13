import { StyleSheet } from 'react-native'
import { colores } from '../../constantes/colores'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colores.primero,
        height: 80,
        width: `100%`,
        justifyContent: `center`,
        alignItems: `center`,
        paddingTop: 20,
    },
    text: {
        fontSize: 30,
    },
})