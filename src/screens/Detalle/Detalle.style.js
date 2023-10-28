import { StyleSheet } from "react-native";
import { colores } from '../../constantes/colores'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    image: {
      height: '60%',
      width: '100%',
      objectFit: "contain",
    },
    title: {
      fontSize: 30,
      marginVertical: 15,
      fontFamily: "IndieFlower",
      marginLeft: 15,
    },
    descripcion: {
      fontSize: 18,
      marginLeft: 15,
    },
    price: {
      fontSize: 50,
      fontFamily: "Cinzel",
      fontWeight: 'bold',
      marginVertical: 15,
      marginLeft: 15,
    },
    scroll: {
      flex: 1,
      width: "100%",
    },
    boton: {
      backgroundColor: colores.quinto,
      borderRadius: 5,
      width: 200,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#fff",
      fontFamily: "Cinzel",
      fontSize: 17,
    }
})