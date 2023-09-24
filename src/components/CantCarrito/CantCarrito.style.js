import { StyleSheet } from "react-native";
import { colores } from "../../constantes/colores";

export default styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: colores.primero,
      },
    containerBotones: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 5,
    },
    boton: {
        backgroundColor: colores.quinto,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    textBoton: {
        color: "#fff",
        fontWeight: "bold",
    },
    textContador: {
        fontSize: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        color: "orange",
        fontSize: 20,
    },
    texto: {
        fontSize: 30,
        textAlign: "center",
    },
    boton1: {
        backgroundColor: colores.quinto,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    textBoton1: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
        padding: 4,
    },
})