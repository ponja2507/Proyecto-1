import { StyleSheet } from "react-native";
import { colores } from "../../constantes/colores";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 200, 
        height: 200,
    },
    boton: {
        backgroundColor: colores.primero,
        height: 40,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 10,
    },
    text: {
      fontFamily: "IndieFlower",
      fontSize: 20,
    },
})