import { StyleSheet } from "react-native";
import { colores } from "../../../constantes/colores";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colores.primero,
      },
      nombre: {
        fontSize: 18,
      },
      detalle: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      },
})