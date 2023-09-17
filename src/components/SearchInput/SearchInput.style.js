import { StyleSheet } from "react-native";
import { colores } from "../../constantes/colores";

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingTop: 10,
    },
    input: {
        color: "white",
        backgroundColor: colores.tercero,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colores.quinto,
        width: "80%",
        fontSize: 20,
    }
})