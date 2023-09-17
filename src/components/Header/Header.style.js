import { StyleSheet } from 'react-native'
import { colores } from '../../constantes/colores'
import Cinzel from "../../global/fonts"

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colores.primero,
        height: 80,
        width: `100%`,
        justifyContent: "center",
        alignItems: `center`,
        paddingTop: 40,
    },
    botonContainer: {
        width: "15%",
        alignItems: "flex-start",
    },
    text: {
        textAlign: "center",
        width: "85%",
        fontSize: 30,
        fontFamily: "Cinzel",
    },
})