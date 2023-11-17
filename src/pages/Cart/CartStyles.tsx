import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "600",
        padding: 10,
    },
    separator: {
        borderWidth: 0.4,
        borderColor: "gray"
    },
    button1: {
        flexDirection: "row",
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#e3e7ea",
        alignSelf: "center",
        marginVertical: 20,
    },
    underBox: {
        flex: 1,
        backgroundColor: "#eaedef",
        alignItems: "center",
    },
    price: {
        fontSize: 26,
        color: "#ff5a00",
        fontWeight: "bold",
        paddingTop: 10,
    },
    button2: {
        marginTop: 10,
        backgroundColor: "#ff7a32",
        width: Dimensions.get("window").width /2,
        borderRadius: 12,
    }
});