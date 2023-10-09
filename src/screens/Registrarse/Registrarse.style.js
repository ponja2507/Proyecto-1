import { StyleSheet } from "react-native";
import { colores } from "../../constantes/colores";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      },
    input: {
      backgroundColor: colores.primero,
      margin: 10,
      width: 270,
      height: 40,
      borderRadius: 5,
    },
    botonContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    boton: {
      width: 100,
      height: 40,
      backgroundColor: colores.tercero,
      margin: 15,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    },
    text: {
      fontFamily: "IndieFlower",
      fontSize: 25,
    },
    textBoton: {
      fontFamily: "IndieFlower",
      fontSize: 15,
    }
})