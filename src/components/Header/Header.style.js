import { StyleSheet } from 'react-native'
import { colores } from '../../constantes/colores'

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colores.primero,
        height: 80,
        width: `100%`,
        alignItems: `center`,
        paddingTop: 40,
        alignContent: "space-around",
    },
    text: {
        textAlign: "center",
        flexGrow: 1,
        fontSize: 30,
        fontFamily: "Cinzel",
    },
    boton: {
        padding: 4,
        backgroundColor: colores.quinto,
        borderRadius: 5,
        margin: 2,
    },
    textBoton: {
        color: "#fff",
        fontWeight: '600',
        fontFamily: "Cinzel",
        fontSize: 20,
    },
    cart: {
        // flex: 1,
        flexDirection: "row-reverse",
        marginLeft: 5,
    },
    textCart: {
        paddingTop: 10,
        color: colores.quinto,
    }
})