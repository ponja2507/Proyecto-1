import { StyleSheet } from "react-native";
import { colores } from "../../../constantes/colores";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      borderBottomWidth: 10,
      borderBottomColor: colores.primero,
      alignItems: "center",
    },
    nombre: {
      fontSize: 25,
      fontFamily: "IndieFlower",
    },
    detalle: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      position: "relative",
      alignItems: "center",
      width: 70,
      height: 70,
    },
    info: {
      fontSize: 20,
      fontFamily: "IndieFlower",
    },
    eliminar: {
      flex: 0,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 30,
    }
})