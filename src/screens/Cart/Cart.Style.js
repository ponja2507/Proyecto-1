import { StyleSheet } from "react-native";
import { colores } from '../../constantes/colores'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: "center",
        padding: 40,
      },
    lista:{
      maxHeight: 600,
    },
    confirmar: {
      flex: 1,
    },
    total: {
      alignItems: "center",
      justifyContent: "center",
    },
    textTotal: {
      fontFamily: "Cinzel",
      fontSize: 40,
      marginBottom: 5,
    },
    boton: {
      backgroundColor: colores.quinto,
      borderRadius: 5,
      width: 200,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    textBoton: {
      color: "#fff",
      fontFamily: "Cinzel",
      fontSize: 17,
    }
})