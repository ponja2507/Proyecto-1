import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
      },
      descripcion: {
        fontSize: 18,
      },
      price: {
        fontSize: 50,
        fontWeight: 'bold',
        marginVertical: 15,
      },
})