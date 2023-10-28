import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexGrow: 10,
    },
    listContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
        flexDirection: "row",
    },
    text: {
        margin: 10,
        fontFamily: "IndieFlower",
        fontSize: 20, 
        paddingTop: 15,
    },
    image: {
        width: 80,
        height: 80,
        objectFit: "contain",
    },
    card: {
        flexDirection: "row",
        alignContent: "space-around",
        marginBottom: 5,
    }
})